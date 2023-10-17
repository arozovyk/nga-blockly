/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Blockly from "blockly/core";

const operation = {
  type: "operation",
  message0: "operation %1 %2 pour %3 sur_assiette %4 %5 corps %6",
  args0: [
    {
      type: "field_input",
      name: "nom_operation",
      text: "nom_operation",
    },
    {
      type: "input_dummy",
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

const quotepart = {
  type: "quotepart",
  message0: "quotepart %1 %% vers %2",
  args0: [
    {
      type: "field_number",
      name: "NAME",
      value: 0,
    },
    {
      type: "input_value",
      name: "dest",
      check: ["pool", "actor", "custom_dest"],
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 65,
  tooltip: "",
  helpUrl: "",
};

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

const individu = {
  type: "individu",
  message0: "Individu %1 ",
  args0: [
    {
      type: "field_dropdown",
      name: "NAME",
      options: [
        ["les_productions_du_chameau", "les_productions_du_chameau"],
        ["distributeur_du_desert", "distributeur_du_desert"],
        ["vendeur_scorpion", "vendeur_scorpion"],
        ["dromadaire_film", "dromadaire_film"],
        ["barbie", "barbie"],
      ],
    },
  ],
  output: null,
  colour: 230,
  tooltip: "",
  helpUrl: "",
};
const individu_label = {
  type: "individu_label",
  message0: "Individu %1 label %2",
  args0: [
    {
      type: "field_dropdown",
      name: "NAME",
      options: [
        ["les_productions_du_chameau", "les_productions_du_chameau"],
        ["distributeur_du_desert", "distributeur_du_desert"],
        ["vendeur_scorpion", "vendeur_scorpion"],
        ["dromadaire_film", "dromadaire_film"],
        ["barbie", "barbie"],
      ],
    },
    {
      type: "input_value",
      name: "label",
    },
  ],
  output: null,
  colour: 230,
  tooltip: "",
  helpUrl: "",
};

const dest_pool = {
  type: "dest_pool",
  message0: "Assiette %1",
  args0: [
    {
      type: "field_dropdown",
      name: "NAME",
      options: [
        ["recette_brute_distributeur", "recette_brute_distributeur"],
        ["vente_tvsvod", "vente_tvsvod"],
        ["recette_brute_vendeur", "recette_brute_vendeur"],
      ],
    },
  ],
  output: null,
  colour: 230,
  tooltip: "",
  helpUrl: "",
};

const label = {
  type: "label",
  message0: "%1",
  args0: [
    {
      type: "field_input",
      name: "label",
      text: "label",
    },
  ],
  output: null,
  colour: 165,
  tooltip: "",
  helpUrl: "",
};

const quand = {
  type: "quand",
  message0: "quand %1",
  args0: [
    {
      type: "input_value",
      name: "NAME",
    },
  ],
  output: null,
  colour: 230,
  tooltip: "",
  helpUrl: "",
};

const quand_statement = {
  type: "quand_statement",
  message0: "quand %1 corps %2",
  args0: [
    {
      type: "input_value",
      name: "quand",
    },
    {
      type: "input_statement",
      name: "then",
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 60,
  tooltip: "",
  helpUrl: "",
};

const operation_par = {
  type: "operation_par",
  message0: "operation %1 %2 par %3 %4 corps %5",
  args0: [
    {
      type: "field_input",
      name: "nom_operation",
      text: "nom_operation",
    },
    {
      type: "input_dummy",
    },
    {
      type: "field_dropdown",
      name: "sur_assiette",
      options: [
        ["vente_tvsvod", "vente_tvsvod"],
        ["recette_brute_distributeur", "recette_brute_distributeur"],
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

const bonus = {
  type: "bonus",
  message0: "bonus %1 € vers %2",
  args0: [
    {
      type: "field_number",
      name: "NAME",
      value: 0,
    },
    {
      type: "input_value",
      name: "dest",
      check: ["actor", "custom_dest"],
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 195,
  tooltip: "",
  helpUrl: "",
};

const entree = {
  type: "entree",
  message0: "Entrée %1  ",
  args0: [
    {
      type: "field_dropdown",
      name: "NAME",
      options: [
        [
          "frais_edition_distributeur_du_desert",
          "frais_edition_distributeur_du_desert",
        ],
        ["frais_edition_vendeur_scorpion", "frais_edition_vendeur_scorpion"],
        ["entree_salle_France", "entree_salle_France"],
      ],
    },
  ],
  output: null,
  colour: 225,
  tooltip: "",
  helpUrl: "",
};

const entree_value = {
  type: "entree_value",
  message0: "Entrée %1 value %2",
  args0: [
    {
      type: "field_dropdown",
      name: "NAME",
      options: [
        [
          "frais_edition_distributeur_du_desert",
          "frais_edition_distributeur_du_desert",
        ],
        ["frais_edition_vendeur_scorpion", "frais_edition_vendeur_scorpion"],
        ["entree_salle_France", "entree_salle_France"],
      ],
    },
     
    {
      type: "input_value",
      name: "NAME",
    },
  ],
  output: null,
  colour: 225,
  tooltip: "",
  helpUrl: "",
};

const dest_pool_context = {
  type: "dest_pool_context",
  message0: "Assiette %1 %2 Context %3",
  args0: [
    {
      type: "field_dropdown",
      name: "NAME",
      options: [
        ["recette_brute_distributeur", "recette_brute_distributeur"],
        ["vente_tvsvod", "vente_tvsvod"],
        ["recette_brute_vendeur", "recette_brute_vendeur"],
      ],
    },
    {
      type: "input_dummy",
    },
    {
      type: "input_statement",
      name: "NAME",
    },
  ],
  output: null,
  colour: 230,
  tooltip: "",
  helpUrl: "",
};

const constante = {
  type: "constant",
  message0: "Constante %1",
  args0: [
    {
      type: "field_dropdown",
      name: "NAME",
      options: [
        [
          "minimum_garanti_distributeur_du_desert",
          "minimum_garanti_distributeur_du_desert",
        ],
        ["risque_prod", "risque_prod"],
      ],
    },
  ],
  output: null,
  colour: 225,
  tooltip: "",
  helpUrl: "",
};

const number = {
  type: "number",
  message0: "%1",
  args0: [
    {
      type: "field_input",
      name: "NAME",
      text: "0",
    },
  ],
  output: null,
  colour: 225,
  tooltip: "",
  helpUrl: "",
};

const monant = {
  type: "monetary",
  message0: "Montant %1 €",
  args0: [
    {
      type: "field_input",
      name: "NAME",
      text: "0",
    },
  ],
  output: null,
  colour: 225,
  tooltip: "",
  helpUrl: "",
};

const evenement_atteint = {
  type: "evenement_atteint",
  message0: "evenement %1 %2 atteint quand %3",
  args0: [
    {
      type: "field_input",
      name: "NAME",
      text: "nom",
    },
    {
      type: "input_dummy",
    },
    {
      type: "input_value",
      name: "cond",
    },
  ],
  inputsInline: false,
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
  quotepart,
  individu,
  individu_label,
  dest_pool,
  label,
  quand,
  quand_statement,
  operation_par,
  bonus,
  entree,
  entree_value,
  dest_pool_context,
  constante,
  monant,
  evenement_atteint,
  number,
]);
