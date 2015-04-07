
  var module = angular.module('app', ['onsen']);
var misDatos;
  module.controller('AppController', function($scope, $data) {
    $scope.doSomething = function() {
      setTimeout(function() {
        alert('tappaed');
      }, 100);
    };
  });

  module.controller('DetailController', function($scope) {
    $scope.ons.notification.alert({message: ""+misDatos.url,title: "intellibanks"});
    $scope.url = misDatos.url;
  });

  module.controller('MasterController', function($scope, $data,$http) {
    $scope.item = $data.item;  
    $http.get('http://empowerlabs.com/proyectos/trackersAPI/mblocs/todos.php').
    success(function(data, status, headers, config) {
  	//$scope.ons.notification.alert({message: ""+data.url,title: "intellibanks"});
   misDatos=data;
   $scope.item=misDatos;
    $scope.video=function(item){
    	//$scope.ons.notification.alert({message: ""+item.url,title: "intellibanks"});
    	$scope.ons.navigator.pushPage('page2.html', {title : "1"});}; 
    $scope.audio=function(){
    	$scope.ons.navigator.pushPage('page3.html', {title : "1"});}; 
    $scope.texto=function(){
    	$scope.ons.navigator.pushPage('page4.html', {title : "1"});};
    $scope.presentacion=function(){
    	$scope.ons.navigator.pushPage('page5.html', {title : "1"});};
  }).
  error(function(data, status, headers, config) {
  	
  });
    
  });

  module.factory('$data', function() {
      var data = {};
      
      data.item = [misDatos];
      
      return data;
  });

