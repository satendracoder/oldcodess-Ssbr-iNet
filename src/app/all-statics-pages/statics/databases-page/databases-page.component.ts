import { Component } from '@angular/core';

@Component({
  selector: 'app-databases-page',
  templateUrl: './databases-page.component.html',
  styleUrl: './databases-page.component.scss'
})
export class DatabasesPageComponent {


  databases = [

    {
      tutorialImage: "assets/icons/databases/sql.svg",
      tutorialName: "Learn SQL",
      tutorialNameUrl: "",
      tutorialReference: "SQL Reference",
      tutorialReferenceUrl: "",
    },


    {
      tutorialImage: "assets/icons/databases/mysql.svg",
      tutorialName: "Learn MySQL",
      tutorialNameUrl: "",
      tutorialReference: "MySQL Reference",
      tutorialReferenceUrl: "",
    },


    {
      tutorialImage: "assets/icons/databases/php.svg",
      tutorialName: "Learn PHP",
      tutorialNameUrl: "",
      tutorialReference: "PHP Reference",
      tutorialReferenceUrl: "",
    },
    {
      tutorialImage: "assets/icons/databases/nodejs.svg",
      tutorialName: "Learn Node js",
      tutorialNameUrl: "",
      tutorialReference: "Node js Reference",
      tutorialReferenceUrl: "",
    },
    {
      tutorialImage: "assets/icons/databases/dotnet.svg",
      tutorialName: "Learn ASP",
      tutorialNameUrl: "",
      tutorialReference: "ASP Reference",
      tutorialReferenceUrl: "",
    },

    {
      tutorialImage: "assets/icons/databases/mongodb.svg",
      tutorialName: "Learn MongoDB",
      tutorialNameUrl: "",
      tutorialReference: "MongoDB Reference",
      tutorialReferenceUrl: "",
    },

    {
      tutorialImage: "assets/icons/databases/aws.svg",
      tutorialName: "Learn AWS",
      tutorialNameUrl: "",
      tutorialReference: "AWS Reference",
      tutorialReferenceUrl: "",
    },
  ]
}

