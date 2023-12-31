import { Component, OnInit, ViewChild } from '@angular/core';
import { TrinityService } from '../trinity.service';
import { ListCardComponent } from './list-card/list-card.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public filters: any;
  public searchString!: string;
  @ViewChild(ListCardComponent) card!: ListCardComponent;
  ngOnInit() {
  }
  fetchData(filters: any) {
    this.filters = {...filters};
  }
  onFilter(searchString: any) {
    if (searchString && searchString.length > 2) {
      const tempList = [...this.card.cardTempData];
      if (this.card && this.card.cardData) {
        const filteredList = tempList.filter(el => el.title_Composer ? el.title_Composer?.toLocaleLowerCase().indexOf(searchString.toLocaleLowerCase()) > -1: true);
        this.card.cardData = [...filteredList];
      }
    } else {
      this.card.cardData = [...this.card.cardTempData];
    }
  }
}
