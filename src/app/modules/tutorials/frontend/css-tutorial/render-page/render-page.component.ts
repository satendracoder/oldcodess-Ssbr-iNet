import { Component } from '@angular/core';
import { CssTutorialService } from '../../../../../core/services/css-services/css-tutorial.service';
import { error } from 'console';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-render-page',
  templateUrl: './render-page.component.html',
  styleUrl: './render-page.component.scss'
})
export class RenderPageComponent {

  PostListsById: any;

  constructor(
    private _ApiPost: CssTutorialService,
    private _ActiveRouter: ActivatedRoute
  ) {

  }

  activePostId: number = 0;

  ngOnInit(): void {
    this._ActiveRouter.params.subscribe((res: any) => {
      this.activePostId = res.id;
      this.getById()
    })
  }

  getById() {
    this._ApiPost.getCssAllDataById(this.activePostId).subscribe((res: any) => {
      this.PostListsById = res;
    })
  }

}
