/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        document.addEventListener('resume', this.onResume.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        //alert('sam');
        console.log('device ready');
        this.receivedEvent('deviceready');
        //this.scan();
    },

    onResume: function() {
        //alert('sam');
        console.log('resume');
        //this.scan();
        this.receivedEvent('deviceready');
    },
   
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        cordova.plugins.barcodeScanner.scan(
            function (result) {

                // alert("We got a barcode\n" +
                //     "Result: " + result.text + "\n" +
                //     "Format: " + result.format + "\n" +
                //     "Cancelled: " + result.cancelled);

                if (!result.cancelled)
                {
                    if (result.format =="QR_CODE") {
                        var ref = 'salesforce1://sObject/'+ result.text + '/view';
                                            
                        window.open(ref, '_system');
                    }
                }

            },
            function (error) {
                alert("Scanning failed: " + error);
            }
        );
    },

    scan: function() {
        cordova.plugins.barcodeScanner.scan(
            function (result) {

                alert("We got a barcode\n" +
                    "Result: " + result.text + "\n" +
                    "Format: " + result.format + "\n" +
                    "Cancelled: " + result.cancelled);

                if (!result.cancelled)
                {
                    if (result.format =="QR_CODE") {
                        var ref = 'salesforce1://sObject/'+ result.text + '/view';
                                            
                        window.open(ref, '_system');
                    }
                }

            },
            function (error) {
                alert("Scanning failed: " + error);
            }
        );
    }       
};

app.initialize();
