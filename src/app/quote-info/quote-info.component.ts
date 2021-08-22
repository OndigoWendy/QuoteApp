import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quote-info',
  templateUrl: './quote-info.component.html',
  styleUrls: ['./quote-info.component.css']
})
export class QuoteInfoComponent implements OnInit {
  @Input() quote:any

  @Output() isComplete = new EventEmitter<boolean>();
 
   quoteComplete(complete:boolean){
     this.isComplete.emit(complete);
   }
   quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  incrementLikes(){
    let like = this.quote?.likes;
    like++;
    this.quote.likes = like;
  }

  incrementDislikes(){
    let dislike = this.quote.dislikes;
    dislike++;
    this.quote.dislikes = dislike;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
