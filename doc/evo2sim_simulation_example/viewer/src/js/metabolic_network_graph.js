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

var metabolic_network = cytoscape({
container: document.getElementById('metabolic_network_graph'),

style: cytoscape.stylesheet()
  .selector('node').css({
    'content': 'data(id)',
    'text-valign': 'center',
    'text-outline-width': 2,
    'shape': 'data(faveShape)',
    'text-outline-color': 'data(faveColor)',
    'background-color': 'data(faveColor)',
    'color': '#fff',
    'width': 30
  })
  .selector('$node > node').css({
    'text-outline-color': '#6FB1FC',
    'border-color': '#6FB1FC',
    'border-width': 2,
    'background-color': 'white',
    'color': 'white',
    'padding-top': '10px',
    'padding-left': '10px',
    'padding-bottom': '10px',
    'padding-right': '10px',
    'text-valign': 'top',
    'text-halign': 'center'
  })
  .selector('edge').css({
    'opacity': 0.666,
    'target-arrow-shape': 'triangle',
    'width': 2,
    'line-color': 'data(faveColor)',
    'source-arrow-color': 'data(faveColor)',
    'target-arrow-color': 'data(faveColor)'
  })
  .selector('edge.no_flux').css({
    'line-style': 'dashed',
    'line-color': 'grey',
    'source-arrow-color': 'grey',
    'target-arrow-color': 'grey'
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
    { data: { id: 'cell', faveColor: 'rgb(200, 200, 220)', faveShape: 'rectangle' } },
    { data: { id: '2', parent: 'cell', faveColor: '#86B342', faveShape: 'rectangle' } },
    { data: { id: '3', parent: 'cell', faveColor: '#86B342', faveShape: 'rectangle' } },
    { data: { id: '5', parent: 'cell', faveColor: '#86B342', faveShape: 'rectangle' } },
    { data: { id: '6', parent: 'cell', faveColor: '#6FB1FC', faveShape: 'ellipse' } },
    { data: { id: '7', parent: 'cell', faveColor: '#86B342', faveShape: 'rectangle' } },
    { data: { id: '8', parent: 'cell', faveColor: '#6FB1FC', faveShape: 'ellipse' } },
    { data: { id: '9', parent: 'cell', faveColor: '#6FB1FC', faveShape: 'ellipse' } },
    { data: { id: '10', parent: 'cell', faveColor: '#6FB1FC', faveShape: 'ellipse' } },
    { data: { id: '11', parent: 'cell', faveColor: '#86B342', faveShape: 'rectangle' } },
    { data: { id: '12', parent: 'cell', faveColor: '#6FB1FC', faveShape: 'ellipse' } },
    { data: { id: '13', parent: 'cell', faveColor: '#86B342', faveShape: 'rectangle' } },
    { data: { id: '16', parent: 'cell', faveColor: '#6FB1FC', faveShape: 'ellipse' } },
    { data: { id: '17', parent: 'cell', faveColor: '#86B342', faveShape: 'rectangle' } },
    { data: { id: '18', parent: 'cell', faveColor: '#6FB1FC', faveShape: 'ellipse' } },
    { data: { id: '19', parent: 'cell', faveColor: '#86B342', faveShape: 'rectangle' } },
    { data: { id: '-10', faveColor: '#6FB1FC', faveShape: 'ellipse' } }
  ],

  edges: [
    { data: { id: '9-5', weight: 1, source: '9', target: '5', faveColor: 'black' } },
    { data: { id: '10-11', weight: 1, source: '10', target: '11', faveColor: 'black' } },
    { data: { id: '10-2', weight: 1, source: '10', target: '2', faveColor: 'black' } },
    { data: { id: '10-13', weight: 1, source: '10', target: '13', faveColor: 'black' } },
    { data: { id: '8-3', weight: 1, source: '8', target: '3', faveColor: 'black' } },
    { data: { id: '8-5', weight: 1, source: '8', target: '5', faveColor: 'black' } },
    { data: { id: '10-7', weight: 1, source: '10', target: '7', faveColor: 'black' } },
    { data: { id: '9-12', weight: 1, source: '9', target: '12', faveColor: 'black' } },
    { data: { id: '10-18', weight: 1, source: '10', target: '18', faveColor: 'black' } },
    { data: { id: '9-17', weight: 1, source: '9', target: '17', faveColor: 'black' } },
    { data: { id: '9-18', weight: 1, source: '9', target: '18', faveColor: 'black' } },
    { data: { id: '-10-10', weight: 1, source: '-10', target: '10', faveColor: 'black' } },
    { data: { id: '9-13', weight: 1, source: '9', target: '13', faveColor: 'black' } },
    { data: { id: '10-5', weight: 1, source: '10', target: '5', faveColor: 'black' } },
    { data: { id: '10-19', weight: 1, source: '10', target: '19', faveColor: 'black' } },
    { data: { id: '10-17', weight: 1, source: '10', target: '17', faveColor: 'black' } },
    { data: { id: '9-19', weight: 1, source: '9', target: '19', faveColor: 'black' } },
    { data: { id: '10-12', weight: 1, source: '10', target: '12', faveColor: 'black' } },
    { data: { id: '11-13', weight: 1, source: '11', target: '13', faveColor: 'black' } },
    { data: { id: '10-3', weight: 1, source: '10', target: '3', faveColor: 'black' } },
    { data: { id: '10-8', weight: 1, source: '10', target: '8', faveColor: 'black' } },
    { data: { id: '8-7', weight: 1, source: '8', target: '7', faveColor: 'black' } },
    { data: { id: '10-6', weight: 1, source: '10', target: '6', faveColor: 'black' } },
    { data: { id: '11-19', weight: 1, source: '11', target: '19', faveColor: 'black' } },
    { data: { id: '10-16', weight: 1, source: '10', target: '16', faveColor: 'black' } },
    { data: { id: '9-6', weight: 1, source: '9', target: '6', faveColor: 'black' } },
    { data: { id: '11-17', weight: 1, source: '11', target: '17', faveColor: 'black' } },
    { data: { id: '8-17', weight: 1, source: '8', target: '17', faveColor: 'black' } }
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
