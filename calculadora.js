const num1Input = document.getElementById("num1");
        const num2Input = document.getElementById("num2");
        const resultSpan = document.getElementById("result");

        function somar() {
            let num1 = parseFloat(num1Input.value);
            let num2 = parseFloat(num2Input.value);

            if (!isNaN(num1) && !isNaN(num2)) {
                resultSpan.textContent = num1 + num2;
            } else {
                resultSpan.textContent = "Entradas Inválidas";
            }
        }
        document.getElementById("addButton").addEventListener("click", somar);

        function subtrair() {
            let num1 = parseFloat(num1Input.value);
            let num2 = parseFloat(num2Input.value);

            if (!isNaN(num1) && !isNaN(num2)) {
                resultSpan.textContent = num1 - num2;
            } else {
                resultSpan.textContent = "Entradas Inválidas";
            }
        }
        document.getElementById("subtractButton").addEventListener("click", subtrair);

        function multiplicar() {
            let num1 = parseFloat(num1Input.value);
            let num2 = parseFloat(num2Input.value);

            if (!isNaN(num1) && !isNaN(num2)) {
                resultSpan.textContent = num1 * num2;
            } else {
                resultSpan.textContent = "Entradas Inválidas";
            }
        }
        document.getElementById("multiplyButton").addEventListener("click", multiplicar);

        function dividir() {
            let num1 = parseFloat(num1Input.value);
            let num2 = parseFloat(num2Input.value);

            if (!isNaN(num1) && !isNaN(num2) && num2 !== 0) {
                resultSpan.textContent = num1 / num2;
            } else {
                resultSpan.textContent = "Entradas Inválidas";
            }
        }
        document.getElementById("divideButton").addEventListener("click", dividir);