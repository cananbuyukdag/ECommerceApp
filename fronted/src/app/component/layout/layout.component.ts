import { Component } from '@angular/core';
import { SharedModule } from 'src/app/common/shared/shared.module';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [SharedModule, NavbarComponent],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {}
