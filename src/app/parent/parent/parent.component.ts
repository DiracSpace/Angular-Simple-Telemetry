import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.sass']
})
export class ParentComponent implements OnInit {


  @Input() childFunction: any;
  @Input() childParams: any[] = [];
  @Input() functionName: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  parentClicked(e: any) {


    var result = this.childFunction(...this.childParams);
    console.log(`User with id ${'tokenuserId'} and name ${'tokenusername'} has clicked on ${this.functionName} with params ${this.childParams}.
                ${result ? 'Result = ' + result : ''}`);
    // Telemetry logic

    //post with json with data.



    // child function

  }
}
