/* App Component Controller */

import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  @Input() logo; // props
  @Output() logout // event

  constructor() { }

  ngOnInit(): void {
  }

}
