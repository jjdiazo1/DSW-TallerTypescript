import { series } from './data.js';
var tableBody = document.getElementById('series-table-body');
if (tableBody) {
    var totalSeasons_1 = 0;
    series.forEach(function (serie, index) {
        var row = "<tr>\n                        <th scope=\"row\">".concat(index + 1, "</th>\n                        <td>").concat(serie.name, "</td>\n                        <td>").concat(serie.channel, "</td>\n                        <td>").concat(serie.seasons, "</td>\n                    </tr>");
        tableBody.insertAdjacentHTML('beforeend', row);
        totalSeasons_1 += serie.seasons;
    });
    var averageSeasons = (totalSeasons_1 / series.length).toFixed(0);
    var averageRow = "<tr>\n                            <td colspan=\"3\">Seasons average:</td>\n                            <td>".concat(averageSeasons, "</td>\n                        </tr>");
    tableBody.insertAdjacentHTML('beforeend', averageRow);
}
