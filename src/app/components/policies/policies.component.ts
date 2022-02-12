import { Component, OnInit } from '@angular/core';
import {Policy} from "../../models/policy.model";
import {PolicyService} from "../../services/policy/policy.service";

@Component({
  selector: 'app-policies',
  templateUrl: './policies.component.html',
  styleUrls: ['./policies.component.scss']
})
export class PoliciesComponent implements OnInit {

  policies: Policy[] = [];
  loading: boolean = true;

  constructor(private policyService: PolicyService) { }

  refreshData(){
    this.loading = true;
    this.policyService.getPolices().subscribe( response => {
      if (response.statusCode === 200){
        this.policies = response.data;
        this.loading = false;
      }
    });
  }

  ngOnInit(): void {
    this.refreshData();
  }

}
