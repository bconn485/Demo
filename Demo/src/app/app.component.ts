//Typescript for form component
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  //Doesn't matter for this samll demo but I chose to make this component standalone since angular suggests it is a simpler way to make components reusable.
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form: FormGroup;
  dropdownError: boolean = false;
  submitted: boolean = false;

  //Giving the form it's defualt values
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      money: [''],
      date: [''],
      option1: [false],
      option2: [true],
      dropdown: ['']
    });
  }

  //function for when Submit is clicked
  onSubmit() {
    if (!this.form.value.dropdown) {
      this.dropdownError = true;
      this.submitted = false;
      return;
    }
    console.log('Form Submitted', this.form.value);
    this.dropdownError = false;
    this.submitted = true;
    this.form.reset({
      money: '',
      date: '',
      option1: false,
      option2: true,
      dropdown: ''
    });
  }
//function for when reset is clicked
  resetForm() {
    this.form.reset({
      money: '',
      date: '',
      option1: false,
      option2: true,
      dropdown: ''
    });
    this.dropdownError = false;
    this.submitted = false;
  }
}
