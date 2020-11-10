import { Component, OnInit } from '@angular/core';
import { User } from "../../../models/User"

import { UserService } from "../../services/user.service"
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[]
  isEdit: boolean = false
  userEdit: User[];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      users => this.users = users
    )
  }
  editEvent(id: number) {
    this.isEdit = true
    this.userEdit = this.users.filter(user => user.id == id)
  }

  deleteEvent(id: number) {
    //delete from ui
    this.users = this.users.filter(user => user.id != id)



    //delete from database

    this.userService.deleteUser(id).subscribe(msg => console.log(msg))



  }


  cancelEvent() {
    this.isEdit = false
  }

  saveEvent(user: any) {

    this.isEdit = false

    //update in ui
    const id = user.id
    let index: number = this.users.findIndex(user => user.id == id)

    const obj: any = {
      id: id,
      firstname: user.firstname,
      middlename: user.middlename,
      lastname: user.lastname,
      email: user.email,
      phonenumber: user.phonenumber,
      role: user.role,
      address: user.address
    }

    this.users[index] = obj;

    //update in  data base
    this.userService.saveUser(user).subscribe(msg => console.log(msg))
  }
}
