
(function (){
	var myObject = {
		myProperty: 4,
		init: function init(){
			return this.myProperty;
		}
	};
	console.log(myObject.init());
})();

/*
//THIS APARECENDO EM FUNCOES como referencia ao global
(function (){
	function myFunction(){
		return this;
	}
	console.log(myFunction());
})();
*/