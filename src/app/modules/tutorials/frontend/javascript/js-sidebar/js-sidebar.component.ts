import { Component, OnInit } from '@angular/core';
import { JsTutorialService } from '../../../../../core/services/js/js-tutorial.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-js-sidebar',
  templateUrl: './js-sidebar.component.html',
  styleUrl: './js-sidebar.component.scss'
})
export class JsSidebarComponent implements OnInit {


  jsPostsLink: any = [];

  constructor(
    private _Js_Tutorial_Service: JsTutorialService,
    private _RouterLink: Router
  ) { }


  ngOnInit(): void {
    this.GetTutorialData();
  }

  GetTutorialData() {
    this._Js_Tutorial_Service.jsGetData().subscribe({
      next: jsdata => {
        this.jsPostsLink = jsdata.posts
      },
      error: err => {
        console.log("It's Error in JavaScript")
      }
    })
  }

}
