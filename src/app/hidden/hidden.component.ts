import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hidden',
  templateUrl: './hidden.component.html',
  styleUrls: ['./hidden.component.css']
})
export class HiddenComponent implements OnInit {
  courses = [1, 2];
  constructor() { }

  ngOnInit() {
  }

}
