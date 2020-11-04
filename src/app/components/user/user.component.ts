import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { User } from "../../../models/User"
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() user: any
  @Output() editEvent: EventEmitter<any> = new EventEmitter()
  @Output() deleteEvent: EventEmitter<any> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  onEdit(id: number) {
    this.editEvent.emit(id)
  }
  onDelete(id: number) {
    // console.log(id)
    this.deleteEvent.emit(id)
  }
}
