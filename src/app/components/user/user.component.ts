import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { User } from "../../../models/User"
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() user: any
  // @Output() editEvent: EventEmitter<any> = new EventEmitter()
  @Output() deleteEvent: EventEmitter<any> = new EventEmitter()
  @Output() saveEvent: EventEmitter<any> = new EventEmitter()

  isEdit = false
  isDisplay :boolean
  firstName: string
  middleName: string
  lastName: string
  email: string
  phoneNumber: string
  role: string
  address: string
  constructor() { }

  ngOnInit(): void {
    this.isDisplay = true
    this.firstName = this.user.firstname
    this.middleName = this.user.middlename
    this.lastName = this.user.lastname
    this.email = this.user.email
    this.phoneNumber = '' + this.user.phonenumber
    this.role = this.user.role
    this.address = this.user.address
  }

  // onEdit(id: number) {
  //   this.editEvent.emit(id)
  // }

  onEdit(){
this.isEdit = true
this.isDisplay = false
  }
  onDelete(id: number) {
    // console.log(id)
    this.deleteEvent.emit(id)
  }

  onSave(id:number){
    this.isEdit = false
    this.isDisplay = true
    const user = {
      id: id,
      firstname: this.firstName,
      middlename: this.middleName,
      lastname: this.lastName,
      email: this.email,
      phonenumber: this.phoneNumber,
      role: this.role,
      address: this.address
    }
    this.saveEvent.emit(user)
  }
  onCancel(){
    this.isEdit = false
    this.isDisplay = true
    this.firstName = this.user.firstname
    this.middleName = this.user.middlename
    this.lastName = this.user.lastname
    this.email = this.user.email
    this.phoneNumber = '' + this.user.phonenumber
    this.role = this.user.role
    this.address = this.user.address
  }
}
