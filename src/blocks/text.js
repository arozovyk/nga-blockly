/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Blockly from "blockly/core";

const operation = {
  type: "operation",
  message0: "operation %1 pour %2 sur_assiette %3 %4",
  args0: [
    {
      type: "input_value",
      name: "operation",
      check: "String",
    },
    {
      type: "input_statement",
      name: "pour",
      check: "context",
    },
    {
      type: "input_value",
      name: "sur",
      check: "pool",
    },
    {
      type: "input_statement",
      name: "corps",
      check: ["bonus", "quotepart", "avant", "apres"],
    },
  ],
  colour: 210,
  tooltip: "Define an operation",
  helpUrl: "",
};


const context = {
  "type": "context",
  "message0": "context_domain %1 %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "context_domain",
      "options": [
        [
          "Territoire",
          "Territoire"
        ],
        [
          "Support",
          "support"
        ],
        [
          "Secteur",
          "secteur"
        ]
      ]
    },
    {
      "type": "input_value",
      "name": "NAME",
      "check": "context_cases"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 20,
  "tooltip": "explain context domains",
  "helpUrl": ""
}

export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray([
  operation,
  context
]);
