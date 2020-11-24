import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() addUserEvent: EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  addUser(){
     this.addUserEvent.emit()
  }
}
