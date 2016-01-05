// Copyright 2016 spmbt <spmbt0@gmail.com>
// Copyright 2016 kafeman <kafemanw@gmail.com>
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Бекенды отвечают за вывод снежинок на экран.
 */

var snowmachine = snowmachine || {};

/**
 * Бекенд, рисующий снежинки на HTML5-холсте.
 * @param {Object} options - Настройки.
 * @param {HTMLCanvasElement} options.canvas - Елемент <canvas>.
 * @constructor
 */
snowmachine.CanvasBackend = function(options) {
  /**
   * Елемент <canvas>.
   * @type {HTMLCanvasElement}
   * @protected
   */
  this.canvas = options.element;

  /**
   * Контекст для рисования.
   * @type {CanvasRenderingContext2D}
   * @protected
   */
  this.context = this.canvas.getContext('2d');
};

/**
 * Отображает снежинки на экране.
 * @param {snowmachine.Snowflake[]} snowflakes - Массив снежинок.
 */
snowmachine.CanvasBackend.prototype.render = function(snowflakes) {
  var context = this.context;

  context.clearRect(0, 0, this.getWidth(), this.getHeight());
  context.fillStyle = 'rgba(255, 255, 255, 0.5)';

  snowflakes.forEach(function(snowflake) {
    context.beginPath();
    context.arc(snowflake.x, snowflake.y, snowflake.radius, 0, 2 * Math.PI, false);
    context.fill();
  });
};

/**
 * Возвращает ширину холста.
 * @returns {Number} Ширина холста.
 */
snowmachine.CanvasBackend.prototype.getWidth = function() {
  return this.canvas.width;
};

/**
 * Возвращает высоту холста.
 * @returns {NUmber} Высота холста.
 */
snowmachine.CanvasBackend.prototype.getHeight = function() {
  return this.canvas.height;
};
