import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../news-api.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {


  mArticles: Array<any>;
  mSources: Array<any>;

  constructor(
    private newsapi: NewsApiService
  ) { }

  ngOnInit() {
    this.newsapi.initArticles().subscribe(data=>this.mArticles=data['articles'])
    this.newsapi.initSources().subscribe(data=>this.mSources=data['sources'])

  }

  searchArticles(source){
    console.log("selected source is: "+source);
    this.newsapi.getArticlesByID(source).subscribe(data => this.mArticles = data['articles']);
  }

}
