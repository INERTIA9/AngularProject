import { SelectorContext } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],

})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onaboutdlc() {
    this.router.navigateByUrl("/aboutdlc")
  }
  onourworlds() {
    this.router.navigateByUrl("/ourworlds")
  }
  onexperiences() {
    this.router.navigateByUrl("/experiences")
  }
  ongallery() {
    this.router.navigateByUrl("/gallery")
  }
  onhomepage() {
    this.router.navigateByUrl("/homepage")
  }
}
