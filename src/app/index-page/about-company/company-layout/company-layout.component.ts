import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Title, Meta } from '@angular/platform-browser';
import { BreakpointObserver } from '@angular/cdk/layout';
import { windowToggle } from 'rxjs';

@Component({
  selector: 'app-company-layout',
  templateUrl: './company-layout.component.html',
  styleUrl: './company-layout.component.scss'
})
export class CompanyLayoutComponent implements OnInit {

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
