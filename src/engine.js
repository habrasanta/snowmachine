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
 * @fileoverview Движки отвечают за расположение снежинок на экране.
 */

var snowmachine = snowmachine || {};

/**
 * Стандартное количество снежинок.
 * @constant {Number}
 * @default
 */
snowmachine.DEFAULT_COUNT = 150;

/**
 * Стандартный FPS.
 * @constant {Number}
 * @default
 */
snowmachine.DEFAULT_FPS = 25;

/**
 * Стандартный угол.
 * @constant {Number}
 * @default
 */
snowmachine.DEFAULT_ANGLE = 45;

/**
 * Абстрактный класс движка.
 * @param {Object} options - Настройки.
 * @param {snowmachine.Backend} options.backend - Бекенд для рисования.
 * @param {Number} options.count - Количество снежинок.
 * @param {Number} options.fps - Желаемый FPS.
 * @constructor
 */
snowmachine.Engine = function(options) {
  /**
   * Бекенд для рисования.
   * @type {snowmachine.Backend}
   * @protected
   */
  this.backend = options.backend;

  /**
   * Количество снежинок.
   * @type {Number}
   * @protected
   */
  this.count = options.count || snowmachine.DEFAULT_COUNT;

  /**
   * Максимальное количество кадров в секунду.
   * @type {Number}
   * @protected
   */
  this.fps = options.fps || snowmachine.DEFAULT_FPS;

  /**
   * Снежинки.
   * @type {snowmachine.Snowflake[]}
   * @protected
   */
  this.snowflakes = [];

  for (var i = 0; i < this.count; i++) {
    var x = Math.random() * this.backend.getWidth();
    var y = Math.random() * this.backend.getHeight();
    var radius = Math.random() * 5 + 1;
    this.snowflakes[i] = new snowmachine.Snowflake(x, y, radius);
  }

  /**
   * Время отрисовки последнего кадра.
   * @type {Date}
   * @protected
   */
  this.last = new Date();
};

/**
 * Вызывается каждый кадр. Считает время, прошедшее с предыдущих расчетов.
 * @protected
 */
snowmachine.Engine.prototype.loop = function() {
  var now = new Date();
  this.timedelta = (now - this.last) / 1000;
  this.last = now;
};

/**
 * Запускает анимацию снежинок.
 */
snowmachine.Engine.prototype.start = function() {
  setInterval(this.loop.bind(this), 1000 / this.fps);
};

/**
 * Простой движок, в котором снежинки летят по прямой.
 * @param {Object} options - Настройки.
 * @param {Number} options.angle - Угол падения.
 * @constructor
 */
snowmachine.SimpleEngine = function(options) {
  snowmachine.Engine.call(this, options);

  /**
   * Угол падения снежинок в градусах. При нуле падают вертикально вниз.
   * @type {Number}
   * @protected
   */
  this.angle = options.angle || snowmachine.DEFAULT_ANGLE;
};

snowmachine.SimpleEngine.prototype = Object.create(snowmachine.Engine.prototype);

/**
 * Считает положение снежинок и просит backend нарисовать их.
 * @protected
 */
snowmachine.SimpleEngine.prototype.loop = function() {
  snowmachine.Engine.prototype.loop.call(this);

  this.snowflakes.forEach(function(snowflake) {
    snowflake.x += this.timedelta * snowflake.getHorizontalSpeed() * this.angle / 45;
    snowflake.y += this.timedelta * snowflake.getVerticalSpeed() * (90 - this.angle) / 45;

    if (snowflake.x > this.backend.getWidth() + snowflake.radius) {
      snowflake.x = -snowflake.radius;
      snowflake.y = Math.random() * this.backend.getHeight();
    }

    if (snowflake.y > this.backend.getHeight() + snowflake.radius) {
      snowflake.x = Math.random() * this.backend.getWidth();
      snowflake.y = -snowflake.radius;
    }
  }, this);

  this.backend.render(this.snowflakes);
};
