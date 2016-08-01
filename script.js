function numValidate(){
    var num = document.getElementById('phone');
    num.onkeyup = function() {
        var num_val = document.getElementById('phone').value;
        if(isNaN(num_val)){
            num.style.backgroundColor = 'red';
            num.value = num_val.slice(0, -1);
        }else{
            num.style.backgroundColor = '';
        }
    }
}

numValidate();