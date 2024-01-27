import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-moving-images',
  templateUrl: './moving-images.component.html',
  styleUrls: ['./moving-images.component.css']
})
export class MovingImagesComponent implements OnInit {
  imageObservable!: Observable<string>;
  listeImages = [
    'DevOps.jpg',
    'Cybersecurity.jpg',
    'MachineLearning.jpg'
  ];
  currentImage!: string;

  constructor() { }

  ngOnInit() {
    this.imageObservable = interval(1000).pipe(
      startWith(0), // Start with index 0
      map(i => this.listeImages[i % this.listeImages.length])
    );

    this.imageObservable.subscribe(
      (imageName) => {
        this.currentImage = imageName;
      }
    );
  }
}
