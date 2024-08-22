import { Component } from '@angular/core';

@Component({
  selector: 'app-microsoft-tools-page',
  templateUrl: './microsoft-tools-page.component.html',
  styleUrl: './microsoft-tools-page.component.scss'
})
export class MicrosoftToolsPageComponent {

  Data_Analytics = [
    {
      tutorialImage: "assets/icons/tools/excel.svg",
      tutorialName: "Learn Excel",
      tutorialNameUrl: "",
    },

    {
      tutorialImage: "assets/icons/tools/word.svg",
      tutorialName: "Learn Word",
      tutorialNameUrl: "",
    },

    {
      tutorialImage: "assets/icons/tools/ppt.svg",
      tutorialName: "Learn PPT",
      tutorialNameUrl: "",
    },

    {
      tutorialImage: "assets/icons/tools/ms-outlook.svg",
      tutorialName: "Learn OutLook",
      tutorialNameUrl: "",
    },

    {
      tutorialImage: "assets/icons/tools/power-bi.svg",
      tutorialName: "Learn Power BI",
      tutorialNameUrl: "",
    },

    {
      tutorialImage: "assets/icons/tools/excel.svg",
      tutorialName: "Excel Reference",
      tutorialNameUrl: "",
    },
  ]
}