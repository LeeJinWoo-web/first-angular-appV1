import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  @Output()
  clickEvent = new EventEmitter();

  constructor() { }

  startCount($event: MouseEvent){
    console.log("start-btn")
    this.clickEvent.emit('string');
  }

  stopCount($event: MouseEvent){
    console.log("stop-btn")
  }

  resetCount($event: MouseEvent){
    console.log("reset-btn")
  }

  ngOnInit(): void {
  }

}
