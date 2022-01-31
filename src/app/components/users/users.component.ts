import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service/users.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  UsersList: any;
  constructor(private listapi: UsersService) {}

  ngOnInit(): void {
    this.listapi.userlist().subscribe((res) => {
      this.UsersList = res;
      console.log(res);
    });
  }
}
