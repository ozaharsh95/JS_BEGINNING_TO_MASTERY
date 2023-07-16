//concept 2
        //normal window object ape this 
        /*
        console.log(this);//window object return thay 

        function myf(){
            console.log(this);
        }
        myf();
        */

        //while using "use strict"
        "use strict";

        
        function myf(){
            console.log(this);  //use strict sathe use kariye to undefinde ape
        }
        myf();