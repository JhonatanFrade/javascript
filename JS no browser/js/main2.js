(function (){
	
	function MyConstructor() {
		this.prop1 = 'prop1';
		this.prop2 = 'prop2';
	}

	var constructor = new MyConstructor();

	console.log( 'MyConstructor', constructor.prop2 );

})();