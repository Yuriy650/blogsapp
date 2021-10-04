import {Article} from '../models/article.model';
import {Injectable} from '@angular/core';
import {Action, Selector, State, StateContext} from '@ngxs/store';
import {
  AddInAllArticle,
  GetAllArticles,
  GetAppleArticles, GetBusinessArticles, GetOpenArticle, GetTechArticles, GetTeslaArticles
} from '../actions/article.action';
import {FetchArticleService} from '../services/fetch-article.service';
import {tap} from 'rxjs/operators';

export class ArticleStateModel {
  articles: Article[];
  apple: Article[];
  tesla: Article[];
  tech: Article[];
  business: Article[];
  openApple: Article[];
}

@Injectable()
@State<ArticleStateModel>({
  name: 'articles',
  defaults: {
    articles: [],
    apple: [],
    tesla: [],
    tech: [],
    business: [],
    openApple: []
  }
})

export class ArticlesState {
  constructor(public fetchService: FetchArticleService) {
  }

  @Selector()
  static getAllArticles(state: ArticleStateModel) {
    return state.articles;
  }

  @Selector()
  static getAllAppleArticles(state: ArticleStateModel) {
    return state.apple;
  }

  @Selector()
  static getAllTeslaArticles(state: ArticleStateModel) {
    return state.tesla;
  }

  @Selector()
  static getAllTechArticles(state: ArticleStateModel) {
    return state.tech;
  }

  @Selector()
  static getAllBusinessArticles(state: ArticleStateModel) {
    return state.business;
  }


  @Selector()
  static getOpenAppleArticle(state: ArticleStateModel) {
    return state.openApple;
  }

  @Action(GetAllArticles)
  getAllArticles({getState, setState}: StateContext<ArticleStateModel>) {
    return this.fetchService.fetchAllArticles()
      .pipe(
        tap((result) => {
          const state = getState();
          let articles = result;
          articles = articles.reverse();
          setState({
            ...state,
            articles
          });
        }));
  }

  @Action(AddInAllArticle)
  private addNewArticle({getState, setState}: StateContext<ArticleStateModel>, {payload}: AddInAllArticle) {
    return this.fetchService.postInAllArticles(payload).pipe(
      tap(() => {
        const state = getState();
        setState({
          ...state,
          articles: [...state.articles, payload].reverse()
        });
      })
    );
  }


  @Action(GetAppleArticles)
  getTodos({getState, setState}: StateContext<ArticleStateModel>) {
    return this.fetchService.fetchAllArticles().pipe(tap((result) => {
      const state = getState();
      const appleArticles = result.filter(item => item.topic === 'apple').reverse();
      setState({
        ...state,
        apple: appleArticles,
      });
    }));
  }

  @Action(GetTeslaArticles)
  getTeslaArticles({getState, patchState}: StateContext<ArticleStateModel>) {
    return this.fetchService.fetchAllArticles().pipe(
      tap(result => {
        const state = getState();
        const teslaArticles = result.filter(item => item.topic === 'tesla').reverse();
        patchState({
          ...state,
          tesla: teslaArticles
        });
      })
    );
  }

  @Action(GetTechArticles)
  getTechArticles({getState, patchState}: StateContext<ArticleStateModel>) {
    return this.fetchService.fetchAllArticles().pipe(
      tap(result => {
        const state = getState();
        let techArticles = result;
        techArticles = techArticles.filter(item => item.topic === 'tech').reverse();
        patchState({
          ...state,
          tech: techArticles
        });
      })
    );
  }

  @Action(GetBusinessArticles)
  getBusinessArticles({getState, patchState}: StateContext<ArticleStateModel>) {
    return this.fetchService.fetchAllArticles().pipe(
      tap(result => {
        const state = getState();
        const businessArticles = result.filter(item => item.topic === 'business').reverse();
        patchState({
          ...state,
          business: businessArticles
        });
      })
    );
  }

  @Action(GetOpenArticle)
  getCurrentArticle({getState, patchState}: StateContext<ArticleStateModel>, {id}: GetOpenArticle) {
    return this.fetchService.fetchAllArticles().pipe(
      tap(result => {
        const state = getState();
        const article = result.filter(item => item.id === id);
        patchState({
          ...state,
          openApple: article
        });
      })
    );
  }
}
