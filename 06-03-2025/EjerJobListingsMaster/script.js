fetch('data.json')
  .then(response => response.json()) 
  .then(data => {
    displayJobListings(data);
  })
  .catch(error => console.error('Error al cargar el archivo JSON:', error));

function displayJobListings(jobs) {
  const jobListingsContainer = document.getElementById('jobs-listings');

  jobs.forEach(job => {
    const jobElement = document.createElement('div');
    jobElement.classList.add('bgd-square');

    jobElement.innerHTML = `
      <img src="${job.logo}" alt="${job.company}">
      <p id="company">${job.company} <span class="new">${job.new ? 'New' : ''}</span><span class="feature">${job.featured ? 'Featured' : ''}</span></p>
      <p id="applied-position">${job.position}</p>
      <p id="conditions">${job.postedAt} · ${job.contract} · ${job.location}</p>
      <hr>
      ${job.languages.map(lang => `<div class="options"><p>${lang}</p></div>`).join('')}
      ${job.tools.map(tool => `<div class="options"><p>${tool}</p></div>`).join('')}
    `;

    jobListingsContainer.appendChild(jobElement);
  });
}

document.getElementById('input-filter').addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase();
  const jobItems = document.querySelectorAll('.bgd-square');

  jobItems.forEach(item => {
    const options = item.querySelectorAll('.options p');
    const match = Array.from(options).some(option => option.textContent.toLowerCase().includes(query));
    
    if (match) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
});

document.getElementById('Clear').addEventListener('click', () => {
  document.getElementById('input-filter').value = '';
  const jobItems = document.querySelectorAll('.bgd-square');
  jobItems.forEach(item => item.style.display = 'block');
});