import {Component, Input, OnInit} from '@angular/core';
import {from, Observable, of} from 'rxjs';
import {Article} from "../../interfaces";
import {FetchArticleService} from "../../services/fetch-article.service";
import {MatCardModule} from '@angular/material/card';
import {ActivatedRoute, ParamMap, Router, RouterLink} from '@angular/router';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  id: number;
  @Input() article: Article

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {


  }

  goToRead() {

  }
}
