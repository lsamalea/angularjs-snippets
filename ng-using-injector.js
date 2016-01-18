//  var eldoc = angular.element(document);
//  var scope = angular.element(document);
//  var injector = eldoc.injector();

var $injector = angular.injector(['ng','app']);

$injector.invoke(function($rootScope, $compile, $document) {
  var html = "<directive-b></directive-b>"; 
  
  var childScope = angular.extend($rootScope.$new(), {name:"hola"});

  var el = $compile(html)(childScope);
  $rootScope.$digest();

  console.log(el.text());
});
