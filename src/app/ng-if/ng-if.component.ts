import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {
  courses = [
    {id: 1, name: 'course 1'},
    {id: 1, name: 'course 2'},
    {id: 1, name: 'course 3'}
  ];
  constructor() { }

  ngOnInit() {
  }
}
