import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  showComent : boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  changeComent(){
    this.showComent = !this.showComent;
  }

}
