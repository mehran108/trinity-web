import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TrinityService } from 'src/app/trinity.service';

export interface Repertoire {
 title? :string;
 composer? :string;
 syllabus? :string;
 syllabus_URL? :string;
 book? :string;
 book_URL? :string;
 spotify_URL? :string;
 youTube_URL? :string;
 label1_Text ? :string;
 label1_Colour? :string;
 label2_Text ? :string;
 label2_Colour? :string;
 image? :string;
 catalogue? :string;
 title_Composer? :string;
}

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.css']
})
export class ListCardComponent implements OnInit, OnChanges {
  @Input() filters: any;
  public cardData: Repertoire[] = [];
  public cardTempData: Repertoire[] = [];

  public repertoireList: Array<any> = new Array();
  constructor(public trinityService: TrinityService) { }


  ngOnInit() {
  }
ngOnChanges(changes: SimpleChanges): void {
  if (changes && changes['filters']) {
    if (this.filters && this.filters.grades && this.filters.instrument_Id) {
      this.getData();
    }
  }
}
public getData() {
  this.trinityService.GetRepertoire(this.filters).subscribe(res => {
   this.cardData = res;
   this.cardTempData = [...res];
  });
}
  // getCardList() : Repertoire[]{
  //   return [
  //     {
  //       image: "assets/images/img1.png",
  //       title: "Children at Play, no.1",
  //       composer: "Composer: Bartok",
  //       label1_Text: "Grade 2",
  //       label1_Colour: 'lightblue',
  //       syllabus: "Piano 2021-2023",
  //       book: "Piano Exam Pieces Plus Exercises 2021-2023",
  //       catalogue: "TCL020253 / TCL020253",
  //       spotify_URL: "assets/images/logo1.png",
  //       youTube_URL: "assets/images/logo2.png",
  //     },
  //     {
  //       image: "assets/images/img2.png",
  //       title: "Children at Play, no.2",
  //       composer: "Bartok",
  //       label1_Text: "Grade 2",
  //       syllabus: "Piano 2021-2023",
  //       book: "Piano Exam Pieces Plus Exercises 2021-2023",
  //       catalogue: "TCL020253 / TCL020253",
  //       spotify_URL: "assets/images/logo1.png",
  //       youTube_URL: "assets/images/logo2.png",
  //     },
  //   ]
  // }

}
