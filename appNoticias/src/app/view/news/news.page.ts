import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsFilter, NewsapiService } from 'src/app/model/service/newsapi.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  info: any[] = [];
  result!: Observable<any>;

  type: NewsFilter = NewsFilter.all;

  constructor(private newsApi: NewsapiService) {}

  ngOnInit() {
    this.loadNews();
  }

  loadNews() {
    this.result = this.newsApi.getAll();
    this.result.subscribe(data => this.info = data['articles']);
  }

  filter() {
    this.result = this.newsApi.getByCategory(this.type);
    this.loadNews();
  }

  openUrl(info: any) {
    window.open(info.url, '_blank');
  }
}