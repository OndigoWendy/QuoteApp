import { Component } from '@angular/core';
import { Quote } from './quote';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quotes-app';
  quotes: Quote[] = [
    new Quote(1,'The future belongs to those who believe in the beauty of their dreams.', 'Pinky Jude', 'uploader',new Date(2020,3,14)),
     new Quote(2,'The best is yet to come', 'Wendy Ondigo', 'uploader',new Date(2019,6,9)),
    // new QuoteTemplate(3,'my quote', 'Author', 'uploader',new Date(2022,1,12)),
    // new QuoteTemplate(4,'my quote', 'Author', 'uploader',new Date(2019,0,18)),
    // new QuoteTemplate(5,'my quote', 'Author', 'uploader',new Date(2019,2,14)),
    // new QuoteTemplate(6,'my quote', 'Author', 'uploader',new Date(2030,3,14)),
  ];

  completeGoal(isComplete: any, index: number){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }
  
  deleteQuote(isComplete: any, index: number){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].quote}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
