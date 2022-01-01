import { Component, OnInit } from '@angular/core';

const incr = 1;
@Component({
  selector: 'app-mundakayam',
  templateUrl: './mundakayam.component.html',
  styleUrls: ['./mundakayam.component.css']
})
export class MundakayamComponent implements OnInit {
  progress = 0;
  constructor() {
    
   }
  ngOnInit(): void {
    setInterval(() => this.manageProgress(), 150 )
  }
  manageProgress() {
    if(this.progress === 100) {
      this.progress = 0;
    } else {
      this.progress = this.progress + incr;
    }
  }

}
