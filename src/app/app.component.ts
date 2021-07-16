import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'test-myapp';

  childClicked(n1: number, n2: number) {
    console.log('Suma : ', n1 + n2);
  }
}
