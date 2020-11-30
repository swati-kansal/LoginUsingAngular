(function () {
  'use strict';

  angular
      .module('app')
      .controller('HomeController', HomeController);

  HomeController.$inject = ['$rootScope'];
  function HomeController($rootScope) {
    var vm = this;

    vm.user = null;
       initController();

    function initController() {
      loadCurrentUser();
    }

    function loadCurrentUser() {
            var user = {};
             user.username = 'admin';
             user.firstName = 'Swati';
             user.lastName = 'Kansal';
            vm.user = user;
    }

  }

})();