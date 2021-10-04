import { Component, OnInit } from '@angular/core';
import {GetAppleArticles} from '../../actions/article.action';
import {Store} from '@ngxs/store';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
toggleMenu: boolean = false
  constructor(private store: Store) { }

  ngOnInit(): void {
  this.getArticles()
  }
  getArticles() {
    this.store.dispatch(new GetAppleArticles())
  }
}
