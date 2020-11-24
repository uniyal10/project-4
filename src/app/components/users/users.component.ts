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
  isAdd:boolean
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.isAdd = false
    this.userService.getUsers().subscribe(
      users => this.users = users
    )
  }
  editEvent() {
    // this.isEdit = true
    // this.userEdit = this.users.filter(user => user.id == id)
    this.isAdd = false
  }

  deleteEvent(id: number) {
    //delete from ui
    this.users = this.users.filter(user => user.id != id)



    //delete from database

    this.userService.deleteUser(id).subscribe(msg => console.log(msg))



  }


  cancelEvent() {
    this.isAdd =false
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
  addUserEvent(user:User){
    this.isAdd = false
     this.userService.addUser(user).subscribe(msg=>{
       // add to UI
       this.users.push(user)
     })
  }
  addEvent(){
    this.isAdd = true
  }
}
