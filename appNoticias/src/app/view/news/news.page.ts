import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { NewsFilter, NewsapiService } from 'src/app/model/service/newsapi.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  info: any = {};
  result! : Observable<any>;
  filterTerms! : string;
  type : NewsFilter = NewsFilter.all;

  constructor(private newsApi : NewsapiService) { }

  ngOnInit() {
    
    this.result = this.newsApi.getAll().pipe(map(results =>  results['']));
    this.result.subscribe(data => this.info = data);
  }


  filter(){
    this.result = this.newsApi.getByCategory(this.type);
  }
  
  
  openUrl(info: any) {
    window.open(info.url, '_blank');
  }
}
