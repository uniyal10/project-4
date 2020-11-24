import { Component,OnInit } from '@angular/core';
import { User } from 'src/models/User';
import {UserService} from './services/user.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'userApp';
  isAdd = false
  constructor(private userService:UserService){

  }
  addUserEvent(){
  this.isAdd=true
  }
  ngOnInit(): void {
  }
  cancelEvent(){
    this.isAdd = false
  }
  saveEvent(user:any){
    //update in ui
    this.isAdd = false
    this.userService.addUser(user).subscribe((msg)=>{
     console.log(msg)
    })
  }
 
}

