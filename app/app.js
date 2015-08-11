angular.module('nodebot',[])
    .controller('NbController',['$scope',function($scope){
        var socket = io();


        $scope.movements = {
            moveForward : function(){
                socket.emit('start');
            },
            moveBackward : function(){
                socket.emit('reverse');
            },
            turnRight : function(){
                socket.emit('right');
            },
            turnLeft : function(){
                socket.emit('left');
            },
            stop : function(){
                socket.emit('stop');
            }
        }
    }]);
