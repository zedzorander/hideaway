import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function() {
      $(window).bind('scroll', function() {
        var navHeight = $(window).height() - 70;

        if($(window).scrollTop() > navHeight) {
          $('nav').addClass('fixed');
        }
        else {
          $('nav').removeClass('fixed');
        }
      })
    })
  }

}
