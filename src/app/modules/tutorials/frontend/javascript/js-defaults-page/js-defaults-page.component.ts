import { Component, OnInit } from '@angular/core';
import { Router } from 'express';
import { JsTutorialService } from '../../../../../core/services/js/js-tutorial.service';

@Component({
  selector: 'app-js-defaults-page',
  templateUrl: './js-defaults-page.component.html',
  styleUrl: './js-defaults-page.component.scss'
})
export class JsDefaultsPageComponent {



  jsPostsTutorial: any = [];

  constructor(
    private _Js_Tutorial_Service: JsTutorialService
  ) { }


  ngOnInit(): void {
    this.AllGetTutorialData()
  }

  AllGetTutorialData() {
    this._Js_Tutorial_Service.jsGetData().subscribe({
      next: jsTutorialdata => {
        console.log("This is Js Posts Tutorial", jsTutorialdata)
        this.jsPostsTutorial = jsTutorialdata.posts
      },
      error: err => {
        console.log("It's Error in JavaScript")
      }
    })
  }
}

