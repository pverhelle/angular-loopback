import { Component } from '@angular/core';

import { LoopBackConfig } from './shared/sdk';
import { Person, AccessToken } from './shared/sdk/models';
import { PersonApi } from './shared/sdk/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  people;
  peopleCount;
  firstnames;

  constructor(private personApi: PersonApi) {
    LoopBackConfig.setBaseURL('http://127.0.0.1:3000');
    LoopBackConfig.setApiVersion('api');
    this.loadPeople();
    this.loadPeopleCount();
    this.loadFirstnames();
  }

  private loadPeople() {
    this.personApi.find().subscribe((persons: Person[]) => {
      this.people = persons;
    });
  }

  private loadPeopleCount() {
    this.personApi.count().subscribe((result) => {
      this.peopleCount = result.count;
    });
  }

  private loadFirstnames() {
    this.personApi.firstnames().subscribe((result) => {
      this.firstnames = result.firstnames;
    });
  }

}
