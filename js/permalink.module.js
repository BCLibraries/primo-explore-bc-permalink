angular
    .module('bc-permalink', [])
    .controller('prmPermalinkAfterController',  ['$scope','$sce','$element',function ($scope,$sce,$element) {
	var vm=this;
        vm.msg={'class':''};
        vm.$onInit=function () {
            vm.permalinkText='';
            // change permalink to correct url
            $scope.$watch('vm.parentCtrl.permalink',function () {
                if(vm.parentCtrl.item){
                    if(vm.parentCtrl.item.pnx.search.lsr13 && vm.parentCtrl.item.pnx.addata.lad09 == "DAO") {
                        vm.parentCtrl.permalink = 'https://hdl.handle.net/' + vm.parentCtrl.item.pnx.search.lsr13[0];
                    }
                }
                if(vm.parentCtrl.permalink) {
                    vm.permalink=$sce.trustAsHtml(vm.parentCtrl.permalink);
                    // remove parent node
                    var pNode=$element[0].parentNode.children[0];

                    if(pNode) {
                       pNode.style.display='none';
                    }
                    // get link text
                    setTimeout(()=>{
                        var el=$element[0].children[0].children[0].children[0].children[0].children[0].children[0];
                        if(el) {
                            vm.permalinkText=el.textContent;
                        }
                    },1000);

                }
            });
	};

	vm.selectText=function() {
            vm.msg.class = 'highlite';
        };
        vm.unSelectText=function() {
            vm.msg.class = '';
        };

    }])

    .component('prmPermalinkAfter',{
        bindings:{parentCtrl:'<'},
        controller: 'prmPermalinkAfterController',
	controllerAs: 'vm',
        templateUrl:'primo-explore-bc-permalink/html/permalink.html'
});
