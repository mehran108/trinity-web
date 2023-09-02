import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TrinityService } from '../trinity.service';

export interface GradesList {
  name: string;
  value: number;
  active: boolean;
}

@Component({
  selector: 'app-instrument',
  templateUrl: './instrument.component.html',
  styleUrls: ['./instrument.component.css']
})
export class InstrumentComponent implements OnInit {
  instrument = 'Instrument';
  grades = 'Grades / Diplomas';
  public instrumentList: Array<any> = new Array<any>();
  public data: GradesList[] = [];
  @Output() onFilterChange: EventEmitter<any> = new EventEmitter();
  public instrument_Id = 1;
  constructor(public trinityService: TrinityService) { }

  ngOnInit() {
    this.trinityService.GetInstruments({}).subscribe(res => {
     this.instrumentList = res;
    })
    this.data = this.getGradesData();
  }

  getGradesData() : GradesList[]{
    return [
      {
        name : 'Initial',
        value: 0,
        active: false
      },
      {
        name : '1',
        value: 1,
        active: false
      },
      {
        name : '2',
        value: 2,
        active: false
      },
      {
        name : '3',
        value: 3,
        active: false
      },
      {
        name : '4',
        value: 4,
        active: false
      },
      {
        name : '5',
        value: 5,
        active: false
      },
      {
        name : '6',
        value: 6,
        active: false
      },
      {
        name : '7',
        value: 7,
        active: false
      },
      {
        name : '8',
        value: 8,
        active: false
      },
      {
        name : 'ATCL',
        value: 9,
        active: false
      },
      {
        name : 'LTCL',
        value: 10,
        active: false
      },
      {
        name : 'FTCL',
        value: 11,
        active: false
      },
    ]
  }
  onGradeChange(grade: any) {
    grade.active= !grade.active;
    this.setFilters();
  }
  setFilters() {
    const model = {
      instrument_Id: this.instrument_Id,
      grades: this.data.filter(el => el.active).map(row => row.value).toString()
    }
    this.onFilterChange.emit(model);
  }
}
