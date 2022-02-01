import { Component, OnInit, Input } from '@angular/core';
import { ShareData } from '../myClasses/sharedata';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

  //sname : string = "Kubra Bas";
  cdate = new Date();

  @Input() biodata!: ShareData;
  
  constructor() { }

  ngOnInit(): void {
  }

}
