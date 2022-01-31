import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  url =
    'https://gorest.co.in/public-api/users?_format=json&access-token=NELh_j5bLUT72rLc3gpW5X7Jg9Opj4awzce1';
  constructor(private http: HttpClient) {}

  userlist() {
    return this.http.get(this.url).pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }
}
