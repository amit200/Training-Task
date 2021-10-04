import { ChatService } from './../chat.service';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-inner-nav',
  templateUrl: './inner-nav.component.html',
  styleUrls: ['./inner-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InnerNavComponent implements OnInit, OnChanges {
  @Input() arry: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private chatService: ChatService
  ) {}
  ngOnInit(): void {
    // console.log('a');
    // console.log(this.chatService.p);
    // console.log(this.arry);
  }
  ngOnChanges(changs: SimpleChanges) {
    console.log(changs);
  }
  showFiller = false;

  onSelectedChat(item: any) {
    // item = JSON.stringify(item);

    this.router.navigate([], { queryParams: { item: item.name } });
  }
}
