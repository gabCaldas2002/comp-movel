import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsFilter, NewsapiService } from 'src/app/model/service/newsapi.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  info : any;
  result! : Observable<any>;
  filterTerms! : string;
  type : NewsFilter = NewsFilter.all;

  constructor(private newsApi : NewsapiService) { }

  ngOnInit() {
  }

  load(){
    this.result = this.newsApi.getAll();
  }

  filter(){
    this.result = this.newsApi.getByCategory(this.type);
  }
  
  
  openUrl(){
    window.open(this.info.Website, '_blank');
  }
}
