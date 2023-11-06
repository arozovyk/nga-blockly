const partenaire = {
  type: "partenaire",
  message0: "Partenaire %1 ",
  args0: [
    {
      type: "field_dropdown",
      name: "NAME",
      options: [["- à définir -", "- à définir -"]],
    },
  ],
  output: ["partenaire", "compare"],
  colour: 230,
  tooltip: "",
  helpUrl: "",
};
const partenaire_label = {
  type: "partenaire_label",
  message0: "Partenaire %1 %2 label %3",
  args0: [
    {
      type: "field_dropdown",
      name: "NAME",
      options: [["- à définir -", "- à définir -"]],
    },
    {
      type: "input_dummy",
    },
    {
      type: "field_input",
      name: "label",
      text: "label",
    },
  ],
  output: ["partenaire_label", "compare"],
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
  output: ["dest_pool", "compare"],
  colour: 345,
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
  output: "label",
  colour: 165,
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
  output: ["entree", "compare"],
  colour: 60,
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
      text: "1000",
    },
  ],
  output: ["number", "compare"],
  colour: 225,
  tooltip: "",
  helpUrl: "",
};

const monant = {
  type: "monetary",
  message0: "%1 €",
  args0: [
    {
      type: "field_input",
      name: "NAME",
      text: "1000",
    },
  ],
  output: ["monetary", "compare"],
  colour: 225,
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
  output: ["constant", "compare"],
  colour: 60,
  tooltip: "",
  helpUrl: "",
};

const event = {
  type: "event",
  message0: " évènement %1",
  args0: [
    {
      type: "field_dropdown",
      name: "EVENT_NAME",
      options: [["- à définir -", "- à définir -"]],
    },
  ],
  output: "event",
  colour: 210,
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
      options: [["- à définir -", "- à définir -"]],
    },
    {
      type: "input_dummy",
    },
    {
      type: "input_statement",
      name: "CONTEXT",
      check: "context",
    },
  ],
  output: ["dest_pool_context", "compare"],
  colour: 345,
  tooltip: "",
  helpUrl: "",
};

const dest_pool_local_decl = {
  type: "dest_pool_local_decl",
  message0: "Assiette %1",
  args0: [
    {
      type: "local_pool_decl_input",
      name: "NAME",
      text: "nom assiette",
    },
  ],
  output: ["dest_pool_local_decl", "compare"],
  colour: 345,
  tooltip: "",
  helpUrl: "",
};

const dest_pool_local_decl_context = {
  type: "dest_pool_local_decl_context",
  message0: "Assiette %1 %2 Context %3",
  args0: [
    {
      type: "local_pool_decl_input",
      name: "NAME",
      text: "nom assiette",
    },
    {
      type: "input_dummy",
    },
    {
      type: "input_statement",
      name: "CONTEXT",
      check: "context",
    },
  ],
  output: ["dest_pool_local_decl_context", "compare"],
  colour: 345,
  tooltip: "",
  helpUrl: "",
};

const variable = {
  type: "example_variable_typed",
  message0: "variable: %1",
  args0: [
    {
      type: "field_variable",
      name: "FIELDNAME",
      variable: "x",
      variableTypes: ["Number", "String"],
      defaultType: "Number",
    },
  ],
};
export const entrees = [
  variable,
  entree,
  partenaire,
  partenaire_label,
  dest_pool,
  dest_pool_context,
  dest_pool_local_decl,
  label,
  monant,
  number,
  constante,
  event,
  dest_pool_local_decl_context,
];
