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
articles: Article[]

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
  postAppleArticles(article: Article){
return this.http.post<Article[]>(`http://localhost:3000/apple`, article)
  }
  postTeslaArticles(article: Article){
    return this.http.post<Article[]>(`http://localhost:3000/tesla`, article)
  }
  postBusinessArticles(article: Article){
    return this.http.post<Article[]>(`http://localhost:3000/business`, article)
  }
  postTechArticles(article: Article){
    return this.http.post<Article[]>(`http://localhost:3000/tech`, article)
  }
getOpenAppleArticle(id: number) {
    return this.http.get<Article>(`http://localhost:3000/apple/${id}`)
}

getAllArticles(){
  let article: Article
  this.fetchAppleArticles()
    .subscribe(response=>{
      this.apple=response
    })
  this.fetchTeslaArticles()
    .subscribe(response=>{
      this.tesla=response
    })
  this.fetchBusinessArticles()
    .subscribe(response=>{
      this.business=response
    })
  this.fetchTechArticles()
    .subscribe(response=>{
      this.tech=response
    })
 return this.articles = this.apple.concat(this.business, this.tech, this.tesla);
}
getCurrentArticle(id: number){
 return this.getAllArticles().filter(item=>item.id===id)
}
}
