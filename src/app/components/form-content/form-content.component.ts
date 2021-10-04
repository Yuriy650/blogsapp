import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Article} from '../../interfaces';
import {Select, Store} from '@ngxs/store';
import {
   AddInAllArticle,
} from '../../actions/article.action';
import {ArticlesState} from '../../state/articles.state';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-form-content',
  templateUrl: './form-content.component.html',
  styleUrls: ['./form-content.component.scss']
})
export class FormContentComponent implements OnInit {
  form: FormGroup;
  submitToggle = false;

@Select(ArticlesState.getAllAppleArticles) appleArticles$: Observable<Article[]>;
@Select(ArticlesState.getAllTeslaArticles) teslaArticles$: Observable<Article[]>;
@Select(ArticlesState.getAllTechArticles) techArticles$: Observable<Article[]>;
@Select(ArticlesState.getAllBusinessArticles) businessArticles$: Observable<Article[]>;
  constructor(private store: Store, private router: Router) {
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

    this.store.dispatch(new AddInAllArticle(newArticle))
    this.form.reset();
    this.submitToggle = false;
this.router.navigate(['/'])
  }
}
