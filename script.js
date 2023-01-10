
   function insertValue(n){
        document.querySelector('.window').value += n;
        document.querySelector("[name = 'All Clear']").value = 'CE';

    }
    function equal(){
        var exp = document.querySelector('.window').value;
        if(exp){
            document.querySelector('.window').value = eval(exp)
        }
    }
    function clearAll(){
        var x = document.querySelector("[name = 'All Clear']").value
        if(x == 'AC'){
            document.querySelector('.window').value = " "
        }
        else {
            var exp = document.querySelector('.window').value;
            document.querySelector('.window').value = exp.substring(0, exp.length - 1);
        }
       
    }
