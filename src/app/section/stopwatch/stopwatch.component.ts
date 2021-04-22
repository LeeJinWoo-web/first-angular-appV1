import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss']
})
export class StopwatchComponent implements OnInit {

  command: string = '';

  constructor() { }

  startCount($command: string){
    this.command = $command;
  }

  ngOnInit(): void {
  }

}
