import { Component } from '@angular/core';

@Component({
  selector: 'app-best-guidance',
  templateUrl: './best-guidance.component.html',
  styleUrl: './best-guidance.component.scss'
})
export class BestGuidanceComponent {


  BestGuidance = [
    {
      countervalue: "500K",
      titletop: "Online",
      titleDown: "Students",
      icons: "language",
      baseurl: "https://courses.ssbrinet.com/",
      color: "#13a132"
    },
    {
      countervalue: "55K+",
      titletop: "Courses",
      titleDown: "Website",
      icons: "book_4",
      baseurl: "https://courses.ssbrinet.com/",
      color: "#4c0a9d"
    },
    {
      countervalue: "100K+",
      titletop: "Projects",
      titleDown: "Website",
      icons: "stroller",
      baseurl: "",
      color: "#1114ce"
    },
    {
      countervalue: "140K+",
      titletop: "Learners",
      titleDown: "YouTube",
      icons: "youtube_activity",
      baseurl: "",
      color: "red"
    },
    {
      countervalue: "250K+",
      titletop: "eBook",
      titleDown: "Website",
      icons: "",
      baseurl: "",
      color: "blue"
    },
    {
      countervalue: "5+",
      titletop: "Years of",
      titleDown: "Experience",
      icons: "workspace_premium",
      baseurl: ""
    }
  ]
}
