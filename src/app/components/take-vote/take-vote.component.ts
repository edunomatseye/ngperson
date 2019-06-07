import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-take-vote',
  templateUrl: './take-vote.component.html',
  styleUrls: ['./take-vote.component.css']
})
export class TakeVoteComponent implements OnInit {

  voters = ['Mr IQ', 'Ms. Universe', 'Bombasto']
  agreed = 0;
  disagreed = 0;
  constructor() { }

  
  ngOnInit() {
  }

  onVoted(agreed: boolean){
    console.log('voted')
    agreed ? this.agreed++ : this.disagreed++
  }

}
