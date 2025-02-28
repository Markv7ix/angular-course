import { Component, OnInit } from '@angular/core';
import { Developer } from '../developer';
import { CommonModule } from '@angular/common';
import { DeveloperService } from '../developer.service';
import { Router, RouterModule } from '@angular/router';

//@Component({  selector: 'app-bio',  standalone: true,  imports: [],  templateUrl: './bio.component.html',  styleUrl: './bio.component.css'})export class BioComponent implements OnInit {    ngOnInit(): void {    this.loadDeveloper();  }  dev!: Developer;  loadDeveloper()  {    this.dev =     new Developer("tarryn","ernd","c++", 1997)  }}
@Component({
  selector: 'app-bio',
  imports: [CommonModule, RouterModule],
  templateUrl: './bio.component.html',
  styleUrl: './bio.component.css'
})
export class BioComponent implements OnInit{
  // constructor(private developerService: DeveloperService,
  //             private router: Router) {}
  
  constructor(private developerService: DeveloperService, private router: Router) {

  }

  devs?: Developer[];

  ngOnInit(): void {
    this.developerService.getAllDevelopers().
      subscribe(response => this.devs = response);
  }
  
  goToBioDetails(id: string) {
    this.router.navigate(['/bio', id]);
  }
}
