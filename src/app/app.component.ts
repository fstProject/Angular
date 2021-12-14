import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ecommerce';
  students = [
    {
      id:1,
      name:"yassine",
      section:'if4'
    },
    {
      id:4,
      name:"BILEL",
      section:'if4'
    }
  ]
}

