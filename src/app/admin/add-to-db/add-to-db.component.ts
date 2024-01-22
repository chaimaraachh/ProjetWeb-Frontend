import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-add-to-db',
  templateUrl: './add-to-db.component.html',
  styleUrls: ['./add-to-db.component.css']
})
export class AddToDbComponent {
  @Input() fields: any[]=[];
  @Output() onSubmit = new EventEmitter<any>();

  formData: any = {};
  
  submitForm() {
    this.onSubmit.emit(this.formData);
  }

}
