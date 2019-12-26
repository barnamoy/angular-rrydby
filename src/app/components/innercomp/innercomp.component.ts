import { Component, OnInit } from '@angular/core';
import { ConnentService } from './../Connent.service.ts';

@Component({
  selector: 'app-innercomp',
  templateUrl: './innercomp.component.html',
  styleUrls: ['./innercomp.component.css']
})
export class InnercompComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  submit(){
    console.log("i got clicked");
  }
}