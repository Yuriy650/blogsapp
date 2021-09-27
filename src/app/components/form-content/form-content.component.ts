import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Article} from '../../interfaces';
import {Select, Store} from '@ngxs/store';
import {AddAppleArticle, AddBusinessArticle, AddTechArticle, AddTeslaArticle, GetAppleArticles} from '../../actions/article.action';
import {ArticlesState} from '../../state/articles.state';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-form-content',
  templateUrl: './form-content.component.html',
  styleUrls: ['./form-content.component.scss']
})
export class FormContentComponent implements OnInit {
  form: FormGroup;
  submitToggle = false;
  appleArticles: Article[] = []
  techArticles: Article[] = [];
  businessArticles: Article[] = [];
  teslaArticles: Article[] = [];
@Select(ArticlesState.getAllAppleArticles) appleArticles$: Observable<Article[]>;
@Select(ArticlesState.getAllTeslaArticles) teslaArticles$: Observable<Article[]>;
@Select(ArticlesState.getAllTechArticles) techArticles$: Observable<Article[]>;
@Select(ArticlesState.getAllBusinessArticles) businessArticles$: Observable<Article[]>

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      topic: new FormControl(null, [
        Validators.required
      ]),
      title: new FormControl(null, [
        Validators.required
      ]),
      url: new FormControl(null, [
        Validators.required
      ]),
      description: new FormControl(null, [
        Validators.required
      ]),
      content: new FormControl(null, [
        Validators.required,
        Validators.minLength(10)
      ])
    });

  }

  submit() {
    this.submitToggle = true;
    if (this.form.invalid) {
      return;
    }
    const newArticle: Article = {
      id: Date.now(),
      topic: this.form.value.topic,
      url: this.form.value.url,
      title: this.form.value.title,
      description: this.form.value.description,
      content: this.form.value.content
    };


    switch(newArticle.topic) {
      case 'apple':
       /* this.appleArticles$
          .subscribe(response=>{
              this.appleArticles = response
            }
          )
        this.appleArticles = [...this.appleArticles]
        this.appleArticles.unshift(newArticle)*/
        this.store.dispatch(new AddAppleArticle(newArticle));
        break
      case 'tesla':
       /* this.teslaArticles$
          .subscribe(response=>{
            this.teslaArticles = response
          })
        this.teslaArticles = [...this.teslaArticles];
        this.teslaArticles.unshift(newArticle)*/
        this.store.dispatch(new AddTeslaArticle(newArticle));
        break
      case 'business':
        /*this.businessArticles$
          .subscribe(response=>{
            this.businessArticles = response
          })
        this.businessArticles = [...this.businessArticles]
        this.businessArticles.unshift(newArticle)*/
        this.store.dispatch(new AddBusinessArticle(newArticle));
        break
      case 'tech':
        /*this.techArticles$
          .subscribe(response=>{
            this.techArticles = response
          })
        this.techArticles = [...this.techArticles]
        this.techArticles.unshift(newArticle)*/
        this.store.dispatch(new AddTechArticle(newArticle));
        break
      default:
        break
    }
    this.form.reset();
    this.submitToggle = false;

  }
}
