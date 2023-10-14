
// In JS engine, only one thing can be executed at the same time. 

// Execution context (Scope) 

//Variables accessible only when a function is being executed. 

const cortar = (ingrediente) => {
    console.log('Cortar ' + ingrediente);
  }
  
  function mezclarIngredientes(n) {
    if (n <= 0) return;
  
    console.log('Mezclar #' + n);
    mezclarIngredientes(n - 1);
  }
  
  function comer() {
    console.log('Comer');
  }
  
  function hacerEnsaladaMixta() {
    cortar('tomate');
    cortar('lechuga');
    cortar('cebolla');
    mezclarIngredientes(5);
    comer();
  }
  
  hacerEnsaladaMixta();