import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input() data: any;

  @Output() valueChange = new EventEmitter();
  @Output() itemChange = new EventEmitter();

  users = [];
  constructor() {}

  ngOnInit(): void {}
  onDelete(index: any) {
    this.valueChange.emit(index);
  }
  //   onEditUser(userId, index) {
  //     //  console.log(this.users[index])
  //     console.log(this.users[index].name);
  //   }
  // }
  updatestudentForm(index: any, item: any) {
    this.itemChange.emit({ index: index, item: item });
  }
}
