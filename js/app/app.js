// Main Module /////////////////////////////////////////////////////////////////////////////
var app = angular.module('myApp', 
    ['ui.router', 
     'video.controller', 
     'info.controller',
     'search.controller',
    ])
    .config(function ( $stateProvider, $urlRouterProvider ) {
      'use strict';
      // configure urls
      $urlRouterProvider.otherwise('/');
      $urlRouterProvider.when('/channel', '/');
        
      //state
      $stateProvider
        .state('searched', {
          url: '/channel/:id',
          abstract: true,
          views:{
              'search':{
                  'templateUrl': 'templates/search.html',
                  'controller': 'searchController', // map js to html scope
              },
              'info-sect':{
                  'templateUrl': 'templates/info.html',
                  'controller': 'infoController', // map js to html scope
              },
              'video-sect':{
                  'templateUrl': 'templates/videos.html',
                  'controller': 'videoController', // map js to html scope
              }
          }
        })
        .state('home',{
          url: "/",
          abstract: true,
          views:{
              'home':{
                  templateUrl: 'templates/home.html',
                  controller: 'searchController', // map js to html scope
              }
          }
        });
    });
