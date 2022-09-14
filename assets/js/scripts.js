//================================== Função Increment =====================================//

var currentNumber = 1
        
        function increment(){
        
        
            var currentNumberWrapper = document.getElementById("currentNumber");
               
                currentNumber = currentNumber + 1;
                currentNumberWrapper.innerHTML = currentNumber;
            
        }    
        
//================================== Função Decrement =====================================//

var currentNumberWrapper = document.getElementById("currentNumber");


function decrement(){
    
    if(currentNumber >'0'){
       
        currentNumber = currentNumber - 1;
        currentNumberWrapper.innerHTML = currentNumber;
    
    }
}

//===========================================================================================