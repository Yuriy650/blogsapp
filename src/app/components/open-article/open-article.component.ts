import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Route} from '@angular/router';
import {Select, Store} from '@ngxs/store';
import {
  GetAppleArticles,
  GetBusinessArticles,
  GetOpenArticle,
  GetTechArticles,
  GetTeslaArticles
} from '../../actions/article.action';
import {ArticlesState} from '../../state/articles.state';
import {Observable} from 'rxjs';
import {Article} from '../../models/article.model';
import {filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-open-article',
  templateUrl: './open-article.component.html',
  styleUrls: ['./open-article.component.scss']
})
export class OpenArticleComponent implements OnInit {
id: number;
/*@Select(ArticlesState.getAllAppleArticles) appleArticles$: Observable<Article[]>;
@Select(ArticlesState.getAllTeslaArticles) teslaArticles$: Observable<Article[]>;
@Select(ArticlesState.getAllBusinessArticles) businessArticles$: Observable<Article[]>;
@Select(ArticlesState.getAllTechArticles) techArticles$: Observable<Article[]>;*/
@Select(ArticlesState.getOpenAppleArticle) openArticle$: Observable<Article[]>
  constructor(private route: ActivatedRoute, private store: Store) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      // @ts-ignore
      this.id = +params.get('id');
      console.log(this.id);
      this.store.dispatch(new GetOpenArticle(this.id))
    });
  }
getAllArticles() {
 /*this.store.dispatch(new GetAppleArticles);
  this.store.dispatch(new GetBusinessArticles);
  this.store.dispatch(new GetTechArticles);
  this.store.dispatch(new GetTeslaArticles);*/
}
findArticle(id: number){



}
}
