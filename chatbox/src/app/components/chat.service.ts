import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  mySunjct = new Subject();
  // public p = '78';
  public arry = [
    {
      image: '../../../assets/p1.jpg',
      name: 'test',
      chat: [
        {
          mymessage: 'hii',
          ssendermessage: 'hello',
        },
        {
          mymessage: 'whatsup?',
          ssendermessage: 'All is well',
        },
        {
          mymessage: 'ok',
          ssendermessage: 'nice',
        },
      ],
    },
    {
      name: 'people',
      image: '../../../assets/p2.jpg',
      chat: [
        {
          mymessage: 'your name please!',
          ssendermessage: 'Rohit',
          Image: '',
        },
        {
          mymessage: 'what are you doing?',
          ssendermessage: 'playing',
        },
        {
          mymessage: 'nice',
          ssendermessage: 'ya',
        },
      ],
    },
    {
      name: 'xyz',
      image: '../../../assets/p3.jpeg',
      chat: [
        {
          mymessage: 'hello student!',
          ssendermessage: 'yes sir',
        },
        {
          mymessage: 'tomorrow is your holiday',
          ssendermessage: 'wowww nice',
        },
        {
          mymessage: 'do your pending work',
          ssendermessage: 'sure sir',
        },
      ],
    },
    {
      name: '123',
      image: '../../../assets/p4.jpg',
      chat: [
        {
          mymessage: 'hii',
          ssendermessage: 'sourabh',
        },
        {
          mymessage: 'Hello',
          ssendermessage: 'Where are you?',
        },
        {
          mymessage: 'what happen?',
          ssendermessage: 'Nothing',
        },
      ],
    },
    {
      name: 'pqr',
      image: '../../../assets/p5.jpg',
      chat: [
        {
          mymessage: 'hii',
          ssendermessage: 'hello',
        },
        {
          mymessage: 'hii',
          ssendermessage: 'hello',
        },
        {
          mymessage: 'hii',
          ssendermessage: 'hello',
        },
      ],
    },
  ];
  constructor() {
    this.mySunjct.next(this.arry);
  }
  gtusr() {
    return this.arry;
  }

  gUsr(name: any) {
    return this.arry.filter((item) => item.name === name);
  }
}
