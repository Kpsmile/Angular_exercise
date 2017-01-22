///<reference path = "custom_filter.js" />

//This filter is bieng used as custom filter in  custom_filter.js & custom_filter.html


myApp.filter("gender", function(){
        return function(gender){
    switch(gender){
        case 1:
            return "Male";
        case 2:
            return "Female";
        case 3:
            return "Not to Disclose";
            
    }
}
        }
             )