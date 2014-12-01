angular.module('video.model', [])
    .service('VideoManager', ['$q', '$http', 'Video', function($q, $http, Video) {
        return {
            getAll: function(name) {
                var deferred = $q.defer();
 
                $http.get('http://vimeo.com/api/v2/channel/'+name+'/videos.json')
                    .success(function(data) {
                        var videos = [];
                        for (var i = 0; i < data.length; i ++) {
                            videos.push(new Video(data[i]));
                        }
                        deferred.resolve(videos);
                    })
                    .error(function(error){
                        console.log(error);
                        //sends blank array
                        var videos = [];
                        deferred.resolve(videos);
                    });
                
 
                return deferred.promise;
            }
        };
    }])

    .factory('Video', function() {
        function Video(data) {
            for (attr in data) {
                if (data.hasOwnProperty(attr))
                    this[attr] = data[attr];
            }
            /* Custom Attributes */
            //property used to store url for embed video
            this.embedUrl = 'http://player.vimeo.com/video/' + data.id;
            
        }

        return Video;
    });