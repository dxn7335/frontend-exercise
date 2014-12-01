//Video Controller /////////////////////////////////////////////////////////////////////////////
//Grabs and stores data from API about videos on channel
angular.module('video.controller', ['video.model'])

    .controller('videoController', [
        '$scope', '$sce', '$stateParams', 'Video', 'VideoManager',
        function ($scope, $sce, $stateParams, Video, VideoManager){
          //load all videos from channel
          $scope.loadVideos = function(){
            $('#loading').fadeIn(200);
            var name = $stateParams.id;
              
            var videos = VideoManager.getAll(name).then(function(videos){
                $scope.videos = videos;
                $('#loading').fadeOut(300);
            }); 
          };
            
          //inserting html encoded values
          $scope.renderHTML = function(html_string){
            return $sce.trustAsHtml(html_string);
          };
          
          /*allow inserting src url blocked by $sce delegate
          $scope.trustSrc = function(src) {
            return $sce.trustAsResourceUrl(src);
          };*/
          
          //embeds video into page for current video clicked
          $scope.playVideo = function(id){
            var videoID = id;
            var embedUrl = 'http://player.vimeo.com/video/'+videoID;
            var iframe = "<iframe src='"+embedUrl+"' width=\"500\" height=\"481\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>";
            $(document.getElementById(id)).append(iframe);
          };
            
          $scope.exitVideo = function(){
            $('#play-area').fadeOut(300, function(){
                $(this).find('iframe').remove();
            });
          }
          
          
        
        $scope.loadVideos();
    }]);