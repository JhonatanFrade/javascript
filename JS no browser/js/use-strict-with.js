(function(){
	//'use strict';
	var obj = {
		prop1: {
			prop2: {
				prop3: {
					prop31: 'prop31',
					prop32: 'prop32',
					prop33: 'prop33'
				}
			}
		}
	};
	with( obj.prop1.prop2.prop3 ){
		console.log( prop33 );
	}
})();