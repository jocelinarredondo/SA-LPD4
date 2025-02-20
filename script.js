function generarSerieFibonacci() {
    let numero;
    
    // Solicitar al usuario hasta que ingrese un número válido
    do {
      let entrada = prompt("Ingresa un número entero positivo para generar la serie de Fibonacci:");
      numero = Number(entrada);
  
      if (isNaN(numero) || numero < 1 || !Number.isInteger(numero)) {
        alert("Por favor ingresa un número entero positivo.");
      }
    } while (isNaN(numero) || numero < 1 || !Number.isInteger(numero));
  
    // Generar la serie de Fibonacci
    let fibonacci = [];
    if (numero >= 1) fibonacci.push(0);
    if (numero >= 2) fibonacci.push(1);
  
    for (let i = 2; i < numero; i++) {
      fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }
  
    // Mostrar el resultado en el DOM
    document.getElementById("resultado").innerText = `Serie de Fibonacci (${numero} números): ${fibonacci.join(", ")}.`;
  }
  
  // Ejecutar la función al cargar el script
  generarSerieFibonacci();
  