// Ejemplos con false && false = false (operador and '&&')

console.log(false && false); // Ejemplo basico 
console.log(0 && false); // 0 por que es falsy y se detiene al primer falsy que encuentra (corto circuito)
console.log(false && null);
console.log(undefined && false); // undefined es falsy y por eso se detiene en undefined
console.log(false && !'Nestor'); // Se pone el operador de negacion para convertir el string en false
console.log(NaN && false);
console.log('' && false) // Una cadena vacia siempre sera falsy, pero cualquier otra cadena sera sera truly
console.log(false && !63); // Se pone el operador de negacion por que un numero es truly
console.log(false && ![]); // Un array vacio es truly, se pone el operador de nagacion
console.log(false && !{}); //Un objeto es vacio y se pone un operador de negacion para convertirlo a un falsys

// Ejemplos de false y true = false

console.log(false && true); // Ejemplo basico.
console.log(0 && true);
console.log(false && 'Nestor');
console.log(false && 32); // Cualquier numero mayor a 0 sera truly
console.log(undefined && true);
console.log(NaN && true);
console.log('' && true);
console.log(false && {});
console.log(false && []);
console.log(false && new Date());

// Ejemplos de true && false = false

console.log(true && false); // Ejemplos basico
console.log(1 && false);
console.log('Nestor' && false);
console.log([] && false);
console.log({} && false);
console.log(true && 0);
console.log(true && '');
console.log(true && null);
console.log(true && NaN);
console.log(true && undefined);

// Ejemplos de true && true = true

console.log(true && true); // Ejemplos basico, regresara el ultimo valor identificado como true
console.log(1 && true); // Regresa true u no el '1' por que true es el ultimo valor identificado
console.log('Nestor' && true);
console.log([] && true);
console.log({} && true);
console.log(true && 'Nestor');
console.log(100 && 'Nestor');
console.log(true && []);
console.log(true && {});
console.log(true && new Date());

/**********************************************************************************************************/

// Ejemplos de false || false = false (operador or '||')

console.log(false || false); // Ejemplo basico.
console.log(0 || false);
console.log(null || false);
console.log(undefined || false);
console.log(false || !'Nestor'); // Una cadena de texto siempre sera truly
console.log(NaN || false);
console.log('' || false) // Una cadena vacia siempre sera false
console.log(false || 0);
console.log(false || ![]); // Recodatorio (un arreglo y un obejto vacio siempre seran true)
console.log(false || !{}); // Para que de un resultado false, se tiene que poner el operador '!'

// Ejemplos de false || true = true

console.log(false || true); // Ejemplo basico
console.log(0 || true);
console.log(null || true);
console.log(undefined || true);
console.log(false || 'Nestor');
console.log(NaN || true);
console.log('' || true);
console.log(false || 96);
console.log(false || {});
console.log(false || []);

// Ejemplos de true || false = true

console.log(true || false);    
console.log(1 || false);       
console.log("Nestor" || false);  
console.log([] || false);       
console.log({} || false);       
console.log(true || 0);         
console.log(true || "");       
console.log(true || null);    
console.log(true || NaN);       
console.log(true || undefined); 

// Ejemplos de true || true = true

console.log(true || true);
console.log(1 || true);
console.log('Hola')

