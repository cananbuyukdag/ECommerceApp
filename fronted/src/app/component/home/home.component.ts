import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlankComponent } from 'src/app/common/component/blank/blank.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, BlankComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
