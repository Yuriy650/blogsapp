import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Article} from '../interfaces';


@Injectable({
  providedIn: 'root'
})
export class FetchArticleService {
  apple: Article[];
  tesla: Article[];
  business: Article[];
  tech: Article[];
  articles: Article[];

  constructor(private http: HttpClient) {
  }

  fetchAllArticles(): Observable<Article[]> {
    return this.http.get<Article[]>('http://localhost:3000/all_articles');
  }

  postInAllArticles(article: Article) {
    return this.http.post<Article[]>('http://localhost:3000/all_articles', article);
  }

  getOpenArticle(id: number) {
    return this.http.get<Article>(`http://localhost:3000/all_articles/${id}`);
  }


}
