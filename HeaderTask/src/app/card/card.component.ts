import { Component, OnInit } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  constructor() {}
  img = '';
  name = 'Girish Kumar';
  ngOnInit(): void {}
}

// export class CardActionsExample {}
// export class CardOverviewExample {}
