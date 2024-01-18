import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addroadmap',
  templateUrl: './addroadmap.component.html',
  styleUrls: ['./addroadmap.component.css']
})
export class AddroadmapComponent implements OnInit{
  
    constructor(
      private http: HttpClient
    ) { }
    ngOnInit(): void {
    }

    addRoadmap() {
      console.log("Add Roadmap");
    }

}
