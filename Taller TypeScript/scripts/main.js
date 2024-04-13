import { series } from './data.js';
var tableBody = document.getElementById('series-table-body');
var detailsContainer = document.getElementById('detailsContainer');
var createCard = function (serie) {
    return "\n    <div class=\"card\">\n        <img src=\"".concat(serie.imageUrl, "\" class=\"card-img-top\"  alt=\"").concat(serie.name, "\">\n        <div class=\"card-body\">\n        <h5 class=\"card-title\">").concat(serie.name, "</h5>\n        <p class=\"card-text\">").concat(serie.description, "</p>\n        <a href=\"").concat(serie.url, "\" class=\"btn btn-primary\">Go to website</a>\n        </div>\n    </div>\n    ");
};
if (tableBody && detailsContainer) {
    var totalSeasons_1 = 0;
    series.forEach(function (serie, index) {
        var row = "<tr class=\"serie-row\" data-id=\"".concat(serie.id, "\">\n                        <th scope=\"row\">").concat(index + 1, "</th>\n                        <td>").concat(serie.name, "</td>\n                        <td>").concat(serie.channel, "</td>\n                        <td>").concat(serie.seasons, "</td>\n                    </tr>");
        tableBody.insertAdjacentHTML('beforeend', row);
        totalSeasons_1 += serie.seasons;
    });
    var averageSeasons = (totalSeasons_1 / series.length).toFixed(0);
    var averageRow = "<tr>\n                            <td colspan=\"3\">Seasons average:</td>\n                            <td>".concat(averageSeasons, "</td>\n                        </tr>");
    tableBody.insertAdjacentHTML('beforeend', averageRow);
    document.querySelectorAll('.serie-row').forEach(function (row) {
        row.addEventListener('click', function () {
            var serieId = row.getAttribute('data-id');
            var serie = series.find(function (s) { return s.id.toString() === serieId; });
            if (serie) {
                detailsContainer.innerHTML = createCard(serie);
            }
        });
    });
}
