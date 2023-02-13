import { AfterViewInit, Component } from '@angular/core';
import { Job, Person } from '../people.model';
import { PeopleService } from '../people.service';
import { Observable, from, of, switchMap, map, forkJoin } from 'rxjs';
@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
})
export class PeopleComponent {
  constructor(public peopleService: PeopleService) {
    this.getPeople(['Developer', 'Doctor']).subscribe((person) =>
      console.log(person)
    );
  }
  getJob(names: string[]) {
    return of(
      this.peopleService.jobs
        .filter((j) => names.includes(j.name))
        .map((j) => j.id)
    );
  }
  getPerson(ids: number[]) {
    return from(this.peopleService.people.filter((p) => ids.includes(p.id)));
  }

  getPeople(jobs: string[]) {
    return this.getJob(jobs).pipe(
      switchMap((jobIds) =>
        this.getPerson(jobIds).pipe(
          map(
            (person) =>
              person.name +
              ' ' +
              person.lastname +
              ' is a ' +
              this.peopleService.jobs
                .filter((job) => job.id == person.id)
                .map((job) => job.name)
          )
        )
      )
    );
  }
}
