import {Component, OnInit} from '@angular/core';
import {Observable, of} from 'rxjs';
import {ArticlesState} from '../../state/articles.state';
import {Select, Store} from '@ngxs/store';
import {GetAppleArticles} from '../../actions/article.action';
import {Article} from '../../interfaces';


@Component({
  selector: 'app-apple',
  templateUrl: './apple.component.html',
  styleUrls: ['./apple.component.scss']
})
export class AppleComponent implements OnInit {
  @Select(ArticlesState.getAllAppleArticles) articles$: Observable<Article[]>;
  articles: Article[];

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.getApple();
  }

  getApple = () => {
    this.store.dispatch(new GetAppleArticles());
  };
}
