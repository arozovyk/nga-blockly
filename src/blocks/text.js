/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Blockly from 'blockly/core';

// Create a custom block called 'add_text' that adds
// text to the output div on the sample app.
// This is just an example and you should replace this with your
// own custom blocks.
const addText = {
  'type': 'add_text',
  'message0': 'Add text %1 with color %2',
  'args0': [
    {
      'type': 'input_value',
      'name': 'TEXT',
      'check': 'String',
    },
    {
      'type': 'input_value',
      'name': 'COLOR',
      'check': 'Colour',
    },
  ],
  'previousStatement': null,
  'nextStatement': null,
  'colour': 160,
  'tooltip': '',
  'helpUrl': '',
};




const nga_operation = {
  "type": "operaton",
  "message0": "opertation %1 pour %2 sur %3 body %4",
  "args0": [
    {
      "type": "input_value",
      "name": "op_name",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "pour",
      "check": "Array"
    },
    {
      "type": "input_value",
      "name": "sur",
      "check": "pool"
    },
    {
      "type": "input_value",
      "name": "NAME",
      "check": "Array"
    }
  ],
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}

 


const cg = 
 
{
  "type": "domain",
  "message0": "%1 %2",
  "args0": [
    {
      "type": "field_input",
      "name": "",
      "text": "domain"
    },
    {
      "type": "input_value",
      "name": "domain_name",
      "check": [
        "Array",
        "String"
      ]
    }
  ],
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}

const domain_cases= {
  "type": "domain_cases",
  "message0": "Domain_cases %1",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME",
      "check": "Array"
    }
  ],
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}



const pool = {
  "type": "pool",
  "message0": "Pool %1",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME",
      "check": "String"
    }
  ],
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}
// Create the block definitions for the JSON-only blocks.
// This does not register their definitions with Blockly.
// This file has no side effects!
export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray(
    [  nga_operation,cg ,domain_cases,pool]);
