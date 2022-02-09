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

var ctx = document.getElementById('local_environment_chart').getContext('2d');
Chart.defaults.global.responsive = true;
var data = {
  labels: ['1','|2|','|3|','4','|5|','6','|7|','8','10','|11|','12','|13|','14','15','16','|17|','18','|19|'],
  datasets: [
  {
    label: 'Local environment state',
    fillColor: 'rgba(0,120,220,0.5)',
    strokeColor: 'rgba(0,120,220,0.8)',
    highlightFill: 'rgba(0,120,220,0.75)',
    highlightStroke: 'rgba(0,120,220,1)',
    data: [0.0556849,0.365567,0.231174,0.200407,0.431983,0.389051,1.21563,0.141324,2.7101,0.320524,0.135883,0.827863,0.0720014,0.0461999,0.157584,0.447678,0.226373,0.610694],
  }
  ]
};
var myBarChart = new Chart(ctx).Bar(data);

