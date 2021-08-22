
import { Component } from '@angular/core';
import { Quote } from './quote';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quotes-app';

  addNewQuote(quote: Quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  deleteQuote(isComplete: any, index: number){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].quote}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  
  quotes: Quote[] = [
    new Quote(1,'The future belongs to those who believe in the beauty of their dreams.', 'Pinky Jude', 'uploader',new Date(2020,3,14),0,0),
     new Quote(2,'The best is yet to come', 'Wendy Ondigo', 'Wendy Ondigo',new Date(2019,6,9),0,0),
     new Quote(3,'The sun will rise and we will try again.', 'Sarafina M.','Anita Baker' ,new Date(2022,1,12),0,0),
    new Quote(4,'Never give up','Fifi A.','Sally N.',new Date(2019,0,18),0,0),
   
  ];

  

  // completeQuote(isComplete: any, index: number){
  //   if (isComplete) {
  //     this.quotes.splice(index,1);
  //   }
  // }
  
  
  constructor() {
  }

  ngOnInit() {
  }

}
