import { Component } from '@angular/core';
import { CssTutorialService } from '../../../../../core/services/css-services/css-tutorial.service';

@Component({
  selector: 'app-css-view-page',
  templateUrl: './css-view-page.component.html',
  styleUrl: './css-view-page.component.scss'
})
export class CssViewPageComponent {

  PostLists: any = [];

  constructor(private _ApiPost: CssTutorialService) { }

  ngOnInit(): void {
    this._ApiPost.getCssAllData().subscribe({
      next: res => {
        this.PostLists = res;
      },
      error: err => {
        console.log("View Template of Css tutorial")
      }
    })
  }
}
