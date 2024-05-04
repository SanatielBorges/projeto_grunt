document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    const resultado = document.getElementById('resultado');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const numero1 = parseInt(document.getElementById('numero1').value);
      const numero2 = parseInt(document.getElementById('numero2').value);
  
      if (isNaN(numero1) || isNaN(numero2)) {
        resultado.textContent = 'Por favor, digite dois números válidos.';
      } else {
        const soma = numero1 + numero2;
        resultado.textContent = `A soma de ${numero1} e ${numero2} é igual a ${soma}.`;
        form.reset(); // Limpar os campos do formulário
      }
    });
  });
  