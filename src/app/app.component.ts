import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

const query = gql`
  {
    rockets(limit: 10, offset: 1) {
      id
      active
      company
      country
      type
      wikipedia
      landing_legs {
        number
      }
    }
  }
`;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  queryResult: string;

  constructor(
    private apollo: Apollo
  ) {
  }

  ngOnInit(): void {
    this.apollo.query({
      query
    }).subscribe(result => this.queryResult = JSON.stringify(result.data));
  }

}
