import { Component, OnInit } from '@angular/core';

export interface cardList {
  mainimg: string;
  title: string;
  subtitle: string;
  btntext: string;
  titlesyllabus: string;
  titlesyllabusanchor: string;
  titlebook: string;
  titlebookanchor: string;
  titlenumber: string;
  spotifyimg: string;
  youtubeimg: string;
  btnclassname: string;
}

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.css']
})
export class ListCardComponent implements OnInit {

  public cardData: cardList[] = [];

  constructor() { }

  ngOnInit() {
    this.cardData = this.getCardList();
  }

  getCardList() : cardList[]{
    return [
      {
        mainimg: "../../../assets/images/img1.png",
        title: "Children at Play, no.1",
        subtitle: "Composer: Bartok",
        btntext: "Grade 2",
        titlesyllabus: "Syllabus:",
        titlesyllabusanchor: "Piano 2021-2023",
        titlebook: "Book",
        titlebookanchor: "Piano Exam",
        titlenumber: "Catalogue number: TCL020253 / TCL020253",
        spotifyimg: "../../../assets/images/logo1.png",
        youtubeimg: "../../../assets/images/logo2.png",
        btnclassname: "green"
      },
      {
        mainimg: "../../../assets/images/img2.png",
        title: "Children at Play, no.1",
        subtitle: "Composer: Bartok",
        btntext: "Grade 2",
        titlesyllabus: "Syllabus:",
        titlesyllabusanchor: "Piano 2021-2023",
        titlebook: "Book",
        titlebookanchor: "Piano Exam",
        titlenumber: "Catalogue number: TCL020253 / TCL020253",
        spotifyimg: "../../../assets/images/logo1.png",
        youtubeimg: "../../../assets/images/logo2.png",
        btnclassname: ""
      },
      {
        mainimg: "../../../assets/images/img1.png",
        title: "Children at Play, no.1",
        subtitle: "Composer: Bartok",
        btntext: "Grade 2",
        titlesyllabus: "Syllabus:",
        titlesyllabusanchor: "Piano 2021-2023",
        titlebook: "Book",
        titlebookanchor: "Piano Exam",
        titlenumber: "Catalogue number: TCL020253 / TCL020253",
        spotifyimg: "../../../assets/images/logo1.png",
        youtubeimg: "../../../assets/images/logo2.png",
        btnclassname: "blue"
      },
      {
        mainimg: "../../../assets/images/img2.png",
        title: "Children at Play, no.1",
        subtitle: "Composer: Bartok",
        btntext: "Grade 2",
        titlesyllabus: "Syllabus:",
        titlesyllabusanchor: "Piano 2021-2023",
        titlebook: "Book",
        titlebookanchor: "Piano Exam",
        titlenumber: "Catalogue number: TCL020253 / TCL020253",
        spotifyimg: "../../../assets/images/logo1.png",
        youtubeimg: "../../../assets/images/logo2.png",
        btnclassname: "yellow"
      },
    ]
  }

}
