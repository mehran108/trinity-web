import { Component, OnInit } from '@angular/core';

export interface gradesList {
  name: string;
  classname: string;
}

@Component({
  selector: 'app-instrument',
  templateUrl: './instrument.component.html',
  styleUrls: ['./instrument.component.css']
})
export class InstrumentComponent implements OnInit {
  instrument = "Instrument";
  grades = "Grades / Diplomas"; 

  public data: gradesList[] = [];

  constructor() { }

  ngOnInit() {
    this.data = this.getGradesData();
  }

  getGradesData() : gradesList[]{
    return [
      {
        name : "Initiat",
        classname: ""
      },
      {
        name : "1",
        classname: ""
      },
      {
        name : "2",
        classname: "active"
      },
      {
        name : "3",
        classname: ""
      },
      {
        name : "4",
        classname: ""
      },
      {
        name : "5",
        classname: ""
      },
      {
        name : "6",
        classname: ""
      },
      {
        name : "7",
        classname: ""
      },
      {
        name : "8",
        classname: ""
      },
      {
        name : "ATCL",
        classname: "static-width"
      },
      {
        name : "LTCL",
        classname: "static-width"
      },
      {
        name : "FTCL",
        classname: "static-width"
      },
    ]
  }

}
