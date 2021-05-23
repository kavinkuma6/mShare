import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'mShare';
  showInput = true;
  list: any = {
    centerTitle: '',
    childern: [],
  };
  addNew() {
    this.list.childern.push({ value: '', showInput: true });
  }
}
