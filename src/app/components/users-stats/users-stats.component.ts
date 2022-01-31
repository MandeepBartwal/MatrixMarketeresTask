import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-stats',
  templateUrl: './users-stats.component.html',
  styleUrls: ['./users-stats.component.css'],
})
export class UsersStatsComponent implements OnInit {
  data = [
    {
      user: 'C. Jay',
      isVerified: false,
    },
    {
      user: 'D. Bron',
      isVerified: false,
    },
    {
      user: 'M. Hamilton',
      isVerified: false,
    },
    {
      user: 'R. Daymond',
      isVerified: false,
    },
  ];
  isVerified = false;
  btnVal = 'Verify';
  constructor() {}
  verified() {
    this.isVerified = true;
    this.btnVal = 'Verified';
  }

  Allverified() {
    if (this.isVerified == false) {
      alert('false');
    } else {
      alert('true');
    }
  }
  ngOnInit(): void {}
}
