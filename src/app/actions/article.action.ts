import {Article} from '../models/article.model';

export class AddAppleArticle {
  static readonly type = '[APPLE] Add';

  constructor(public payload: Article) {

  }
}

export class AddTeslaArticle {
  static readonly type = '[TESLA] Add';
  constructor(public payload: Article){

  }
}

export class AddBusinessArticle {
  static readonly type = '[BUSINESS] Add';
  constructor(public payload: Article) {
  }
}

export class AddTechArticle {
  static readonly type = '[TECH] Add';
  constructor(public payload: Article) {

  }
}
export class GetAppleArticles {
  static readonly type = '[APPLE] Get';
}

export class GetTeslaArticles {
  static readonly type = '[TESLA-ARTICLES] Get';
}

export class GetTechArticles {
  static readonly type = '[TECH-ARTICLES] Get';
}
export class GetBusinessArticles {
  static readonly type = '[BUSINESS-ARTICLES] Get';
}

export class GetOpenArticle{
  static readonly type = '[OPEN-ARTICLE] Get';
  constructor(public id: number) {
  }
}
