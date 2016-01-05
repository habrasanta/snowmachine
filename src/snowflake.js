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
 * @fileoverview Модель снежинки.
 */

var snowmachine = snowmachine || {};

/**
 * Снежинка.
 * @param {Number} x - Положение по горизонтали.
 * @param {Number} y - Положение по вертикали.
 * @param {Number} radius - Радиус.
 * @constructor
 */
snowmachine.Snowflake = function(x, y, radius) {
  /**
   * Положение по горизонтали.
   * @type {Number}
   */
  this.x = x;

  /**
   * Положение по вертикали.
   * @type {Number}
   */
  this.y = y;

  /**
   * Радиус.
   * @type {Number}
   */
  this.radius = radius;
};

/**
 * Рассчитывает вертикальную скорость.
 * @returns {Number} Вертикальная скорость.
 */
snowmachine.Snowflake.prototype.getVerticalSpeed = function() {
  return this.radius * 5;
};

/**
 * Рассчитывает горизонтальную скорость.
 * @returns {Number} Горизонтальная скорость.
 */
snowmachine.Snowflake.prototype.getHorizontalSpeed = function() {
  return this.radius * 5;
};
