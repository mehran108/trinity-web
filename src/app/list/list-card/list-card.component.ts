import { Component, OnInit } from '@angular/core';
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
 label1_colour? :string;
 label2_Text ? :string;
 label2_colour? :string;
 image? :string;
 catalogue? :string;
}

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.css']
})
export class ListCardComponent implements OnInit {

  public cardData: Repertoire[] = [];

  public repertoireList: Array<any> = new Array();
  constructor(public trinityService: TrinityService) { }


  ngOnInit() {
    this.trinityService.GetRepertoire({}).subscribe(res => {
      console.log(res);
    })
    this.cardData = this.getCardList();
  }

  getCardList() : Repertoire[]{
    return [
      {
        image: "assets/images/img1.png",
        title: "Children at Play, no.1",
        composer: "Composer: Bartok",
        label1_Text: "Grade 2",
        label1_colour: 'lightblue',
        syllabus: "Piano 2021-2023",
        book: "Piano Exam Pieces Plus Exercises 2021-2023",
        catalogue: "TCL020253 / TCL020253",
        spotify_URL: "assets/images/logo1.png",
        youTube_URL: "assets/images/logo2.png",
      },
      {
        image: "assets/images/img2.png",
        title: "Children at Play, no.2",
        composer: "Bartok",
        label1_Text: "Grade 2",
        syllabus: "Piano 2021-2023",
        book: "Piano Exam Pieces Plus Exercises 2021-2023",
        catalogue: "TCL020253 / TCL020253",
        spotify_URL: "assets/images/logo1.png",
        youTube_URL: "assets/images/logo2.png",
      },
    ]
  }

}
