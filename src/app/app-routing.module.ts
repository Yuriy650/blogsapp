import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppleComponent} from "./components/apple/apple.component";
import {TeslaComponent} from "./components/tesla/tesla.component";
import {BusinessComponent} from "./components/business/business.component";
import {TechComponent} from './components/tech/tech.component';
import {OpenArticleComponent} from './components/open-article/open-article.component';
import { AllArticlesComponent } from './components/all-articles/all-articles.component';

const routes: Routes = [
  {path: 'apple', component: AppleComponent},
  {path: '', component: AllArticlesComponent},
  {path: 'tesla', component: TeslaComponent },
  {path: 'business', component: BusinessComponent},
  {path: 'tech', component: TechComponent},
  {path: 'apple/:id', component: OpenArticleComponent},
  {path: 'tesla/:id', component: OpenArticleComponent},
  {path: 'tech/:id', component: OpenArticleComponent},
  {path: 'business/:id', component: OpenArticleComponent},
  {path: ':id', component: OpenArticleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
