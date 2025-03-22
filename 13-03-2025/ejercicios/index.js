////Ejercicios AND

//true && false = false

console.log((4+2) && (8===3)); //True &&& False = false
console.log((5 > 4) && (5-5));//(true && false )= false 
console.log((18 =='mayor edad') && 0);
console.log('string' && false);
console.log(0 && 5);
console.log('juan' && 0); 
console.log((15 >= 10) && (1 != 1));
console.log((3<5) && (5 >10));
console.log((9-1>=7) && (5+3 > 9));
console.log([] && null);


/////// false && false = false///////

console.log("" && "Texto");  // "" 
console.log(0 && 20);  
console.log(null && "Hola");  
console.log((4 * 2 < 5) && (1 - 1));  
console.log(0 && NaN);  
console.log((5 - 5) && (10 / 2));  
console.log((0 / 0) && (10 - 5));  
console.log((3 * 0) && (20 < 10));  
console.log((0 + 0) && (10 < 5));  
console.log((-10 > 5) && (0 * 10));  


////true && false = false///

console.log((0 && 10)); 
console.log((30 && NaN))
console.log((10 > 2) && (5 < 3));
console.log(("HOLA" && NaN));  
console.log("Hola" && false);
console.log([] && false);
console.log({} && false);
console.log((5 + 5 < 11) && false);
console.log(" " && false);
console.log((10 + 20) && false);

////// true && true = true ////

console.log(10 && 5);
console.log('Hola' && 'Mundo');
console.log((5 + 5 == 10) && (20 > 5));
console.log((10 > 5) && (20 > 15));
console.log((50 / 2) && (10 + 5));
console.log(true && true);
console.log((3 + 5) && 200);
console.log((5 < 10) && (100 === 100));
console.log('string' && 500);
console.log((8 >= 4) && (12 !== 5));


////OPERADOR LOGICO OR  false || false == false

console.log(false || false);
console.log(0 || false);
console.log('' || false);
console.log(null || false);
console.log(undefined || '');
console.log((NaN) || (0 - 0));
console.log((5 > 10) || (0 + 0));
console.log((5 > 10) || !(10*1===10));
console.log((0 / 5) || NaN);
console.log((2 > 5) || (10 - 10));

//// false || true = true

console.log(0 || (5<6));
console.log('' || 'Hola');
console.log(null || (100-99===1));
console.log(0 || 'string' );
console.log((5 > 10) || (10*1===10));
console.log(!false || 10);
console.log(null || []);
console.log(!(4 * 0) || (10 - 3));
console.log((2 > 10) || (5 * 3));
console.log((20 < 10) || (30 - 5));

//// true || false = true

console.log('Hola' || false);
console.log(null || []);
console.log( (10!=5) || (8>10));
console.log((5 + 5) || (0/0));
console.log((23 > 20) || null);
console.log((10 / 2) || 0);
console.log(!(5 > 10) || false);
console.log(!0 || (20 - 5));
console.log(!!(5 > 2) || -8);
console.log(!(10 * 3 >= 20 ) || (2 * 3 === 8));


//// true || true = true
console.log((5<10) || !false);
console.log('hola' && 100);
console.log((10 > 5) && 42);
console.log((10*2) && (20 > 10));
console.log({} && (8>4));
console.log((5 * 4) && (10 > 2));
console.log((10 > 5) && (8 !== 3));
console.log(undefined || 'hola');
console.log(!(0/0) || []);
console.log(!(null)|| (9/2 < 4));





const calculadora = (a,b,operacion)=>{
    if(operacion === 'suma'){
    
    return a + b;
    }
    elseif(operacion=== 'resta'){
        return a - b;
    }
    elseif (operacioo ==='mult'){
        return a + b;
    }
    elseif (operacion === 'div'){
        return a / b;
    }
    
    }
    