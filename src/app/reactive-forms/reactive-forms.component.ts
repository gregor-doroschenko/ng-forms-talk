import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
    this.userForm = new FormGroup({
      firstname: new FormControl('Gregor'),
      lastname: new FormControl('Doroschenko'),
      email: new FormControl('doroschenko@develappers.de')
    });
  }

  createForm() {
    this.userForm = this.fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  createSecondForm() {
    this.userForm = new FormGroup({
      firstname: new FormControl('Gregor'),
      lastname: new FormControl('Doroschenko'),
      email: new FormControl('doroschenko@develappers.de')
    });
  }

  save(userForm: FormGroup) {
    console.log(userForm.value);
  }

  fillForm() {
    this.userForm.setValue({
      firstname: 'Horst',
      lastname: 'Doroschenko',
      email: 'doroschenko@develappers.de'
    });
  }

  updateFormValue() {
    this.userForm.patchValue({
      firstname: 'Gregor'
    });
  }

}
