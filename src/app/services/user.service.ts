import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from "../../models/User"
import { HttpClient, HttpHeaders } from "@angular/common/http"

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = "http://localhost:3000/users"
  constructor(private http: HttpClient) { }
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url)
  }
  deleteUser(id: number): Observable<any> {
    const url: string = `http://localhost:3000/users/${id}`
    return this.http.delete(url, httpOptions)
  }
  saveUser(user: User): Observable<any> {
    const url: string = `http://localhost:3000/users/${user.id}`
    console.log(user)
    return this.http.patch(url, JSON.stringify(user), httpOptions)
  }
  addUser(user:User){
    const url: string = `http://localhost:3000/users`
    return this.http.post(url, JSON.stringify(user), httpOptions)
  }
}
