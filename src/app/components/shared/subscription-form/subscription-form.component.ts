import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.css']
})
export class SubscriptionFormComponent implements OnInit {

  @Input() title: string = "";
  @Input() description: string = "";

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  submitEmail(data: any) {
    console.log(data);
  }
}
