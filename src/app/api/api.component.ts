import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  constructor(private api:ApiService) { }

  response : any

  ngOnInit(): void {
    console.log("Inside ngoninit")
    this.api.callApi().subscribe(res=>{
        console.log("Inide res")
        this.response = res
        console.log(res)
    },err=>{
      console.log("Inside err")
        console.log(err)
    })
  }

}
