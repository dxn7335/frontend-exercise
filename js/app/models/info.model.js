//Stores data on info about channel
angular.module('info.model', [])
    .service('InfoManager', ['$q', '$http', 'Info', function($q, $http, Info) {
        return {
            getInfo: function(name) {
                var deferred = $q.defer();
 
                $http.get('http://vimeo.com/api/v2/channel/'+name+'/info.json')
                    .success(function(data) {
        
                        var info = new Info(data);
                       
                        deferred.resolve(info);
                    })
                    .error(function(error){
                        console.log(error);
                    });
                
 
                return deferred.promise;
            }
        };
    }])

    .factory('Info', function() {
        function Info(data) {
            for (attr in data) {
                if (data.hasOwnProperty(attr))
                    this[attr] = data[attr];
            }
        }

        return Info;
    });