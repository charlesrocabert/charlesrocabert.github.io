/****************************************************************************
 * Copyright (C) 2014-2016 Charles Rocabert, Carole Knibbe, Guillaume Beslon
 * Web: http://www.evoevo.eu/
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 ****************************************************************************/

var ctx = document.getElementById('environment_chart').getContext('2d');
Chart.defaults.global.responsive = true;
var data = {
  labels: ['1','|2|','|3|','4','|5|','6','|7|','8','9','10','|11|','12','|13|','14','15','16','|17|','18','|19|','20'],
  datasets: [
  {
    label: 'Global environment state',
    fillColor: 'rgba(220,120,0,0.5)',
    strokeColor: 'rgba(220,120,0,0.8)',
    highlightFill: 'rgba(220,120,0,0.75)',
    highlightStroke: 'rgba(220,120,0,1)',
    data: [66.4982,300.451,302.75,269.977,461.839,411.241,1440.0,116.781,4.89028,3073.85,331.806,145.662,851.878,96.083,67.3025,235.702,389.559,308.895,710.545,2.25546],
  }
  ]
};
var myBarChart = new Chart(ctx).Bar(data);

