import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  command: string = '';

  constructor() { }

  startCount($command: string){
    this.command = $command;
  }



  ngOnInit(): void {
  }


}
