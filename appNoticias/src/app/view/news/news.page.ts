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
    this.newsApi.getByCategory(this.type)
      .subscribe(data => this.info = data['articles']);
  }

  openUrl(info: any) {
    window.open(info.url, '_blank');
  }

  getImageUrl(info: any): string {
    return info.urlToImage || 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEX///8AAAD19fXExMSsrKxcXFzy8vIRERGTk5P6+vqDg4MoKCixsbH8/PwzMzPMzMwuLi7h4eG1tbVmZmZKSkqjo6O/v789PT1CQkLT09N4eHiMjIxsbGzb29vs7OxISEgYGBidnZ0jIyNUVFR0dHR9fX0cHBxQUFAGRx7LAAAGIklEQVR4nO2Z6ZqiOBhGAwKKEjabxVJwKUvv/w4nGyQBLCmrp3umnvf8qNb4ZTkhK00IAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMyiKRc/gPATw73zEwg+MVz9vmr8yPs7nJZ/yHD94kT5LnTzxPDgRaPOj4qP40m3fSrEi7zz2o//A4bhM8P4vj2rmbqrfnHu/kfJMu76OZretwWVIQsZwmKu54x9DxZbbZh7Xp6XE7UEkcd+27GFzYvyPDe6K4oylch/ViSFSMisMtqI5QvUx8O9rv03bxfOMeRcWtl8/UBS0XxfJ2xcERKZ49IXJSe9oevm7N+3cS009Fgwa07o8g7ZFz1vTk5oe2CJWx0eZilL8AaFJM414P0cruOiccMgYU8gmmuoWmUYOrFIeRsOQsvQiYV2YwQU7MO7O+HoLOSHkgWYD+cj538r1oVmeMairoMi9rX4J7it+p5YLelcQ2dk6CQi6TJQtg2ds0j0tGEgQttRPaEqT9RhGjZ5572wdAZhvI/EMKbVykjkc2KmIR0ZysYX/fdTMGFYqeb3huGND7BlM6yHPjJkP/E/bMl6NxN5T+2tMC+msgHDzDMN3ZGhLH/Xf19OGcqeIe+9IUm9szN8IJ8byvazZKtb2Lh1rKPKJpJV+cOsLxuuZhnKUg6GYSFjiq8ZUpZ8ML43wzIWqqql9ai/ZSjmh3Gq+8ywsgzl6mpvj88MRUOM6XvYsl5LqU64q+m3GR3RXjYUuTL9fdJQDhkZpQ1JxheorTnInhq2jjnxWifhT1HvrVmn/+G8D3xeNRQLzc442EwayunmDw1JULOE2qj4qaHYmPptZnUipO4WMs61G8JcfGWt1S8acsHWunhMGYqR46pzgWlIQr6zX7TKc0M+EIo+2pM7SHfOafUyJFp83O/6EfIVw2RTMeLKLzIS5FtLRhl6RsqdNzoouudsGRKy5mkJoZ8bJvoj66ib+hjx9tCNPuicYx2n+n15KOmXDduSsUiajJKw2C6nDLOcx5R5vthlblPuf+mAgaHcSiMyYehvOypj7efrk5p46b4rQHWGMSMpyfqT1vmrhv0oXfpseNDddWyY39I03dxbf3m72T0wMpTFrSYMG7ejNXd1tiLflasQc/tC85OxqnKp8k2OnGPw+kojqm6OQ8Oos8kvzoCRIWn4MLiODSfnoSxbTDxfDc5117D4PI5u9vzqdglf3y1kS/VktFeaBaF5/cyQtLwR4iA+x5Dv+tyt7RYYvvhwt+TBa4qEPfWP1w1lqbSaNhTfMs+4Xk0ZkpAH8IP4HENylr+t+02C9e/FpcSfuJBJDs7Jfd1QTu5y2rBb5YxL/pSh3ObYQfzh3cKkFaW46jhF5JkxZ8k6w+BiFqZO+7qhGPs0eGCoLqjNM0NZQ0nmGLIDC2uJZ9wejvzWtu6PopTY12LKpup3DdlC/cBQtVO/ynpgKLOcZxmKXX9jXAD5CCodY9PcD3LsneC7o7R9aCiu3JT0E/WRoXrNMcdQnv+MMxnlt03z9n8cZKivr9/xVUX9FfgijkmlESD7uh+nDw3lQdzcD+1fjbnFO8NaVnj15sis7OJz1sp5hunYUDa47U82cjNuzRC5qHtWhilDEhwtQ/t13NpsXz3wDx22Whrfj3oZInxE7ebu+N7I8J3yY0Sm93XVrIMRIx+rPIEqQ+oMZ4qAbjtD/jYuzqg8o1BGaW12uepJ7W8XyLrq7mUhyxdmXizeCM4yVIuKNkyFsnm56B5NaB7I1YDad4Zu/ubcVruJesiHuGhlRXW63U7OchNz0s2F73hm3PD9R+ZYV6X3042Pqkta3/217LSnhtc86QKygr+kLbycHb3dnd7OWUh3V6H8fJ73u6AaMm6Sr7ghDVwauhMvE4naycKAdz9/Aj3UPnI2dJDP7q8+tw57aripq1hR1ZKq2pjTzUl1CI+qan3t6HPG08PzTzBvLf0NpP5fYnn6zPDn//+hG7j/f4Lh3AUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOBf4R8PY10iYBBrXAAAAABJRU5ErkJggg=='; 
    }

  getDescription(info: any): string {
    return info.description || 'Descrição não disponível';
  }
}
