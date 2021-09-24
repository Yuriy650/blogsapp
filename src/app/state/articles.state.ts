import {Article} from "../models/article.model";
import {Injectable} from "@angular/core";
import {Action, Selector, State, StateContext} from "@ngxs/store";
import {
  AddAppleArticle,
  AddBusinessArticle,
  AddTechArticle,
  AddTeslaArticle,
  GetAppleArticles, GetBusinessArticles, GetOpenAppleArticle, GetTechArticles, GetTeslaArticles
} from '../actions/article.action';
import {FetchArticleService} from "../services/fetch-article.service";
import {tap} from "rxjs/operators";

export class ArticleStateModel {
  apple: Article[];
  tesla: Article[];
  tech: Article[];
  business: Article[];
  openApple: Article[]

}

@Injectable()
@State<ArticleStateModel>({
  name: 'articles',
  defaults: {
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
  static getAllAppleArticles(state: ArticleStateModel){
    return state.apple
  }
  @Selector()
  static getAllTeslaArticles(state: ArticleStateModel){
    return state.tesla
  }
  @Selector()
  static getAllTechArticles(state: ArticleStateModel){
    return state.tech
  }
  @Selector()
  static getAllBusinessArticles(state: ArticleStateModel){
    return state.business
  }
  @Selector()
  static addApple(state: ArticleStateModel){
    return state.apple
  }
  @Selector()
  static addTesla(state: ArticleStateModel){
    return state.apple
  }
  @Selector()
  static addTech(state: ArticleStateModel){
    return state.apple
  }
  @Selector()
  static addBusiness(state: ArticleStateModel){
    return state.apple
  }
  @Selector()
  static getOpenAppleArticle(state: ArticleStateModel){
    return state.openApple
  }
@Action(AddAppleArticle)
  private addAppleArticles({getState, setState}: StateContext<ArticleStateModel>, {payload}: AddAppleArticle){
return this.fetchService.postAppleArticles(payload).pipe(
  tap(()=>{
  const state = getState();
  setState({
    ...state,
    apple: payload

  })
}))
}
  @Action(AddTeslaArticle)
  private addTeslaArticles({getState, patchState}: StateContext<ArticleStateModel>, {payload}: AddTeslaArticle){
    return this.fetchService.postTeslaArticles(payload)
      .pipe(
        tap(()=>{
            const state = getState();
            patchState({
              ...state,
              tesla: payload
            })
          }
        )
      )
  }
  @Action(AddBusinessArticle)
  private addBusinessArticles({getState, patchState}: StateContext<ArticleStateModel>, {payload}: AddBusinessArticle){
    return this.fetchService.postBusinessArticles(payload)
      .pipe(
        tap(()=>{
            const state = getState();
            patchState({
              ...state,
              business: payload
            })
          }
        )
      )
  }
  @Action(AddTechArticle)
  private addTechArticles({getState, patchState}: StateContext<ArticleStateModel>, {payload}: AddTechArticle){
    return this.fetchService.postTechArticles(payload)
      .pipe(
        tap(()=>{
            const state = getState();
            patchState({
              ...state,
              tech: payload
            })
          }
        )
      )
  }
  @Action(GetAppleArticles)
  getTodos({getState, setState}: StateContext<ArticleStateModel>) {
    return this.fetchService.fetchAppleArticles().pipe(tap((result) => {
      const state = getState();
      setState({
        ...state,
        apple: result,
      });
    }));
  }
  @Action(GetTeslaArticles)
  getTeslaArticles({getState, patchState}: StateContext<ArticleStateModel>){
    return this.fetchService.fetchTeslaArticles().pipe(
      tap(result=>{
        const state = getState();
        patchState({
          ...state,
          tesla: result
        })
      })
    )
  }
  @Action(GetTechArticles)
  getTechArticles({getState, patchState}: StateContext<ArticleStateModel>){
    return this.fetchService.fetchTechArticles().pipe(
      tap(result=>{
        const state = getState();
        patchState({
          ...state,
          tech: result
        })
      })
    )
  }
  @Action(GetBusinessArticles)
  getBusinessArticles({getState, patchState}: StateContext<ArticleStateModel>){
    return this.fetchService.fetchBusinessArticles().pipe(
      tap(result=>{
        const state = getState();
        patchState({
          ...state,
          business: result
        })
      })
    )
  }
  @Action(GetOpenAppleArticle)
  getCurrentAppleArticles({getState, patchState}: StateContext<ArticleStateModel>, {id}: GetOpenAppleArticle){
    return this.fetchService.getOpenAppleArticle(id).pipe(
      tap(result=>{
        const state = getState();
        patchState({
          ...state,
          openApple: [result]
        })
      })
    )
  }
}
