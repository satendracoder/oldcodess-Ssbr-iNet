import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './components/alert/alert.component';
import { TableComponent } from './components/table/table.component';
import { SubscribeEmailComponent } from './components/subscribe-email/subscribe-email.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTreeModule } from '@angular/material/tree';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTooltipModule } from '@angular/material/tooltip';

import { SpinnerCardComponent } from './components/spinner-card/spinner-card.component';
import { AsideCardComponent } from './components/aside-card/aside-card.component';
import { SubmenuCardComponent } from './components/submenu-card/submenu-card.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { BghoverDirective } from './directive/hover/bghover.directive';
import { TexthoverDirective } from './directive/hover/texthover.directive';

@NgModule({
  declarations: [
    AlertComponent,
    TableComponent,
    SubscribeEmailComponent,
    SpinnerCardComponent,
    AsideCardComponent,
    SubmenuCardComponent,
    BghoverDirective,
    TexthoverDirective
  ],
  imports: [
    CommonModule,
    MatButtonModule, MatCardModule, MatCheckboxModule, MatChipsModule,
    MatDatepickerModule, MatDialogModule, MatDividerModule, MatExpansionModule,
    MatFormFieldModule, MatGridListModule, MatIconModule, MatInputModule,
    MatListModule, MatMenuModule, MatSidenavModule, MatToolbarModule,
    MatTabsModule, MatTableModule, FormsModule, ReactiveFormsModule, MatTreeModule,
    MatSlideToggleModule, MatProgressSpinnerModule, MatBadgeModule,
    RouterLink, RouterLinkActive, MatTooltipModule

  ], exports: [
    MatButtonModule, MatCardModule, MatCheckboxModule, MatChipsModule,
    MatDatepickerModule, MatDialogModule, MatDividerModule, MatExpansionModule,
    MatFormFieldModule, MatGridListModule, MatIconModule, MatInputModule,
    MatListModule, MatMenuModule, MatSidenavModule, MatToolbarModule,
    MatTabsModule, MatTableModule, FormsModule, ReactiveFormsModule, MatTreeModule,
    MatSlideToggleModule, MatProgressSpinnerModule, MatBadgeModule, MatTooltipModule,




    //reusable components
    SpinnerCardComponent, AsideCardComponent, SubmenuCardComponent
  ]
})
export class SharedModule { }
