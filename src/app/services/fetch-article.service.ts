import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Article} from '../interfaces';



@Injectable({
  providedIn: 'root'
})
export class FetchArticleService {

  constructor(private http: HttpClient) { }

  fetchAppleArticles(): Observable<Article[]>{
    return this.http.get<Article[]>('http://localhost:3000/apple');
  }
  fetchTeslaArticles(): Observable<Article[]>{
    return this.http.get<Article[]>('http://localhost:3000/tesla')
  }
  fetchBusinessArticles(): Observable<Article[]>{
    return this.http.get<Article[]>('http://localhost:3000/business')
  }
  fetchTechArticles(): Observable<Article[]>{
    return this.http.get<Article[]>('http://localhost:3000/tech')
  }
  postAppleArticles(article: Article[]){
return this.http.post<Article[]>(`http://localhost:3000/apple`, article)
  }
  postTeslaArticles(article: Article[]){
    return this.http.post<Article[]>(`http://localhost:3000/tesla`, article)
  }
  postBusinessArticles(article: Article[]){
    return this.http.post<Article[]>(`http://localhost:3000/business`, article)
  }
  postTechArticles(article: Article[]){
    return this.http.post<Article[]>(`http://localhost:3000/tech`, article)
  }
getOpenAppleArticle(id: number) {
    return this.http.get<Article>(`http://localhost:3000/apple/${id}`)
}
}
