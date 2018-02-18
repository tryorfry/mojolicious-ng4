import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users = [
    {
      name: 'Sachin',
      email: 'sachindangol@gmail.com'
    },
    {
      name: 'rt',
      email: 'rt@gmail.com'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
