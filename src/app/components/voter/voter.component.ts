import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.css']
})
export class VoterComponent implements OnInit {

  didVote = false;
  @Input() name
  @Output() voted: EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  vote(agreed: boolean){
    console.log('vote')
    this.voted.emit(agreed)
    this.didVote = true
  }

}
