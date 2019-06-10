angular
    .module('bc-permalink', [])
    .controller('prmPermalinkAfterController',  ['$scope','$sce','$element',function ($scope,$sce,$element) {
	var vm=this;
        vm.msg={'class':''};
        vm.$onInit=function () {
            vm.permalinkText='';
            // change permalink to correct url
            $scope.$watch('vm.parentCtrl.shortPermalink',function () {
                if(vm.parentCtrl.item){
                    if(vm.parentCtrl.item.pnx.search.lsr13 && vm.parentCtrl.item.pnx.addata.lad09 == "DAO") {
                        vm.parentCtrl.shortPermalink = 'https://hdl.handle.net/' + vm.parentCtrl.item.pnx.search.lsr13[0];
                    }
                }
            });
	};

}])

    .component('prmPermalinkAfter',{
        bindings:{parentCtrl:'<'},
        controller: 'prmPermalinkAfterController',
        controllerAs: 'vm',
        templateUrl:''
});
