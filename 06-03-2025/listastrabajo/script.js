fetch('data.json') // Cargar el JSON externo
    .then(response => response.json()) // Convertir la respuesta a JSON
    .then(datos => {
      const container = document.getElementById('jobs-container');

      datos.forEach(job => {
        // Crear un contenedor para cada oferta de trabajo
        const jobElement = document.createElement('div');
        jobElement.innerHTML = `
          <p><strong></strong> <span>${job.company}</span></p>
          <p><strong></strong> <span>${job.position}</span></p>
          <p><strong></strong> <span>${job.role}</span></p>
          <p><strong></strong> <span>${job.level}</span></p>
          <p><strong></strong> <span>${job.postedAt}</span></p>
          <p><strong></strong> <span>${job.contract}</span></p>
          <p><strong></strong> <span>${job.location}</span></p>
          <p><strong></strong> <span>${job.languages.join(", ") || "N/A"}</span></p>
         
        `;

        container.appendChild(jobElement);
      });
    })
    .catch(error => console.error('Error al cargar JSON:', error));
