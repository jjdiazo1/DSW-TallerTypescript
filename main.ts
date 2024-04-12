import { series } from './data';

const tableBody = document.getElementById('series-table-body');
if (tableBody) {
  series.forEach((serie, index) => {
    const row: string = `<tr>
                            <th scope="row">${index + 1}</th>
                            <td>${serie.name}</td>
                            <td>${serie.channel}</td>
                            <td>${serie.seasons}</td>
                        </tr>`;
    tableBody.insertAdjacentHTML('beforeend', row);
  });
}