var App = angular.module('App',[
    'ngRoute',
    'infinite-scroll'
])
    .config(
        ['$routeProvider',function ($routeProvider) {
            $routeProvider.when('/',{
                templateUrl:'template/home.html'
            });
            $routeProvider.when('/cart',{
                templateUrl:'template/cart.html'
            });
            $routeProvider.when('/sort',{
                templateUrl:'template/sort.html'
            });
            $routeProvider.when('/nearby',{
                templateUrl:'template/nearby.html'
            });
            $routeProvider.when('/message',{
                templateUrl:'template/message.html'
            });
            $routeProvider.otherwise({
                templateUrl:'template/home.html'
            })
        }]
    );
