import { Component, OnInit } from '@angular/core';
import {BackendService} from "../backend.service";

@Component({
  selector: 'app-admin-list-job-offers',
  templateUrl: './admin-list-job-offers.component.html',
  styleUrls: ['./admin-list-job-offers.component.css']
})
export class AdminListJobOffersComponent implements OnInit {

  constructor(
    private backendService:BackendService
  ) {
    this.backendService.refreshJobOffers();
  }

  ngOnInit() {
  }

}
