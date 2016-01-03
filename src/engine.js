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
 * @param {snowmachine.Backend} backend.
 * @param {number} count - Количество снежинок.
 * @constructor
 */
snowmachine.KafemanEngine = function(backend, count) {
  /**
   * @type {snowmachine.Backend}
   * @protected
   */
  this.backend = backend;

  /**
   * Количество снежинок.
   * @type {number}
   * @protected
   */
  this.count = count || 150;
};

/**
 * @protected
 */
snowmachine.KafemanEngine.prototype.loop = function() {
  // TODO
};

/**
 * Запускает движок.
 */
snowmachine.KafemanEngine.prototype.start = function() {
  setInterval(this.loop.bind(this), 30);
};
