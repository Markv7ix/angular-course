import { Component } from '@angular/core';
import { BioComponent } from '../bio/bio.component';

@Component({
  selector: 'app-home',
  imports: [BioComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
