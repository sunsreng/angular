import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipes',
  templateUrl: './custom-pipes.component.html',
  styleUrls: ['./custom-pipes.component.css']
})
export class CustomPipesComponent implements OnInit {
  text= 'Are you designing microservices-based applications? Join us for a closer look at the basic patterns that are required.';
  constructor() { }

  ngOnInit() {
  }

}
