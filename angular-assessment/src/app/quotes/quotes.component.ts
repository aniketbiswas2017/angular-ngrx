import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quoteList = ['"Why did the coffee call the police? Because it was mugged." - Al Cappuccino', '"What do baristas say to their least-favorite customers? You mocha me crazy!" - Lady Java', '"What did the coffee say about its late assignment? Better latte than never!" - Bean-yonce'];
  quote = '';

  constructor() { }

  ngOnInit () {
    this.quote = this.quoteList[Math.floor(Math.random() * this.quoteList.length)];

  }

}
