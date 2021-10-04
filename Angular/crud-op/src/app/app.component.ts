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
  index: number = 0;
  item: any;
  isUpdate: boolean = false;
  onValueChange(value: any) {
    console.log(this.index);
    if (!this.isUpdate) {
      this.data.push(value);
    } else {
      this.data[this.index] = value;
      this.isUpdate = false;
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
    this.index = Number(item.index);
    this.item = item.item;
    this.isUpdate = true;
  }
}
