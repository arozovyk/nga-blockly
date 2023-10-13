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
      check: ["territoire_cases", "support_cases", "secteur_cases"],
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
  message0: "territoire_cases %1",
  args0: [
    {
      type: "field_dropdown",
      name: "territoire_cases",
      options: [
        ["France", "France"],
        ["Etranger", "Etranger"],
        ["Belgique", "Belgique"],
      ],
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 230,
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
  colour: 230,
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
  colour: 230,
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
      name: "NAME",
      check: "territoire_cases",
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
      name: "NAME",
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
      name: "NAME",
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
  message0: "avant évènement %1",
  args0: [
    {
      type: "input_value",
      name: "avant event",
      check: "event",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 230,
  tooltip: "",
  helpUrl: "",
};
const apres = {
  type: "apres",
  message0: "apres évènement %1",
  args0: [
    {
      type: "input_value",
      name: "apres event",
      check: "event",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 230,
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
  colour: 230,
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
]);
