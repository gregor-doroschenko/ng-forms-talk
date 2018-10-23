import { Component, OnInit } from '@angular/core';
import { User } from '../user.interface';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.scss']
})
export class TemplateFormsComponent implements OnInit {

  user: User = {
    firstname: 'Gregor',
    lastname: 'Doroschenko',
    email: 'doroschenko@develappers.de'
  };

  constructor() { }

  ngOnInit() { }

  save(userForm: User) {
    console.log(userForm);
  }

}
