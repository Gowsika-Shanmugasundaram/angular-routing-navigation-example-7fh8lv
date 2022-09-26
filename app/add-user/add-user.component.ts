import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
 userForm;
 data = [];
 currentIndex = 0;
 isEdit = false;
  

  constructor() { }

  ngOnInit() {
    this.userForm = new FormGroup({
      name:new FormControl(''),
      age :new FormControl(''),
      address: new FormControl('')
    });
  }

  closeEdit() {
    this.isEdit = false;
  }

  onSubmit() {
    if (this.isEdit) {
      this.data[this.currentIndex] = this.userForm.value;
    } else {
      this.data.push(this.userForm.value);
    }
  }

  deleteItem(i) {
    this.data.splice(i,1);
  }

  editItem(i) {
    this.isEdit = true;
    this.currentIndex = i;
    this.userForm.setValue(this.data[i]);
  }

}