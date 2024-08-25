document.addEventListener('DOMContentLoaded', () => {
    let input = document.getElementById('call');
    let buttons = document.querySelectorAll('button');

    let expression = "";

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            let value = e.target.innerHTML;

            if (value === '=') {
                try {
                 
                    expression = new Function('return ' + expression)();
                    input.value = expression;
                } catch (error) {
                    input.value = 'Error';
                    expression = '';
                }
            } else if (value === 'AC') {
                expression = "";
                input.value = expression;
            } else if (value === 'Del') {
                expression = expression.slice(0, -1);  
                input.value = expression;
            } else {
             
                if (/^[0-9+\-*/.%()]$/.test(value)) {
                
                    if (/[+\-*/]$/.test(expression) && /[+\-*/]/.test(value)) {
                        return; r
                    }
                    expression += value;
                    input.value = expression;
                }
            }
        });
    });
});
