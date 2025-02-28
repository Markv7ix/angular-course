import { Component, OnInit } from '@angular/core';
import { Developer } from '../developer';
import { ActivatedRoute } from '@angular/router';
import { DeveloperService } from '../developer.service';

@Component({
  selector: 'app-bio-details',
  imports: [],
  templateUrl: './bio-details.component.html',
  styleUrl: './bio-details.component.css'
})
export class BioDetailsComponent implements OnInit{
  dev!: Developer;
  constructor(private route: ActivatedRoute, private developerService: DeveloperService) {}

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get("id");
    if (id) {
      const developer = this.developerService.getDevelopersById(id);
      if (developer) {
        this.dev = developer;
      }
    }
  }
}