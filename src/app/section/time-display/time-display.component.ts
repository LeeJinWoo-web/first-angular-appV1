import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.scss']
})
export class TimeDisplayComponent implements OnInit{

  //외부 컴포넌트에서 입력받는값
  @Input()
  inputData!: string;

  min: number = 0;
  sec: number = 0;
  ms: number = 0;

  timeInterval: any;

  // LIFE CYCLE
  // -Constructor
  // -ngOnchanges
  // -ngOnInit
  // -ngDoCheck
  //    .ngAfterContentInit
  //    .ngAfterContentChecked
  //    .ngAfterViewInit
  //    .ngAfterViewChecked
  // -ngOnDestroy

  constructor() {
    // setInterval(()=> {
    //   this.test ++;
    // }, 1000)
  }

  timeStart(){
    this.timeInterval = setInterval(() => {
        this.ms++
    }, 10)
  }

  timeStop(){
    clearInterval(this.timeInterval)
  }

  timeReset(){
    this.timeStop();
    this.min = 0;
    this.sec = 0;
    this.ms = 0;
  }

  // 부모 컴포넌트에서 자식 컴포넌트의 입력 프로퍼티(@Input 데코레이터가 적용된 프로퍼티)에 바인딩한 값이 초기화 또는 변경되었을 때 호출됩니다.
  // ngOnInit 호출 이전에 최소 1회 호출되며 이후 입력 프로퍼티가 변경될 때마다 호출됩니다.
  // ngOnChanges 메소드는 입력 프로퍼티의 정보를 담고 있는 SimpleChanges 객체를 파라미터로 전달 받을 수 있습니다.
  // 이 객체는 입력 프로퍼티의 현재값(currentValue)과 이전값(previousValue)을 포함하고 있습니다.
  // ngOnChanges(command: SimpleChanges) {
  //   for(let propName in command) {
  //     if(propName == 'inputData'){
  //       switch(command[propName].currentValue){
  //         case 'start' :
  //           this.timeStart();
  //           break;
  //         case 'stop' :
  //           this.timeStop();
  //           break;
  //         case 'reset' :
  //           this.timeReset();
  //           break;
  //       }
  //     }
  //   }
  // }
  // ngOnChanges 메소드 동작 이후 입력 프로퍼티를 포함한 모든 프로퍼티의 초기화가 완료된 시점에 한 번만 호출됩니다.
  // 일반적으로 프로퍼티의 초기화는 TypeScript에서는 constructor에서 하는 것이 일반적이지만
  // Angular에서는 ngOnInit에서 수행하는 것이 좋습니다.
  ngOnInit(): void {
    console.log(this.inputData)
  }

}
