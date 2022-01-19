function Calculator(operator) 
{
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;  
 
    switch(operator) 
    {
        case '+':
            var result = parseFloat(a) + parseFloat(b);         
        break;
        case '-':
            var result = parseFloat(a) - parseFloat(b);         
        break;  
        case 'x':
            var result = parseFloat(a) * parseFloat(b);         
        break;  
        case '/':
            var result = parseFloat(a) / parseFloat(b);         
        break;    
        case '%':
            var result = parseFloat(a) % parseFloat(b);         
        break;    
    }
 
    document.getElementById('result').value = '= ' + result;
}