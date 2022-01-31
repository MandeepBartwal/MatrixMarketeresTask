import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  data = {
    name: 'John Doe',
    age: 25,
    city: 'San Francisco',
    country: 'united states',
    phone: '(510) 548-2190',
  };
  constructor() {}

  ngOnInit(): void {}
}
