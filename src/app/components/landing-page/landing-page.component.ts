import { Component, OnInit } from '@angular/core';

import { MainService } from '../../services/main.service'

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(public ms: MainService) { }

  ngOnInit(): void {
  }

}
