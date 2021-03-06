import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {

  userForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.userForm = this.fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  save(userForm: FormGroup) {
    console.log(userForm.value);
  }

  fillForm() {
    this.userForm.setValue({
      firstname: 'Horst',
      lastname: 'Doroschenko',
      email: 'doroschenko@develappers.de',
      password: 'mysecretpassword'
    });
  }

  updateFormValue() {
    this.userForm.patchValue({
      firstname: 'Gregor'
    });
  }

}
