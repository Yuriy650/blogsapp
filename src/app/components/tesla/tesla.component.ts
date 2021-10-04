import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Article} from "../../interfaces";
import {Select, Store} from '@ngxs/store';
import {ArticlesState} from '../../state/articles.state';
import {GetTeslaArticles} from '../../actions/article.action';

@Component({
  selector: 'app-tesla',
  templateUrl: './tesla.component.html',
  styleUrls: ['./tesla.component.scss']
})
export class TeslaComponent implements OnInit {
  @Select(ArticlesState.getAllTeslaArticles) articles$: Observable<Article[]>

  constructor(private store: Store) { }

  ngOnInit(): void {
this.getTeslaArticles()
  }
getTeslaArticles(){
this.store.dispatch(new GetTeslaArticles())
}
}
