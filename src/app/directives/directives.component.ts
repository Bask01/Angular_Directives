import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  program: string = "CP";

  progCheck(){
    if (this.program === "CP") {
        document.getElementById("h4chk")!.setAttribute('title', 'Computer Programming')
    }
    else if(this.program === "SE"){
      document.getElementById("h4chk")!.setAttribute('title', 'Software Engineering')

    }
    else{
      document.getElementById("h4chk")!.setAttribute('title', 'Not a 2-year programming')

    }
  }

  headCSS() {
    document.getElementById("hd")!.style.color = "crimson";
    document.getElementById("hd")!.style.fontStyle = "italic";
  }
  constructor() { }

  ngOnInit(): void {
  }

}
