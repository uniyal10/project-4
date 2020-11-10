import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { User } from "../../../models/User"
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  @Input() user: any
  @Output() cancelEvent: EventEmitter<any> = new EventEmitter()
  @Output() saveEvent: EventEmitter<any> = new EventEmitter()
  firstName: string
  middleName: string
  lastName: string
  email: string
  phoneNumber: string
  role: string
  address: string
  constructor() {

  }

  ngOnInit(): void {
    console.log(this.user)
    this.firstName = this.user.firstname
    this.middleName = this.user.middlename
    this.lastName = this.user.lastname
    this.email = this.user.email
    this.phoneNumber = '' + this.user.phonenumber
    this.role = this.user.role
    this.address = this.user.address
  }

  onCancel() {
    this.cancelEvent.emit()
  }

  onSave(id: number) {
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
}
