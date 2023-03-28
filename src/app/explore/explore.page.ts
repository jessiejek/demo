import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
})
export class ExplorePage implements OnInit {
  rangeValue: any = 15000;
  directory = '../../assets/img/';
  public appPages = [
    {
      title: 'Prima Gold',
      img: 'maxicare.png',
      value: '12999',
    },
    {
      title: 'Prima Silver',
      img: 'maxicare.png',
      value: '4999',
    },
    {
      title: 'EReady Advance',
      img: 'maxicare.png',
      value: '4999',
    },
    {
      title: 'EReady',
      img: 'maxicare.png',
      value: '839',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
