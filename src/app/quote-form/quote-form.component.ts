import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Quote } from '../quote';
import { FormGroup,NgForm } from '@angular/forms';
@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
newQuote = new Quote(0,"","","",new Date(),0,0);

@Output() addQuote = new EventEmitter<Quote>();
  

// submitQuote(){
// this.addQuote.emit(this.newQuote);
// }

submitQuote(){
  // if(f.valid){
  //   this.addQuote.emit(this.newQuote);
  //   this.newQuote = new Quote(0,"","","", new Date(),0,0);
  // }else{
  //   alert("Invalid input")
  this.addQuote.emit(this.newQuote);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
