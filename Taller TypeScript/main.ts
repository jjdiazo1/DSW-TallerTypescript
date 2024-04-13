import { Serie } from './Serie.js';
import { series } from './data.js';

const tableBody = document.getElementById('series-table-body');
const detailsContainer = document.getElementById('detailsContainer');

const createCard = (serie: Serie) => {
    return `
    <div class="card">
        <img src="${serie.imageUrl}" class="card-img-top"  alt="${serie.name}">
        <div class="card-body">
        <h5 class="card-title">${serie.name}</h5>
        <p class="card-text">${serie.description}</p>
        <a href="${serie.url}" class="btn btn-primary">Go to website</a>
        </div>
    </div>
    `;
};

if (tableBody && detailsContainer) {

    let totalSeasons = 0;
    series.forEach((serie, index) => {
        const row = `<tr class="serie-row" data-id="${serie.id}">
                        <th scope="row">${index + 1}</th>
                        <td>${serie.name}</td>
                        <td>${serie.channel}</td>
                        <td>${serie.seasons}</td>
                    </tr>`;
        tableBody.insertAdjacentHTML('beforeend', row);
        totalSeasons += serie.seasons;
    });

    const averageSeasons = (totalSeasons / series.length).toFixed(0);
    const averageRow = `<tr>
                            <td colspan="3">Seasons average:</td>
                            <td>${averageSeasons}</td>
                        </tr>`;
    tableBody.insertAdjacentHTML('beforeend', averageRow);

    document.querySelectorAll('.serie-row').forEach(row => {
        row.addEventListener('click', () => {
            const serieId = row.getAttribute('data-id');
            const serie = series.find(s => s.id.toString() === serieId);
            if (serie) {
                detailsContainer.innerHTML = createCard(serie);
            }
        });
    });
}

