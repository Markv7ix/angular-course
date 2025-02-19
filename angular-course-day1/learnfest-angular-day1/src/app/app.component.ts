import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Marks learnfest-angular-day1 project';

  myColor : string = 'red';

  name : string = 'Mark';

  changeColor() : void {
    this.myColor = 'green';
  }

  alertMessage() : void {
    alert('Hello ' + this.name + ", nothing to alert :)");
  }

}
