import { BreakpointObserver } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-css-layouts',
  templateUrl: './css-layouts.component.html',
  styleUrl: './css-layouts.component.scss'
})
export class CssLayoutsComponent {

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  constructor(
    private observer: BreakpointObserver,
    private titleService: Title,
    private meta: Meta,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {

  }



  ngAfterViewInit(): void {
    this.observer.observe(['(max-width:800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close()
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    })

    this.cd.detectChanges();

  }

}
