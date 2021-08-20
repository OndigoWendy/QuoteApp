import { Component } from '@angular/core';
import { QuoteTemplate } from './quote-template';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quotes-app';
  quotes: QuoteTemplate[] = [
    new QuoteTemplate(1,'my quote', 'Author', 'uploader',new Date(2020,3,14)),
    new QuoteTemplate(2,'my quote', 'Author', 'uploader',new Date(2019,6,9)),
    new QuoteTemplate(3,'my quote', 'Author', 'uploader',new Date(2022,1,12)),
    new QuoteTemplate(4,'my quote', 'Author', 'uploader',new Date(2019,0,18)),
    new QuoteTemplate(5,'my quote', 'Author', 'uploader',new Date(2019,2,14)),
    new QuoteTemplate(6,'my quote', 'Author', 'uploader',new Date(2030,3,14)),
  ];
  constructor() { }

  ngOnInit() {
  }

}
