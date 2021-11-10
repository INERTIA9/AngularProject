import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-aboutdlc',
  templateUrl: './aboutdlc.component.html',
  styleUrls: ['./aboutdlc.component.scss']
})
export class AboutdlcComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
onExplore(){
this.router.navigateByUrl('/ourworlds')
}
}
