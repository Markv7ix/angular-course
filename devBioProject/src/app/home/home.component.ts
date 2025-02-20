import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BioComponent } from '../bio/bio.component';


@Component({
  selector: 'app-home',
  imports: [BioComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'devBioProject';
}
