const input = document.querySelector('#predictiveInput');
const searchButton = document.querySelector('#busqueda'); // Botón con id="busqueda"
let texto = '';
const listToSearch = [
    { name: 'audi', url: 'https://www.google.com.mx/search?q=audi&sca_esv=b36f55d2b2433671&hl=es-419&udm=2&biw=689&bih=709&sxsrf=AHTn8zpGh2wZb_nzm0QFf7byQDQsP89tsw%3A1741164618643&ei=ShDIZ7D_JqnlwN4PtvKroAk&ved=0ahUKEwiwzNvUx_KLAxWpMtAFHTb5CpQQ4dUDCBE&uact=5&oq=audi&gs_lp=EgNpbWciBGF1ZGkyBxAjGCcYyQIyDRAAGIAEGLEDGEMYigUyDRAAGIAEGLEDGEMYigUyChAAGIAEGEMYigUyDRAAGIAEGLEDGEMYigUyChAAGIAEGEMYigUyChAAGIAEGEMYigUyDRAAGIAEGLEDGEMYigUyDRAAGIAEGLEDGEMYigUyDRAAGIAEGLEDGEMYigVI8hFQjApYhQ1wA3gAkAEAmAFioAHXAqoBATS4AQPIAQD4AQGYAgegAoYDwgIIEAAYgAQYsQPCAhAQABiABBixAxhDGIMBGIoFwgILEAAYgAQYsQMYgwGYAwCIBgGSBwM2LjGgB4kZ&sclient=img' },
    { name: 'ford', url: 'https://www.google.com.mx/search?q=ford&sca_esv=b36f55d2b2433671&hl=es-419&udm=2&biw=689&bih=709&sxsrf=AHTn8zqkRUF4DHUJ4-goZWIxihGyKCei7w%3A1741164675935&ei=gxDIZ7rnOJigwN4Pxr2w6AI&ved=0ahUKEwj6tITwx_KLAxUYENAFHcYeDC0Q4dUDCBE&uact=5&oq=ford&gs_lp=EgNpbWciBGZvcmQyBxAjGCcYyQIyBxAjGCcYyQIyCBAAGIAEGLEDMggQABiABBixAzIIEAAYgAQYsQMyCBAAGIAEGLEDMggQABiABBixAzIIEAAYgAQYsQMyCBAAGIAEGLEDMggQABiABBixA0jZBVCNBFiNBHABeACQAQCYAVagAVaqAQExuAEDyAEA-AEBmAICoAJkwgIIEAAYBxgKGB7CAgoQABiABBixAxgKmAMAiAYBkgcBMqAH9AY&sclient=img' },
    { name: 'volkswagen', url: 'https://www.google.com.mx/search?q=volkswagen&sca_esv=b36f55d2b2433671&hl=es-419&udm=2&biw=689&bih=709&sxsrf=AHTn8zrOmlp3AmDUsc9Oz7FIZok1OAxUWQ%3A1741164678496&ei=hhDIZ_GBHrrkwN4P8O7JqQo&oq=volw&gs_lp=EgNpbWciBHZvbHcqAggAMgoQABiABBixAxgKMg0QABiABBixAxiDARgKMgcQABiABBgKMg0QABiABBixAxiDARgKMgoQABiABBixAxgKMgoQABiABBixAxgKMgoQABiABBixAxgKMgoQABiABBixAxgKMgoQABiABBixAxgKMgoQABiABBixAxgKSNkUUJEIWMUMcAJ4AJABAJgBWaAB1AKqAQE0uAEDyAEA-AEBmAIGoAL8AsICBxAjGCcYyQLCAgYQABgHGB7CAg0QABiABBixAxhDGIoFwgIKEAAYgAQYQxiKBcICCxAAGIAEGLEDGIMBwgIIEAAYgAQYsQOYAwCIBgGSBwE2oAf4Gw&sclient=img' },
    { name: 'chevrolet', url: 'https://www.google.com.mx/search?q=chevrolet&sca_esv=b36f55d2b2433671&hl=es-419&udm=2&biw=689&bih=709&sxsrf=AHTn8zoLpodV9_YUZiNK40KVLpjTOALZ9w%3A1741164692401&ei=lBDIZ5mhGKHkwN4P4dWI-A8&oq=chev&gs_lp=EgNpbWciBGNoZXYqAggAMgcQIxgnGMkCMg0QABiABBixAxhDGIoFMg0QABiABBixAxhDGIoFMg0QABiABBixAxhDGIoFMgoQABiABBhDGIoFMg0QABiABBixAxhDGIoFMg0QABiABBixAxhDGIoFMgoQABiABBhDGIoFMg0QABiABBixAxhDGIoFMgoQABiABBhDGIoFSKgSULMGWOIIcAJ4AJABAJgBVKABxgKqAQE0uAEDyAEA-AEBmAIGoALsAsICBhAAGAcYHsICCxAAGIAEGLEDGIMBwgIIEAAYgAQYsQOYAwCIBgGSBwE2oAeCHA&sclient=img' },
    { name: 'mitsubishi', url: 'https://www.google.com.mx/search?q=mitsubishi&sca_esv=b36f55d2b2433671&hl=es-419&udm=2&biw=689&bih=709&sxsrf=AHTn8zpJkNyDSD2OVO5yaVY0igSzQtzM0w%3A1741164708753&ei=pBDIZ-LfLdnfp84P-Y6i0Qc&oq=&gs_lp=EgNpbWciACoCCAgyChAjGCcYyQIY6gIyChAjGCcYyQIY6gIyChAjGCcYyQIY6gIyChAjGCcYyQIY6gIyChAjGCcYyQIY6gIyChAjGCcYyQIY6gIyChAjGCcYyQIY6gIyChAjGCcYyQIY6gIyChAjGCcYyQIY6gIyChAjGCcYyQIY6gJIuxVQAFgAcAF4AJABAJgBAKABAKoBALgBAcgBAPgBAZgCAaACBqgCCpgDBpIHATGgBwA&sclient=img' },
    { name: 'nissan', url: 'https://www.google.com.mx/search?q=nissan&sca_esv=b36f55d2b2433671&hl=es-419&udm=2&biw=689&bih=709&sxsrf=AHTn8zq3RXZnYvTZNRSWlFvRjK8mVYX7jw%3A1741164725075&ei=tRDIZ7vmA-DcwN4P1b_f4Ag&oq=ni&gs_lp=EgNpbWciAm5pKgIIADIHECMYJxjJAjIKEAAYgAQYQxiKBTIKEAAYgAQYQxiKBTIKEAAYgAQYQxiKBTIKEAAYgAQYQxiKBTIKEAAYgAQYQxiKBTIKEAAYgAQYQxiKBTIKEAAYgAQYQxiKBTINEAAYgAQYsQMYQxiKBTIKEAAYgAQYQxiKBUiUDlDuBFj4BXABeACQAQCYAVWgAagBqgEBMrgBAcgBAPgBAZgCA6ACuwGoAgrCAgoQIxgnGMkCGOoCwgILEAAYgAQYsQMYgwHCAgUQABiABMICCBAAGIAEGLEDmAMGkgcBM6AHvA0&sclient=img' },
    { name: 'toyota', url: 'https://www.google.com.mx/search?sca_esv=b36f55d2b2433671&hl=es-419&sxsrf=AHTn8zrQ0WwDYIH1eD7FtRQpNokF_HXDsw:1741164616754&q=toyota&udm=2&fbs=ABzOT_BnMAgCWdhr5zilP5f1cnRvK9uZj3HA_MTJAA6lXR8yQHNGH3ZsMTDAwt3AcRkz7p5fiVMnZaNXNvJXISKRQIxFnbwDLirK0xjyP-feekP8A4inpItHPlJLNk2VIUroV5XSI2aXdzco5Get6icss1bzweLowyf8360a9Gkf3HYehAvu4u6zxnUJrqHom8EIxVSLdrJwIvTLIDW8gUGV1FVKsFFrJg&sa=X&ved=2ahUKEwiFpujTx_KLAxWr78kDHeljDg4QtKgLegQIExAB&biw=1440&bih=819&dpr=2' },
    { name: 'byd', url: 'https://www.google.com.mx/search?q=byd&sca_esv=b36f55d2b2433671&hl=es-419&udm=2&biw=689&bih=709&sxsrf=AHTn8zpo7PlQz6X6IaPycbnX5SbRXm0NcA%3A1741164740104&ei=xBDIZ8KQBsGhwN4Ph-SVgA4&ved=0ahUKEwjCgtGOyPKLAxXBENAFHQdyBeAQ4dUDCBE&uact=5&oq=byd&gs_lp=EgNpbWciA2J5ZDIHECMYJxjJAjINEAAYgAQYsQMYQxiKBTINEAAYgAQYsQMYQxiKBTIIEAAYgAQYsQMyChAAGIAEGEMYigUyCxAAGIAEGLEDGIMBMgoQABiABBhDGIoFMggQABiABBixAzINEAAYgAQYsQMYQxiKBTIIEAAYgAQYsQNIjA5QwAZY7QlwAXgAkAEAmAFaoAGDAqoBATO4AQPIAQD4AQGYAgSgAp4CqAIKwgIKECMYJxjJAhjqApgDBpIHATSgB8UT&sclient=img' }
];
let listaFiltrada = [];

input.addEventListener('input', () => {
    texto = input.value.trim();  // Obtener el valor completo del input
    listaFiltrada = listToSearch.filter((element) => {
        return element.name.toLowerCase().includes(texto.toLowerCase());  // Comparación insensible a mayúsculas
    });
    

    // Eliminar la lista previa (si existe)
    const existingList = document.querySelector('ol');
    if (existingList) {
        existingList.remove();
    }

    if (listaFiltrada.length > 0) {
        const ul = document.createElement('ol');
        listaFiltrada.forEach((option) => {
            const li = document.createElement('li');
            li.innerText = option.name;

            // Asociamos el evento de clic para redirigir al hacer clic en la opción
            li.addEventListener('click', () => {
                window.location.href = option.url;  // Redirigir a la URL asociada
            });

            ul.appendChild(li);
        });
        document.body.appendChild(ul);  // Agregar la nueva lista filtrada al DOM
    }
});


// Evento del botón de búsqueda 
searchButton.addEventListener('click', (e) => {
    e.preventDefault(); // Prevenir el comportamiento predeterminado del formulario si lo hay

    texto = input.value.trim();  // Obtener el texto actual del input
    listaFiltrada = listToSearch.filter((element) => {
        return element.name.toLowerCase() === texto.toLowerCase();  // Búsqueda exacta
    });

    if (listaFiltrada.length > 0) {
        // Si hay coincidencia, redirigir
        window.location.href = listaFiltrada[0].url;
    } else {
        // Si no se encuentra la marca, mostrar un mensaje o hacer algo más
        console.log('Marca no encontrada');
    }
});


//Codigo Ejemplo 

/*const input = document.querySelector('#predictiveInput');
        let texto = '';
        const listToSearch = ['rojo', 'azul', 'verde'];
        let listaFiltrada = [];
        input.addEventListener('input', ({data}) => {
            texto += data;
            listaFiltrada = listToSearch.filter((element) => {
                return element === texto || element.includes(texto);
            });
            if(listaFiltrada.length > 0) {
                const ul = document.createElement('ol');
                listaFiltrada.forEach((option) => {
                    const li = document.createElement('li');
                    li.innerText = option;
                    ul.appendChild(li);
                    document.body.appendChild(ul);
                });
            }
        });
*/
