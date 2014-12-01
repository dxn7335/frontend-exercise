//Search Controller /////////////////////////////////////////////////////////////////////////////
// detects user search 
angular.module('search.controller', [])

    .controller('searchController', [
        '$scope', '$stateParams', 
        function ($scope, $stateParams){
          //on form submit
          $scope.onSubmit = function(){
              var name = form.channelName.value;
              //strip out all whitespace
              name = name.replace(/\s+/g, '');
              //lowercase them letters
              name = name.toLowerCase();
            
              //reload page with search name in url
              window.location.hash = "/channel/"+name;
              window.location.replaceAll(("(\\?.*|\\#.*)"), "");;
          };
            
          $scope.inputListeners = function(){
              
              //on focus will expand form
              $(form.channelName).on('focus', function(){
                $(this).parent().addClass('active');
              });
              
              $(form.channelName).on('focusout', function(){
                $(this).parent().removeClass('active');
              });
          };
            
          
          $scope.inputListeners();
    }]);