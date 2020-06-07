import { Search } from './search.model';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchString = '';
  search: Search;
  isSearchNotNull = false;

  isUsersNotNull = false;
  isPostsNotNull = false;
  isTopicsNotNull = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }
}
