//Info Controller /////////////////////////////////////////////////////////////////////////////
//Grabs and stores data from API about channel's info
angular.module('info.controller', ['info.model'])

    .controller('infoController', [
        '$scope', '$sce', '$stateParams', 'Info', 'InfoManager',
        function ($scope, $sce, $stateParams, Info, InfoManager){
          //load all videso from channel
          $scope.loadInfo = function(){
            var name = $stateParams.id;
         
            var info = InfoManager.getInfo(name).then(function(info){
                $scope.info = info;
            });
              
          };
        
        //inserting html encoded values
        $scope.renderHTML = function(html_string){
            return $sce.trustAsHtml(html_string);
        };
        
        //load data    
        $scope.loadInfo();
    }]);