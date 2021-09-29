import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'crud-op';
  data: any = [];
  index: any;
  item: any;
  onValueChange(value: any) {
    if (!this.index) {
      this.data.push(value);
    } else {
      this.data[this.index] = value;
    }
  }
  onDelete(value: any) {
    this.data.splice(value, 1);
  }
  // onUpdateUser(userId:any,index:any){
  //    console.log(this.users[index].name);
  //   //  console.log(this.user[index].name);

  // }
  onItemChange(item: any) {
    this.index = item.index;
    this.item = item.item;
  }
}
