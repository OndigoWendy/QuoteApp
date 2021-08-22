import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Quote } from '../quote';
import { FormGroup,NgForm } from '@angular/forms';
@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
newGoal = new Quote(0,"","","",new Date(),0,0);

@Output() addQuote = new EventEmitter<Quote>();
   newQuote: any;

// submitQuote(){
// this.addQuote.emit(this.newQuote);
// }
submitQuote(f:NgForm){
  if(f.valid){
    this.addQuote.emit(this.newQuote);
    this.newQuote = new Quote(0,"","","", new Date(),0,0);
  }else{
    alert("Please enter valid inputs")
  }

}
  constructor() { }

  ngOnInit(): void {
  }

}
