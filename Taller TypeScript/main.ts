import { series } from './data.js';

const tableBody = document.getElementById('series-table-body');
if (tableBody) {
    let totalSeasons = 0;
    
    series.forEach((serie, index) => {
        const row = `<tr>
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
}
