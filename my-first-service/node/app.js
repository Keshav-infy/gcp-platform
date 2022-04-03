// Copyright 2017 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

// [START gae_flex_quickstart]
const express = require('express');
var request = require('request');
var ip = require("ip");
var getIP = require('ipware')().get_ip;
const app = express();
    
    
app.get('/', (req, res) => {
  var ipInfo = getIP(req);
  let ipe = req.connection.remoteAddress;
  let ford = req.header('x-forwarded-for');
  var texto = `Hello, world! GAE Service Call mi ip es: ${ip.address()} <br> la direccion remota es: ${ipe} <br> Las reenviadas son ${ford} <br> .......`
  // ¿How this console log can be observed, do we have to enable an api or similar?
  console.log('Esto ha funcionado');
  res.status(200).send(texto).end();
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
// [END gae_flex_quickstart]

module.exports = app;

