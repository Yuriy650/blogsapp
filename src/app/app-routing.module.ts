import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppleComponent} from "./components/apple/apple.component";
import {TeslaComponent} from "./components/tesla/tesla.component";
import {BusinessComponent} from "./components/business/business.component";
import {TechComponent} from './components/tech/tech.component';
import {OpenAppleComponent} from './components/open-apple/open-apple.component';
import {OpenArticleComponent} from './components/open-article/open-article.component';

const routes: Routes = [
  {path: 'apple', component: AppleComponent},
  {path: '', component: AppleComponent},
  {path: 'tesla', component: TeslaComponent },
  {path: 'business', component: BusinessComponent},
  {path: 'tech', component: TechComponent},
  {path: 'apple/:id', component: OpenArticleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
