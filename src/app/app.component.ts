import { Component, OnInit, OnDestroy } from '@angular/core';
import { Person } from './shared/models/person.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {
  title = 'Компоненты';
  
  persons: Person[] = [];
  
  constructor() {

  }
  
  searchStr = '';

  ngOnInit(): void {
    this.persons.push(new Person('Ivan', 'Ivanov', '(977) 182-73-29', 1));
    this.persons.push(new Person('Ivan', 'Ivanov', '(977) 182-73-29', 2));
    this.persons.push(new Person('Ivan', 'Ivanov', '(977) 182-73-29', 3));
    this.persons.push(new Person('Ivan', 'Ivanov', '(977) 182-73-29', 4));
  }

  ngOnDestroy(): void {
  }

  onAddPerson(person: Person) {
    let newId = this.persons[this.persons.length - 1].id + 1;
    person.id = newId;
    this.persons.push(person);
  }
  
  onDeletePerson(inPerson) {
    this.persons.splice(this.persons.indexOf(inPerson), 1);
  }
  
}
