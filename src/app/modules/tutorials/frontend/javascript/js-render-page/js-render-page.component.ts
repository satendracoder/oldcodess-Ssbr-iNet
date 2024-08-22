import { Component } from '@angular/core';
import { Router } from 'express';
import { JsTutorialService } from '../../../../../core/services/js/js-tutorial.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-js-render-page',
  templateUrl: './js-render-page.component.html',
  styleUrl: './js-render-page.component.scss'
})
export class JsRenderPageComponent {


  jsPostsTutorial: any = [];

  activePostId: number = 0;
  constructor(
    private _Js_Tutorial_Service: JsTutorialService,
    private _ActiveRouter: ActivatedRoute
  ) { }


  ngOnInit(): void {
    this._ActiveRouter.params.subscribe((res: any) => {
      this.activePostId = res.id;
      this.IdGetTutorialData();
    })
  }

  IdGetTutorialData() {
    this._Js_Tutorial_Service.jsGetDatById(this.activePostId).subscribe({
      next: jsTutorialdata => {
        console.log("This is Js Posts Tutorial", jsTutorialdata)
        this.jsPostsTutorial = jsTutorialdata
      },
      error: err => {
        console.log("It's Error in JavaScript")
      }
    })
  }
}
