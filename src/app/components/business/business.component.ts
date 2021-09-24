import { Component, OnInit } from '@angular/core';
import {FetchArticleService} from "../../services/fetch-article.service";
import {Observable, of} from "rxjs";
import {Article} from "../../interfaces";
import {Select, Store} from '@ngxs/store';
import {ArticlesState} from '../../state/articles.state';
import {GetBusinessArticles} from '../../actions/article.action';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})
export class BusinessComponent implements OnInit {
  @Select(ArticlesState.getAllBusinessArticles) articles$: Observable<Article[]>;

  constructor(private store: Store) { }

  ngOnInit(): void {
this.getArticles()
  }
getArticles(){
    this.store.dispatch(new GetBusinessArticles())
}
}
