import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeveloperService } from '../developer.service';
import { Router } from '@angular/router';
import { Developer } from '../developer';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-bio-create',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './bio-create.component.html',
  styleUrl: './bio-create.component.css'
})
export class BioCreateComponent {

  devForm!: FormGroup;

  constructor(private fb:FormBuilder, 
      private developerService: DeveloperService, 
      private router: Router) {

    this.devForm = this.fb!.group({
    'firstName': new FormControl(''),
    'lastName': new FormControl(''),
    'favoriteLanguage': new FormControl(''),
    'yearStarted': new FormControl('')

    })
 }

    get firstName() {return this.devForm.get('firstName')?.value;}
    get lastName() {return this.devForm.get('lastName')?.value;}
    get favoriteLanguage() {return this.devForm.get('favoriteLanguage')?.value;}
    get yearStarted() {return this.devForm.get('yearStarted')?.value;}

    // prepareSave(): Developer {
    //   return new Developer("1", this.firstName!, this.lastName!, this.favoriteLanguage!, this.yearStarted!);
    // }


    
    // saveDeveloper() : void {
    //   let dev = this.prepareSave();
    //   this.developerService.addDeveloper(dev).subscribe({
    //     next: () => console.log('Developer added'),
    //     error: err => console.log(err)
    //   });
    //   this.router.navigate(['/bio']);
    // }

  prepareSave():Developer
 {
    return new Developer("1365", this.firstName!, this.lastName!,this.favoriteLanguage!, Number(this.yearStarted))
 }

 saveDeveloper():void
 {
    // let developer = this.prepareSave();
    // this.developerService.addDeveloper(developer)
    // this.router.navigate(['/bio']);

    let developer = this.prepareSave();
    this.developerService.addDeveloper(developer).subscribe({
      next: (developer) =>{
        console.log("error")
        this.router.navigate(['/bio']);
      }
    })
 }
}
