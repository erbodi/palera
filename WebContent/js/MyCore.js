angular.module('MyCore', []);

angular.module('MyCore').filter("capitalize", function () {
	  return function (s) {
	    if (typeof (s)==="string") {
	      return s.charAt(0).toUpperCase() + 
	          s.substring(1, s.length).toLowerCase();
	    }
	    return s;
	  };
	});
angular.module('MyCore').filter("initcap", function () {
	  return function (s) {
		    if (typeof (s) === "string") {
		    	return s.replace(/[^\s]+/g, 
		    			function(cad) { 
		    				return cad.charAt(0).toUpperCase() + 
		    					cad.slice(1).toLowerCase(); 
		    			});
		    }
		    return s;
		  };
		});

angular.module('MyCore').filter("toComaDecimal", function() {
  return function(s) {
      if (typeof(s) === "number") {
          s = s.toString();
      }
      if (typeof(s) === "string") {
          return s.replace(/\./g, ",");
      }
      return s;
  };
});

angular.module('MyCore').directive('uppercase', function() {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      ctrl.$validators.uppercase = function(modelValue, viewValue) {
        if (ctrl.$isEmpty(modelValue)) {
          // consider empty models to be valid
          return true;
        }

        if (viewValue.toString() === viewValue.toString().toUpperCase()) {
          // it is valid
          return true;
        }

        // it is invalid
        return false;
      };
    }
  };
});

