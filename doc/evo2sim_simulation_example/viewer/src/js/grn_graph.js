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

var grn = cytoscape({
container: document.getElementById('grn_graph'),

style: cytoscape.stylesheet()
  .selector('node').css({
    'content': 'data(name)',
    'text-valign': 'center',
    'text-outline-width': 2,
    'shape': 'data(faveShape)',
    'text-outline-color': 'data(faveColor)',
    'background-color': 'data(faveColor)',
    'color': '#fff',
    'width': 30
  })
  .selector('$node > node').css({
    'text-outline-color': 'data(faveColor)',
    'border-color': 'data(faveColor)',
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
  .selector('.highlighted').css({
    'background-color': '#61bffc',
    'line-color': '#61bffc',
    'target-arrow-color': '#61bffc',
    'transition-property': 'background-color, line-color, target-arrow-color',
    'transition-duration': '0.5s'
  })
  .selector('edge.negative_regulation').css({
    'line-style': 'dashed',
    'target-arrow-shape': 'diamond'
  }),

elements: {

nodes: [
    { data: { id: 'COE', name: 'Co-enzymes', faveColor: '#86B342', faveShape: 'rectangle' } },
    { data: { id: 'TF', name: 'Transcription factors', faveColor: '#F5A45D', faveShape: 'rectangle' } },
    { data: { id: 'E', name: 'Enzymes', faveColor: '#6FB1FC', faveShape: 'rectangle' } },
    { data: { id: '7', parent: 'COE', name: 'CoE(8)', faveColor: '#86B342', faveShape: 'triangle' } },
    { data: { id: '652', parent: 'TF', name: 'TF(652, A, I)', faveColor: '#F5A45D', faveShape: 'rectangle' } },
    { data: { id: '147', parent: 'TF', name: 'TF(147, A, I)', faveColor: '#F5A45D', faveShape: 'rectangle' } },
    { data: { id: '409', parent: 'TF', name: 'TF(409, A, I)', faveColor: '#F5A45D', faveShape: 'rectangle' } },
    { data: { id: '168', parent: 'E', name: 'E(10 -> 7)', faveColor: '#6FB1FC', faveShape: 'ellipse' } },
    { data: { id: '169', parent: 'E', name: 'E(10 -> 17)', faveColor: '#6FB1FC', faveShape: 'ellipse' } },
    { data: { id: '170', parent: 'E', name: 'E(10 -> 2)', faveColor: '#6FB1FC', faveShape: 'ellipse' } },
    { data: { id: '171', parent: 'E', name: 'E(10 -> 17)', faveColor: '#6FB1FC', faveShape: 'ellipse' } },
    { data: { id: '172', parent: 'E', name: 'E(9 -> 13)', faveColor: '#6FB1FC', faveShape: 'ellipse' } },
    { data: { id: '173', parent: 'E', name: 'E(10 -> 19)', faveColor: '#6FB1FC', faveShape: 'ellipse' } },
    { data: { id: '174', parent: 'TF', name: 'TF(174, A, I)', faveColor: '#F5A45D', faveShape: 'rectangle' } },
    { data: { id: '175', parent: 'TF', name: 'TF(175, A, I)', faveColor: '#F5A45D', faveShape: 'rectangle' } },
    { data: { id: '176', parent: 'E', name: 'E(-10 -> 10)', faveColor: '#6FB1FC', faveShape: 'ellipse' } },
    { data: { id: '177', parent: 'E', name: 'E(10 -> 3)', faveColor: '#6FB1FC', faveShape: 'ellipse' } },
    { data: { id: '178', parent: 'E', name: 'E(10 -> 3)', faveColor: '#6FB1FC', faveShape: 'ellipse' } },
    { data: { id: '179', parent: 'E', name: 'E(9 -> 17)', faveColor: '#6FB1FC', faveShape: 'ellipse' } },
    { data: { id: '180', parent: 'E', name: 'E(10 -> 2)', faveColor: '#6FB1FC', faveShape: 'ellipse' } },
    { data: { id: '181', parent: 'E', name: 'E(10 -> 13)', faveColor: '#6FB1FC', faveShape: 'ellipse' } },
    { data: { id: '182', parent: 'E', name: 'E(10 -> 3)', faveColor: '#6FB1FC', faveShape: 'ellipse' } },
    { data: { id: '183', parent: 'E', name: 'E(10 -> 11)', faveColor: '#6FB1FC', faveShape: 'ellipse' } },
    { data: { id: '324', parent: 'TF', name: 'TF(324, A, I)', faveColor: '#F5A45D', faveShape: 'rectangle' } },
    { data: { id: '612', parent: 'TF', name: 'TF(612, A, I)', faveColor: '#F5A45D', faveShape: 'rectangle' } },
    { data: { id: '229', parent: 'E', name: 'E(-10 -> 10)', faveColor: '#6FB1FC', faveShape: 'ellipse' } },
    { data: { id: '508', parent: 'TF', name: 'TF(508, A, I)', faveColor: '#F5A45D', faveShape: 'rectangle' } }
  ],

  edges: [
    { data: { id: '7-147', weight: 1, source: '7', target: '147', faveColor: '#86B342' }, classes: 'negative_regulation' },
    { data: { id: '147-168', weight: 1, source: '147', target: '168', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '147-169', weight: 1, source: '147', target: '169', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '147-170', weight: 1, source: '147', target: '170', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '147-171', weight: 1, source: '147', target: '171', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '147-172', weight: 1, source: '147', target: '172', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '147-173', weight: 1, source: '147', target: '173', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '147-174', weight: 1, source: '147', target: '174', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '147-175', weight: 1, source: '147', target: '175', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '147-176', weight: 1, source: '147', target: '176', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '147-177', weight: 1, source: '147', target: '177', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '147-178', weight: 1, source: '147', target: '178', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '147-179', weight: 1, source: '147', target: '179', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '147-180', weight: 1, source: '147', target: '180', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '147-181', weight: 1, source: '147', target: '181', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '147-182', weight: 1, source: '147', target: '182', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '147-183', weight: 1, source: '147', target: '183', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '7-324', weight: 1, source: '7', target: '324', faveColor: '#86B342' }, classes: 'negative_regulation' },
    { data: { id: '324-168', weight: 1, source: '324', target: '168', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '324-169', weight: 1, source: '324', target: '169', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '324-170', weight: 1, source: '324', target: '170', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '324-171', weight: 1, source: '324', target: '171', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '324-172', weight: 1, source: '324', target: '172', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '324-173', weight: 1, source: '324', target: '173', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '324-174', weight: 1, source: '324', target: '174', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '324-175', weight: 1, source: '324', target: '175', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '324-176', weight: 1, source: '324', target: '176', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '324-177', weight: 1, source: '324', target: '177', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '324-178', weight: 1, source: '324', target: '178', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '324-179', weight: 1, source: '324', target: '179', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '324-180', weight: 1, source: '324', target: '180', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '324-181', weight: 1, source: '324', target: '181', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '324-182', weight: 1, source: '324', target: '182', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '324-183', weight: 1, source: '324', target: '183', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '7-409', weight: 1, source: '7', target: '409', faveColor: '#86B342' }, classes: 'negative_regulation' },
    { data: { id: '409-168', weight: 1, source: '409', target: '168', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '409-169', weight: 1, source: '409', target: '169', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '409-170', weight: 1, source: '409', target: '170', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '409-171', weight: 1, source: '409', target: '171', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '409-172', weight: 1, source: '409', target: '172', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '409-173', weight: 1, source: '409', target: '173', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '409-174', weight: 1, source: '409', target: '174', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '409-175', weight: 1, source: '409', target: '175', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '409-176', weight: 1, source: '409', target: '176', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '409-177', weight: 1, source: '409', target: '177', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '409-178', weight: 1, source: '409', target: '178', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '409-179', weight: 1, source: '409', target: '179', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '409-180', weight: 1, source: '409', target: '180', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '409-181', weight: 1, source: '409', target: '181', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '409-182', weight: 1, source: '409', target: '182', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '409-183', weight: 1, source: '409', target: '183', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '7-508', weight: 1, source: '7', target: '508', faveColor: '#86B342' }, classes: 'negative_regulation' },
    { data: { id: '508-168', weight: 1, source: '508', target: '168', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '508-169', weight: 1, source: '508', target: '169', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '508-170', weight: 1, source: '508', target: '170', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '508-171', weight: 1, source: '508', target: '171', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '508-172', weight: 1, source: '508', target: '172', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '508-173', weight: 1, source: '508', target: '173', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '508-174', weight: 1, source: '508', target: '174', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '508-175', weight: 1, source: '508', target: '175', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '508-176', weight: 1, source: '508', target: '176', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '508-177', weight: 1, source: '508', target: '177', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '508-178', weight: 1, source: '508', target: '178', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '508-179', weight: 1, source: '508', target: '179', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '508-180', weight: 1, source: '508', target: '180', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '508-181', weight: 1, source: '508', target: '181', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '508-182', weight: 1, source: '508', target: '182', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '508-183', weight: 1, source: '508', target: '183', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '7-612', weight: 1, source: '7', target: '612', faveColor: '#86B342' }, classes: 'negative_regulation' },
    { data: { id: '612-168', weight: 1, source: '612', target: '168', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '612-169', weight: 1, source: '612', target: '169', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '612-170', weight: 1, source: '612', target: '170', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '612-171', weight: 1, source: '612', target: '171', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '612-172', weight: 1, source: '612', target: '172', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '612-173', weight: 1, source: '612', target: '173', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '612-174', weight: 1, source: '612', target: '174', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '612-175', weight: 1, source: '612', target: '175', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '612-176', weight: 1, source: '612', target: '176', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '612-177', weight: 1, source: '612', target: '177', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '612-178', weight: 1, source: '612', target: '178', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '612-179', weight: 1, source: '612', target: '179', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '612-180', weight: 1, source: '612', target: '180', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '612-181', weight: 1, source: '612', target: '181', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '612-182', weight: 1, source: '612', target: '182', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '612-183', weight: 1, source: '612', target: '183', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '7-652', weight: 1, source: '7', target: '652', faveColor: '#86B342' }, classes: 'negative_regulation' },
    { data: { id: '652-168', weight: 1, source: '652', target: '168', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '652-169', weight: 1, source: '652', target: '169', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '652-170', weight: 1, source: '652', target: '170', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '652-171', weight: 1, source: '652', target: '171', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '652-172', weight: 1, source: '652', target: '172', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '652-173', weight: 1, source: '652', target: '173', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '652-174', weight: 1, source: '652', target: '174', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '652-175', weight: 1, source: '652', target: '175', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '652-176', weight: 1, source: '652', target: '176', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '652-177', weight: 1, source: '652', target: '177', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '652-178', weight: 1, source: '652', target: '178', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '652-179', weight: 1, source: '652', target: '179', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '652-180', weight: 1, source: '652', target: '180', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '652-181', weight: 1, source: '652', target: '181', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '652-182', weight: 1, source: '652', target: '182', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '652-183', weight: 1, source: '652', target: '183', faveColor: '#F5A45D' }, classes: 'negative_regulation' },
    { data: { id: '147-229', weight: 1, source: '147', target: '229', faveColor: '#F5A45D' }, classes: 'positive_regulation' },
    { data: { id: '324-229', weight: 1, source: '324', target: '229', faveColor: '#F5A45D' }, classes: 'positive_regulation' },
    { data: { id: '409-229', weight: 1, source: '409', target: '229', faveColor: '#F5A45D' }, classes: 'positive_regulation' },
    { data: { id: '508-229', weight: 1, source: '508', target: '229', faveColor: '#F5A45D' }, classes: 'positive_regulation' },
    { data: { id: '612-229', weight: 1, source: '612', target: '229', faveColor: '#F5A45D' }, classes: 'positive_regulation' },
    { data: { id: '652-229', weight: 1, source: '652', target: '229', faveColor: '#F5A45D' }, classes: 'positive_regulation' }
  ]
  },

  layout: {
    name: 'breadthfirst',
    animate: false,
    circle: true,
    spacingFactor: 4,
    directed: true,
    padding: 10
  }
});

}); // on dom ready
