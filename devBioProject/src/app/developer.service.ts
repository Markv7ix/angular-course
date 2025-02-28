import { Injectable } from '@angular/core';
import { Developer } from './developer';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError,map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeveloperService {

  private baseURL : string ='https://dev-bios-api-dot-cog01hprmn542jqme4w772bk1dxpr.uc.r.appspot.com/developers/';
  
  devs!: Developer[];

  postHeader ={
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  };

  constructor(private httpClient:HttpClient)
  {}
  
  // addDeveloper(developer: Developer) : boolean
  // {
  //     this.httpClient.post<Developer>(this.baseURL+"add",developer,
  //       this.postHeader).subscribe(
  //         res =>{},
  //         (err)=>{console.log(err)}
  //       );
  //       return true;
  // }
  addDeveloper(developer: Developer) : Observable<Developer>
  {
      return this.httpClient.post<Developer>(this.baseURL+"add",developer,
        this.postHeader).pipe(
          
          catchError(this.handleError)
        );
        
  }

  // constructor()
  // {
  //   this.devs = 
  //   [new Developer(123,"taryn","ernd","c++", 1997),
  //     new Developer(456,"Nabamita", "Chaterjee","vb",2005)
  //   ];
  // }

  getAllDevelopers():Observable<Developer[]>
  {
    return this.httpClient.get<Developer[]>(this.baseURL+"all")
    .pipe(
      map(response =>{
        this.devs = response;
        return response;
      }),
      catchError(this.handleError)
    );
  }
  handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
  // getAllDevelopers() : Developer[]
  // {
  //   return this.devs;
  // }

  getDevelopersById(id :string) : Developer | undefined
  {
    return this.devs.find(dev => dev.id === id)
  }

}