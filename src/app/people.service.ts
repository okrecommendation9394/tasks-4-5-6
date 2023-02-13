import { Injectable } from '@angular/core';
import { Job, Person } from './people.model';
@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  jobs: Job[] = [
    { id: 1, name: 'Developer' },
    { id: 2, name: 'Doctor' },
    { id: 3, name: 'Lawyer' },
    { id: 4, name: 'HR' },
    { id: 5, name: 'Manager' },
    { id: 6, name: 'Doctor' },
  ];
  people: Person[] = [
    {
      id: 1,
      jobId: 1,
      name: 'Keti',
      lastname: 'Gogia',
    },
    {
      id: 2,
      jobId: 2,
      name: 'Keti',
      lastname: 'Gogia',
    },
    {
      id: 3,
      jobId: 3,
      name: 'Keti',
      lastname: 'Gogia',
    },
    {
      id: 4,
      jobId: 4,
      name: 'Keti',
      lastname: 'Gogia',
    },
    {
      id: 5,
      jobId: 5,
      name: 'Keti',
      lastname: 'Gogia',
    },
    {
      id: 6,
      jobId: 6,
      name: 'Keti',
      lastname: 'Gogia',
    },
  ];
  constructor() {}
}
