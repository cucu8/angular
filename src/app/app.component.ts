import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Cuneyt';
  items = [
    { desription: 'Kahvaltı', action: 'No' },
    { desription: 'Fatura', action: 'No' },
    { desription: 'Sinema', action: 'No' },
  ];
}
