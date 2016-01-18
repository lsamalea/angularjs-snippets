// from http://stackoverflow.com/questions/20763587/angularjs-directive-link-function-not-being-called
//Most of directive errors are displayed in the console, just enable logging:
(function(){
    "strict use";

    var moduleName = "app";
    var app = angular.module(moduleName);

    app.config(function($logProvider){
        $logProvider.debugEnabled(true);
    });

    //Additionally, you may assert if directive was actually loaded:
    

    var $injector = angular.injector(['ng','app']);
    var directives = [ 'directiveA', 'directiveB'];

    directives.forEach(function(directive){
        log = $injector.has(directive+"Directive") ? console.log.bind(console) : console.error.bind(console);
        log("Directive " + directive);
    });
})();
