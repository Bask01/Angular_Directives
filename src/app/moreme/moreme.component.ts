import { Component, OnInit, Input } from '@angular/core';
import { ShareData } from '../myClasses/sharedata';
@Component({
  selector: 'app-moreme',
  templateUrl: './moreme.component.html',
  styleUrls: ['./moreme.component.css']
})
export class MoremeComponent implements OnInit {

  // sname="Kubra Bas";
  // sid="1234567";

  @Input() biodata!: ShareData;
  constructor() { }

  ngOnInit(): void {
  }

}
