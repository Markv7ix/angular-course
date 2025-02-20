import { Component, OnInit } from '@angular/core';
import { Developer } from '../developer';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bio',
  imports: [CommonModule],
  templateUrl: './bio.component.html',
  styleUrl: './bio.component.css'
})
export class BioComponent implements OnInit{
  ngOnInit(): void {
    this.loadDeveloper();
  }

  //dev!: Developer;
  devs! : Developer[]; 

  loadDeveloper() {
    this.devs = 
      [
        new Developer('Marcos', 'Hernandez', 'Java', 2007), 
        new Developer('Taryn', 'Ernd', 'C++', 1997),
        new Developer('Arindam', 'Arindam', 'Java', 2007)
      ];
  }
}
