import { Component, OnInit } from '@angular/core';
import {GetTechArticles} from '../../actions/article.action';
import {Select, Store} from '@ngxs/store';
import {ArticlesState} from '../../state/articles.state';
import {Observable} from 'rxjs';
import { Article } from 'src/app/interfaces';


@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.scss']
})
export class TechComponent implements OnInit {
@Select(ArticlesState.getAllTechArticles) articles$: Observable<Article[]>
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(new GetTechArticles())
  }



}
