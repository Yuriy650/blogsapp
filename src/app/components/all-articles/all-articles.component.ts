import { Component, OnInit } from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {GetAllArticles} from '../../actions/article.action';
import {ArticlesState} from '../../state/articles.state';
import {Observable} from 'rxjs';
import {Article} from '../../models/article.model';

@Component({
  selector: 'app-all-articles',
  templateUrl: './all-articles.component.html',
  styleUrls: ['./all-articles.component.scss']
})
export class AllArticlesComponent implements OnInit {
@Select(ArticlesState.getAllArticles) articles$: Observable<Article[]>
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.getAllArticles()
  }
getAllArticles(){
    this.store.dispatch(new GetAllArticles())
}
}
