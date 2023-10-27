import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { OmdbapiService, SearchType } from 'src/app/model/services/omdbapi.service';

@Component({
  selector: 'app-filmes-detalhes',
  templateUrl: './filmes-detalhes.page.html',
  styleUrls: ['./filmes-detalhes.page.scss'],
})
export class FilmesDetalhesPage implements OnInit {
  info : any;

  constructor(private activatedRoute: ActivatedRoute, private _omdbapi : OmdbapiService) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this._omdbapi.getById(id).subscribe(result => {
      this.info = result;
    })
  }

  openUrl(){
    window.open(this.info.Website,'_blank')
  }

}
