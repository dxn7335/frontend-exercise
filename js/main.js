//RequireJS being used to load all needed scripts
requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'js/main.js',
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        angular: '../../lib/angular',
        angularRoute: '../../lib/angular-route.min',
        app: '../app/app',
        //model: '../app/model',
    }, 
    shim: {
        'angularRoute': ['angular'],
        'app': ['angular','angularRoute']
    },
    priority: [
        "angular"
    ]
});

// Start the main app logic.
requirejs(['app'],
function (app) {
    console.log(app);
});
