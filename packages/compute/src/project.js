/*!
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*!
 * @module compute/project
 */

'use strict';

var common = require('@google-cloud/common');
var util = require('util');

/*! Developer Documentation
 *
 * @param {module:compute} compute - Compute object this project belongs to.
 */
/**
 * A Project object allows you to interact with your Google Compute Engine
 * project.
 *
 * @resource [Projects Overview]{@link https://cloud.google.com/compute/docs/projects}
 * @resource [Projects Resource]{@link https://cloud.google.com/compute/docs/reference/v1/projects}
 *
 * @constructor
 * @alias module:compute/project
 *
 * @example
 * var project = gce.project();
 */
function Project(compute) {
  this.id = compute.projectId;

  var methods = {
    /**
     * Get a Project object.
     *
     * @example
     * project.get(function(err, project, apiResponse) {
     *   // `project` is a Project object.
     * });
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * project.get().then(function(data) {
     *   var project = data[0];
     *   var apiResponse = data[1];
     * });
     */
    get: true,

    /**
     * Get the project's metadata.
     *
     * @resource [Projects: get API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/projects/get}
     * @resource [Projects Resource]{@link https://cloud.google.com/compute/docs/reference/v1/projects}
     *
     * @param {function=} callback - The callback function.
     * @param {?error} callback.err - An error returned while making this
     *     request.
     * @param {object} callback.metadata - The machine type's metadata.
     * @param {object} callback.apiResponse - The full API response.
     *
     * @example
     * project.getMetadata(function(err, metadata, apiResponse) {});
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * project.getMetadata().then(function(data) {
     *   var metadata = data[0];
     *   var apiResponse = data[1];
     * });
     */
    getMetadata: true
  };

  common.ServiceObject.call(this, {
    parent: compute,
    baseUrl: '',
    id: '',
    methods: methods
  });
}

util.inherits(Project, common.ServiceObject);

/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */
common.util.promisifyAll(Project);

module.exports = Project;
