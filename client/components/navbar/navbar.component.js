'use strict';

export class NavbarComponent {
  menu = [{
    'title': 'Home',
    'state': 'main'
  }];
  isCollapsed = true;

}

export default angular.module('directives.navbar', [])
  .component('navbar', {
    template: require('./navbar.pug'),
    controller: NavbarComponent
  })
  .name;
