import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header-home',
  templateUrl: './header-home.component.html',
  styleUrls: ['./header-home.component.css']
})
export class HeaderHomeComponent implements OnInit {

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
