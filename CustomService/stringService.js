angular.module('myModel').factory('stringService', function(){
    return{
        processString : function(input){
            if (!input){
                return input;
            }
            var output = "";
            for(var i=0; i<input.length; i++){
                if (i>0 && input[i] == input[i].toUpperCase()){
                    output = output + " ";
                }
                output = output + input[i];
            }
            return output;
            
        }
    };
});


angular.module('camelCase').factory('stringService', function() {
  return {
    toCamelCase : function(input) {
      var output = "";
      if(!!input) {
        output = input.toLowerCase()
                      .replace( /\s+(\S)/g,
                                function(x){
                                    return x.replace(/\s/g, '').toUpperCase()
                                }
                      );
      }

      return output;
    }
  }
});