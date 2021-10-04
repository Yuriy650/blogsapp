import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Select, Store} from '@ngxs/store';
import {

  GetOpenArticle,

} from '../../actions/article.action';
import {ArticlesState} from '../../state/articles.state';
import {Observable} from 'rxjs';
import {Article} from '../../models/article.model';

@Component({
  selector: 'app-open-article',
  templateUrl: './open-article.component.html',
  styleUrls: ['./open-article.component.scss']
})
export class OpenArticleComponent implements OnInit {
id: number;
url: string

@Select(ArticlesState.getOpenAppleArticle) openArticle$: Observable<Article[]>
  constructor(private route: ActivatedRoute, private store: Store, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      // @ts-ignore
      this.id = +params.get('id');
      this.store.dispatch(new GetOpenArticle(this.id))
    });
  }

}
