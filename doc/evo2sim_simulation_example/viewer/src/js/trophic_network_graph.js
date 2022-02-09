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

$(function(){ // on dom ready

var trophic_network = cytoscape({
container: document.getElementById('trophic_network_graph'),

style: cytoscape.stylesheet()
  .selector('node').css({
    'content': 'data(name)',
    'font-size': 10,
    'text-valign': 'center',
    'text-outline-width': 2,
    'shape': 'data(faveShape)',
    'text-outline-color': 'data(faveColor)',
    'background-color': 'data(faveColor)',
    'color': '#fff',
    'width': 30
  })
  .selector('edge').css({
    'opacity': 0.666,
    'target-arrow-shape': 'triangle',
    'width': 2,
    'line-color': 'data(faveColor)',
    'source-arrow-color': 'data(faveColor)',
    'target-arrow-color': 'data(faveColor)'
  })
  .selector('.highlighted').css({
    'background-color': '#61bffc',
    'line-color': '#61bffc',
    'target-arrow-color': '#61bffc',
    'transition-property': 'background-color, line-color, target-arrow-color',
    'transition-duration': '0.5s'
  }),

elements: {

nodes: [
    { data: { id: '1823872', name: '2-3-5-11-13-17 (20, 1520)', faveColor: '#86B342', faveShape: 'roundrectangle' } },
    { data: { id: '1824992', name: '10 (19, 1151)', faveColor: '#6FB1FC', faveShape: 'roundrectangle' } },
    { data: { id: '1828193', name: '10 (13, 107)', faveColor: '#6FB1FC', faveShape: 'roundrectangle' } },
    { data: { id: '0', name: 'ENV (10)', faveColor: 'black', faveShape: 'roundrectangle' } },
    { data: { id: '1828071', name: '10 (12, 153)', faveColor: '#6FB1FC', faveShape: 'roundrectangle' } },
    { data: { id: '1824137', name: '10 (20, 1436)', faveColor: '#6FB1FC', faveShape: 'roundrectangle' } },
    { data: { id: '1825927', name: '1-2-3-5-11-13-17 (83, 853)', faveColor: '#86B342', faveShape: 'roundrectangle' } },
    { data: { id: '1822476', name: '2-3-5-11-13-17-18 (38, 1966)', faveColor: '#86B342', faveShape: 'roundrectangle' } },
    { data: { id: '1827886', name: '2-3-5-11-13-17-18 (17, 233)', faveColor: '#86B342', faveShape: 'roundrectangle' } },
    { data: { id: '1827087', name: '10 (16, 483)', faveColor: '#6FB1FC', faveShape: 'roundrectangle' } },
    { data: { id: '1826514', name: '10 (55, 650)', faveColor: '#6FB1FC', faveShape: 'roundrectangle' } },
    { data: { id: '1827988', name: '2-3-5-11-13-17-18 (12, 187)', faveColor: '#86B342', faveShape: 'roundrectangle' } },
    { data: { id: '1828117', name: '10-11 (13, 136)', faveColor: '#6FB1FC', faveShape: 'roundrectangle' } },
    { data: { id: '1826167', name: '10-11 (45, 771)', faveColor: '#6FB1FC', faveShape: 'roundrectangle' } },
    { data: { id: '1826681', name: '9-10-11 (34, 603)', faveColor: '#6FB1FC', faveShape: 'roundrectangle' } },
    { data: { id: '1826814', name: '2-3-5-11-13-17 (23, 566)', faveColor: '#86B342', faveShape: 'roundrectangle' } },
    { data: { id: '1827193', name: '2-3-5-11-13-17 (13, 450)', faveColor: '#86B342', faveShape: 'roundrectangle' } }
  ],

  edges: [
    { data: { id: '1823872-1828193', weight: 1, source: '1823872', target: '1828193', faveColor: 'black' } },
    { data: { id: '1823872-1828117', weight: 1, source: '1823872', target: '1828117', faveColor: 'black' } },
    { data: { id: '1823872-1828071', weight: 1, source: '1823872', target: '1828071', faveColor: 'black' } },
    { data: { id: '1823872-1827087', weight: 1, source: '1823872', target: '1827087', faveColor: 'black' } },
    { data: { id: '1823872-1826681', weight: 1, source: '1823872', target: '1826681', faveColor: 'black' } },
    { data: { id: '1823872-1826514', weight: 1, source: '1823872', target: '1826514', faveColor: 'black' } },
    { data: { id: '1823872-1826167', weight: 1, source: '1823872', target: '1826167', faveColor: 'black' } },
    { data: { id: '1823872-1824992', weight: 1, source: '1823872', target: '1824992', faveColor: 'black' } },
    { data: { id: '1823872-1824137', weight: 1, source: '1823872', target: '1824137', faveColor: 'black' } },
    { data: { id: '1824992-1827988', weight: 1, source: '1824992', target: '1827988', faveColor: 'black' } },
    { data: { id: '1824992-1823872', weight: 1, source: '1824992', target: '1823872', faveColor: 'black' } },
    { data: { id: '1824992-0', weight: 1, source: '1824992', target: '0', faveColor: 'black' } },
    { data: { id: '1828193-1827988', weight: 1, source: '1828193', target: '1827988', faveColor: 'black' } },
    { data: { id: '1828193-1823872', weight: 1, source: '1828193', target: '1823872', faveColor: 'black' } },
    { data: { id: '1828193-0', weight: 1, source: '1828193', target: '0', faveColor: 'black' } },
    { data: { id: '1828071-1827988', weight: 1, source: '1828071', target: '1827988', faveColor: 'black' } },
    { data: { id: '1828071-1823872', weight: 1, source: '1828071', target: '1823872', faveColor: 'black' } },
    { data: { id: '1828071-0', weight: 1, source: '1828071', target: '0', faveColor: 'black' } },
    { data: { id: '1824137-1827988', weight: 1, source: '1824137', target: '1827988', faveColor: 'black' } },
    { data: { id: '1824137-1823872', weight: 1, source: '1824137', target: '1823872', faveColor: 'black' } },
    { data: { id: '1824137-0', weight: 1, source: '1824137', target: '0', faveColor: 'black' } },
    { data: { id: '1825927-1828193', weight: 1, source: '1825927', target: '1828193', faveColor: 'black' } },
    { data: { id: '1825927-1828117', weight: 1, source: '1825927', target: '1828117', faveColor: 'black' } },
    { data: { id: '1825927-1828071', weight: 1, source: '1825927', target: '1828071', faveColor: 'black' } },
    { data: { id: '1825927-1827087', weight: 1, source: '1825927', target: '1827087', faveColor: 'black' } },
    { data: { id: '1825927-1826681', weight: 1, source: '1825927', target: '1826681', faveColor: 'black' } },
    { data: { id: '1825927-1826514', weight: 1, source: '1825927', target: '1826514', faveColor: 'black' } },
    { data: { id: '1825927-1826167', weight: 1, source: '1825927', target: '1826167', faveColor: 'black' } },
    { data: { id: '1825927-1824992', weight: 1, source: '1825927', target: '1824992', faveColor: 'black' } },
    { data: { id: '1825927-1824137', weight: 1, source: '1825927', target: '1824137', faveColor: 'black' } },
    { data: { id: '1822476-1828193', weight: 1, source: '1822476', target: '1828193', faveColor: 'black' } },
    { data: { id: '1822476-1828117', weight: 1, source: '1822476', target: '1828117', faveColor: 'black' } },
    { data: { id: '1822476-1828071', weight: 1, source: '1822476', target: '1828071', faveColor: 'black' } },
    { data: { id: '1822476-1827193', weight: 1, source: '1822476', target: '1827193', faveColor: 'black' } },
    { data: { id: '1822476-1827087', weight: 1, source: '1822476', target: '1827087', faveColor: 'black' } },
    { data: { id: '1822476-1826681', weight: 1, source: '1822476', target: '1826681', faveColor: 'black' } },
    { data: { id: '1822476-1826514', weight: 1, source: '1822476', target: '1826514', faveColor: 'black' } },
    { data: { id: '1822476-1826167', weight: 1, source: '1822476', target: '1826167', faveColor: 'black' } },
    { data: { id: '1822476-1825927', weight: 1, source: '1822476', target: '1825927', faveColor: 'black' } },
    { data: { id: '1822476-1824992', weight: 1, source: '1822476', target: '1824992', faveColor: 'black' } },
    { data: { id: '1822476-1824137', weight: 1, source: '1822476', target: '1824137', faveColor: 'black' } },
    { data: { id: '1827886-1828193', weight: 1, source: '1827886', target: '1828193', faveColor: 'black' } },
    { data: { id: '1827886-1828117', weight: 1, source: '1827886', target: '1828117', faveColor: 'black' } },
    { data: { id: '1827886-1828071', weight: 1, source: '1827886', target: '1828071', faveColor: 'black' } },
    { data: { id: '1827886-1827193', weight: 1, source: '1827886', target: '1827193', faveColor: 'black' } },
    { data: { id: '1827886-1827087', weight: 1, source: '1827886', target: '1827087', faveColor: 'black' } },
    { data: { id: '1827886-1826681', weight: 1, source: '1827886', target: '1826681', faveColor: 'black' } },
    { data: { id: '1827886-1826514', weight: 1, source: '1827886', target: '1826514', faveColor: 'black' } },
    { data: { id: '1827886-1826167', weight: 1, source: '1827886', target: '1826167', faveColor: 'black' } },
    { data: { id: '1827886-1825927', weight: 1, source: '1827886', target: '1825927', faveColor: 'black' } },
    { data: { id: '1827886-1824992', weight: 1, source: '1827886', target: '1824992', faveColor: 'black' } },
    { data: { id: '1827886-1824137', weight: 1, source: '1827886', target: '1824137', faveColor: 'black' } },
    { data: { id: '1827087-1827988', weight: 1, source: '1827087', target: '1827988', faveColor: 'black' } },
    { data: { id: '1827087-1823872', weight: 1, source: '1827087', target: '1823872', faveColor: 'black' } },
    { data: { id: '1827087-0', weight: 1, source: '1827087', target: '0', faveColor: 'black' } },
    { data: { id: '1826514-1827988', weight: 1, source: '1826514', target: '1827988', faveColor: 'black' } },
    { data: { id: '1826514-1823872', weight: 1, source: '1826514', target: '1823872', faveColor: 'black' } },
    { data: { id: '1826514-0', weight: 1, source: '1826514', target: '0', faveColor: 'black' } },
    { data: { id: '1827988-1828193', weight: 1, source: '1827988', target: '1828193', faveColor: 'black' } },
    { data: { id: '1827988-1828117', weight: 1, source: '1827988', target: '1828117', faveColor: 'black' } },
    { data: { id: '1827988-1828071', weight: 1, source: '1827988', target: '1828071', faveColor: 'black' } },
    { data: { id: '1827988-1827193', weight: 1, source: '1827988', target: '1827193', faveColor: 'black' } },
    { data: { id: '1827988-1827087', weight: 1, source: '1827988', target: '1827087', faveColor: 'black' } },
    { data: { id: '1827988-1826681', weight: 1, source: '1827988', target: '1826681', faveColor: 'black' } },
    { data: { id: '1827988-1826514', weight: 1, source: '1827988', target: '1826514', faveColor: 'black' } },
    { data: { id: '1827988-1826167', weight: 1, source: '1827988', target: '1826167', faveColor: 'black' } },
    { data: { id: '1827988-1825927', weight: 1, source: '1827988', target: '1825927', faveColor: 'black' } },
    { data: { id: '1827988-1824992', weight: 1, source: '1827988', target: '1824992', faveColor: 'black' } },
    { data: { id: '1827988-1824137', weight: 1, source: '1827988', target: '1824137', faveColor: 'black' } },
    { data: { id: '1828117-1828193', weight: 1, source: '1828117', target: '1828193', faveColor: 'black' } },
    { data: { id: '1828117-1828071', weight: 1, source: '1828117', target: '1828071', faveColor: 'black' } },
    { data: { id: '1828117-1827988', weight: 1, source: '1828117', target: '1827988', faveColor: 'black' } },
    { data: { id: '1828117-1827087', weight: 1, source: '1828117', target: '1827087', faveColor: 'black' } },
    { data: { id: '1828117-1826514', weight: 1, source: '1828117', target: '1826514', faveColor: 'black' } },
    { data: { id: '1828117-1824992', weight: 1, source: '1828117', target: '1824992', faveColor: 'black' } },
    { data: { id: '1828117-1824137', weight: 1, source: '1828117', target: '1824137', faveColor: 'black' } },
    { data: { id: '1828117-1823872', weight: 1, source: '1828117', target: '1823872', faveColor: 'black' } },
    { data: { id: '1828117-0', weight: 1, source: '1828117', target: '0', faveColor: 'black' } },
    { data: { id: '1826167-1828193', weight: 1, source: '1826167', target: '1828193', faveColor: 'black' } },
    { data: { id: '1826167-1828071', weight: 1, source: '1826167', target: '1828071', faveColor: 'black' } },
    { data: { id: '1826167-1827988', weight: 1, source: '1826167', target: '1827988', faveColor: 'black' } },
    { data: { id: '1826167-1827087', weight: 1, source: '1826167', target: '1827087', faveColor: 'black' } },
    { data: { id: '1826167-1826514', weight: 1, source: '1826167', target: '1826514', faveColor: 'black' } },
    { data: { id: '1826167-1824992', weight: 1, source: '1826167', target: '1824992', faveColor: 'black' } },
    { data: { id: '1826167-1824137', weight: 1, source: '1826167', target: '1824137', faveColor: 'black' } },
    { data: { id: '1826167-1823872', weight: 1, source: '1826167', target: '1823872', faveColor: 'black' } },
    { data: { id: '1826167-0', weight: 1, source: '1826167', target: '0', faveColor: 'black' } },
    { data: { id: '1826681-1828193', weight: 1, source: '1826681', target: '1828193', faveColor: 'black' } },
    { data: { id: '1826681-1828071', weight: 1, source: '1826681', target: '1828071', faveColor: 'black' } },
    { data: { id: '1826681-1827988', weight: 1, source: '1826681', target: '1827988', faveColor: 'black' } },
    { data: { id: '1826681-1827087', weight: 1, source: '1826681', target: '1827087', faveColor: 'black' } },
    { data: { id: '1826681-1826514', weight: 1, source: '1826681', target: '1826514', faveColor: 'black' } },
    { data: { id: '1826681-1824992', weight: 1, source: '1826681', target: '1824992', faveColor: 'black' } },
    { data: { id: '1826681-1824137', weight: 1, source: '1826681', target: '1824137', faveColor: 'black' } },
    { data: { id: '1826681-1823872', weight: 1, source: '1826681', target: '1823872', faveColor: 'black' } },
    { data: { id: '1826681-0', weight: 1, source: '1826681', target: '0', faveColor: 'black' } },
    { data: { id: '1826814-1828193', weight: 1, source: '1826814', target: '1828193', faveColor: 'black' } },
    { data: { id: '1826814-1828117', weight: 1, source: '1826814', target: '1828117', faveColor: 'black' } },
    { data: { id: '1826814-1828071', weight: 1, source: '1826814', target: '1828071', faveColor: 'black' } },
    { data: { id: '1826814-1827087', weight: 1, source: '1826814', target: '1827087', faveColor: 'black' } },
    { data: { id: '1826814-1826681', weight: 1, source: '1826814', target: '1826681', faveColor: 'black' } },
    { data: { id: '1826814-1826514', weight: 1, source: '1826814', target: '1826514', faveColor: 'black' } },
    { data: { id: '1826814-1826167', weight: 1, source: '1826814', target: '1826167', faveColor: 'black' } },
    { data: { id: '1826814-1824992', weight: 1, source: '1826814', target: '1824992', faveColor: 'black' } },
    { data: { id: '1826814-1824137', weight: 1, source: '1826814', target: '1824137', faveColor: 'black' } },
    { data: { id: '1827193-1828193', weight: 1, source: '1827193', target: '1828193', faveColor: 'black' } },
    { data: { id: '1827193-1828117', weight: 1, source: '1827193', target: '1828117', faveColor: 'black' } },
    { data: { id: '1827193-1828071', weight: 1, source: '1827193', target: '1828071', faveColor: 'black' } },
    { data: { id: '1827193-1827087', weight: 1, source: '1827193', target: '1827087', faveColor: 'black' } },
    { data: { id: '1827193-1826681', weight: 1, source: '1827193', target: '1826681', faveColor: 'black' } },
    { data: { id: '1827193-1826514', weight: 1, source: '1827193', target: '1826514', faveColor: 'black' } },
    { data: { id: '1827193-1826167', weight: 1, source: '1827193', target: '1826167', faveColor: 'black' } },
    { data: { id: '1827193-1824992', weight: 1, source: '1827193', target: '1824992', faveColor: 'black' } },
    { data: { id: '1827193-1824137', weight: 1, source: '1827193', target: '1824137', faveColor: 'black' } },
  ]
  },

  layout: {
    name: 'cose',
    animate: false,
    directed: true,
    padding: 10,
  }
});

}); // on dom ready
