import { series } from './data.js';
var tableBody = document.getElementById('series-table-body');
if (tableBody) {
    series.forEach(function (serie, index) {
        var row = "<tr>\n                            <th scope=\"row\">".concat(index + 1, "</th>\n                            <td>").concat(serie.name, "</td>\n                            <td>").concat(serie.channel, "</td>\n                            <td>").concat(serie.seasons, "</td>\n                        </tr>");
        tableBody.insertAdjacentHTML('beforeend', row);
    });
}