import {Component, Input, OnInit} from '@angular/core';
import {from, Observable, of} from 'rxjs';
import {Article} from "../../interfaces";
import {FetchArticleService} from "../../services/fetch-article.service";
import {MatCardModule} from '@angular/material/card';
import {ActivatedRoute, ParamMap} from '@angular/router';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  id: number;
  @Input() article: Article

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {


  }

  goToRead() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      // @ts-ignore
      this.id = +params.get('id');
      console.log(this.id);
    });
  }
}
