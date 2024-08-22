import { Component, OnInit } from '@angular/core';
import { CssTutorialService } from '../../../../../core/services/css-services/css-tutorial.service';

@Component({
  selector: 'app-css-sidebar',
  templateUrl: './css-sidebar.component.html',
  styleUrl: './css-sidebar.component.scss'
})
export class CssSidebarComponent {

  sideLists: any = [];
  Posts: any[] = [];

  constructor(private _ApiPost: CssTutorialService) { }

  ngOnInit(): void {
    this._ApiPost.getCssAllData().subscribe({
      next: res => {
        this.sideLists = res;
      }
    })
  }

}
