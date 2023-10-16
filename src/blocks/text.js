/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Blockly from "blockly/core";

const operation = {
  type: "operation",
  message0: "operation %1 pour %2 sur_assiette %3 %4 corps %5",
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
      type: "field_dropdown",
      name: "sur_assiette",
      options: [
        ["les_productions_du_chameau", "les_productions_du_chameau"],
        ["distributeur_du_desert", "distributeur_du_desert"],
        ["vendeur_scorpion", "vendeur_scorpion"],
        ["recette_brute_vendeur", "recette_brute_vendeur"],
      ],
    },
    {
      type: "input_dummy",
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
  type: "context",
  message0: "context_domain %1 %2 cases %3",
  args0: [
    {
      type: "field_dropdown",
      name: "context_domain",
      options: [
        ["Territoire", "territoire"],
        ["Support", "support"],
        ["Secteur", "secteur"],
      ],
    },
    {
      type: "input_dummy",
    },
    {
      type: "input_statement",
      name: "NAME",
      check: ["territory_cases", "support_cases", "secteur_cases"],
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 20,
  tooltip: "explain context domains",
  helpUrl: "",
};

const territory_cases = {
  type: "territory_cases",
  message0: "territory_cases %1",
  args0: [
    {
      type: "field_dropdown",
      name: "territory_cases",
      options: [
        ["France", "France"],
        ["Etranger", "Etranger"],
        ["Belgique", "Belgique"],
      ],
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 260,
  tooltip: "",
  helpUrl: "",
};

const support_cases = {
  type: "support_cases",
  message0: "support_cases %1",
  args0: [
    {
      type: "field_dropdown",
      name: "support_cases",
      options: [
        ["TV", "TV"],
        ["VSOD", "VSOD"],
        ["Salles", "Salles"],
        ["Video", "Video"],
      ],
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 300,
  tooltip: "",
  helpUrl: "",
};

const secteur_cases = {
  type: "secteur_cases",
  message0: "secter_cases %1",
  args0: [
    {
      type: "field_dropdown",
      name: "secter_cases",
      options: [
        ["Commercial", "Commercial"],
        ["Non_Commercial", "Non_Commercial"],
      ],
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 65,
  tooltip: "",
  helpUrl: "",
};

const territoire_domain = {
  type: "territoire_domain",
  message0: "Territoire_domain %1 cases %2",
  args0: [
    {
      type: "input_dummy",
    },
    {
      type: "input_statement",
      name: "territory_cases",
      check: "territory_cases",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 20,
  tooltip: "explain context domains",
  helpUrl: "",
};
const support_domain = {
  type: "support_domain",
  message0: "Support_domain %1 cases %2",
  args0: [
    {
      type: "input_dummy",
    },
    {
      type: "input_statement",
      name: "support_cases",
      check: "support_cases",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 20,
  tooltip: "explain context domains",
  helpUrl: "",
};
const secteur_domain = {
  type: "secteur_domain",
  message0: "secteur_domain %1 cases %2",
  args0: [
    {
      type: "input_dummy",
    },
    {
      type: "input_statement",
      name: "secteur_cases",
      check: "secteur_cases",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 20,
  tooltip: "explain context domains",
  helpUrl: "",
};

const avant = {
  type: "avant",
  message0: "avant évènement %1 %2",
  args0: [
    {
      type: "input_value",
      name: "event_name",
    },
    {
      type: "input_statement",
      name: "avant_body",
      check: ["quotepart", "bonus"],
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 120,
  tooltip: "",
  helpUrl: "",
};

const quotepart  = {
  "type": "quotepart",
  "message0": "quotepart %1 %% vers %2",
  "args0": [
    {
      "type": "field_number",
      "name": "NAME",
      "value": 0
    },
    {
      "type": "input_value",
      "name": "dest",
      "check": [
        "pool",
        "actor",
        "custom_dest"
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 65,
  "tooltip": "",
  "helpUrl": ""
}


const apres = {
  type: "apres",
  message0: "apres évènement %1 %2",
  args0: [
    {
      type: "input_value",
      name: "event_name",
    },
    {
      type: "input_statement",
      name: "apres_body",
      check: ["quotepart", "bonus"],
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 330,
  tooltip: "",
  helpUrl: "",
};

const event = {
  type: "event",
  message0: "%1",
  args0: [
    {
      type: "field_dropdown",
      name: "NAMeventE",
      options: [
        ["seuil_100000_entrees", "seuil_100000_entrees"],
        [
          "recuperation_frais_edition_distributeur",
          "recuperation_frais_edition_distributeur",
        ],
        ["recuperation_minimum_garanti", "recuperation_minimum_garanti"],
      ],
    },
  ],
  output: null,
  colour: 210,
  tooltip: "",
  helpUrl: "",
};

export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray([
  operation,
  context,
  territoire_domain,
  support_domain,
  secteur_domain,
  territory_cases,
  support_cases,
  secteur_cases,
  avant,
  apres,
  event,
  quotepart,
]);
