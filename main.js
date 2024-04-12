"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("./data");
const tableBody = document.getElementById('series-table-body');
if (tableBody) {
    data_1.series.forEach((serie, index) => {
        const row = `<tr>
                            <th scope="row">${index + 1}</th>
                            <td>${serie.name}</td>
                            <td>${serie.channel}</td>
                            <td>${serie.seasons}</td>
                        </tr>`;
        tableBody.insertAdjacentHTML('beforeend', row);
    });
}
