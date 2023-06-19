import { Component } from '@angular/core';
import { Model, TodoItem } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  model = new Model();
  isDisplay = false;

  getName() {
    return this.model.name;
  }

  getItems() {
    if (this.isDisplay) {
      return this.model.items;
    }
    return this.model.items.filter((data) => !data.action);
  }

  addItem(data: string) {
    if (data !== '') {
      this.model.items.push(new TodoItem(data, false));
    }
    return null;
  }
}
