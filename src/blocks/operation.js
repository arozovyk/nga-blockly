const operation = {
  type: "operation",
  message0: "operation %1 %2 pour %3 sur assiette %4 %5 corps %6",
  args0: [
    {
      type: "field_input",
      name: "NOM_OPERATION",
      text: "nom_operation",
    },
    {
      type: "input_dummy",
    },
    {
      type: "input_statement",
      name: "POUR",
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
      check: "corps",
    },
  ],
  colour: 123,
  tooltip: "Define an operation",
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
        ["les_productions_du_chameau", "les_productions_du_chameau"],
        ["distributeur_du_desert", "distributeur_du_desert"],
        ["vendeur_scorpion", "vendeur_scorpion"],
        ["dromadaire_film", "dromadaire_film"],
        ["barbie", "barbie"],
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

const operation_local_pool_decl = {
  type: "operation_local_pool_decl",
  message0: "operation %1 %2 pour %3 sur assiette %4 %5 corps %6",
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
      type: "field_input",
      name: "NAME",
      text: "nom_assiette",
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

const avance = {
  type: "avance",
  message0: "avance %1 %2 sur %3 par %4 montant %5",
  args0: [
    {
      type: "field_input",
      name: "nom_avance",
      text: "nom_avance",
    },
    {
      type: "input_dummy",
    },
    {
      type: "input_value",
      name: "sur",
      check: "partner",
      align: "RIGHT",
    },
    {
      type: "field_dropdown",
      name: "NAME",
      options: [
        ["partner1", "partner1"],
        ["partner2", "partner2"],
        ["partner3", "partner3"],
      ],
    },
    {
      type: "input_value",
      name: "NAME",
    },
  ],
  inputsInline: false,
  colour: 230,
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
      check: "Boolean",
    },
  ],
  inputsInline: false,
  colour: 230,
  tooltip: "",
  helpUrl: "",
};

const defaut_sur = {
  type: "defaut_sur",
  message0: "Défaut sur %1 vers %2",
  args0: [
    {
      type: "input_value",
      name: "assiette",
    },
    {
      type: "input_value",
      name: "vers",
    },
  ],
  colour: 45,
  tooltip: "",
  helpUrl: "",
};

const deficit = {
  type: "deficit",
  message0: "Deficit sur %1 par %2",
  args0: [
    {
      type: "input_value",
      name: "deficit",
    },
    {
      type: "field_dropdown",
      name: "deficit_par",
      options: [
        ["versus", "versus"],
        ["obrother", "obrother"],
        ["eurimages", "eurimages"],
      ],
    },
  ],
  inputsInline: false,
  colour: 230,
  tooltip: "",
  helpUrl: "",
};

export const operations = [
  operation,
  operation_par,
  operation_local_pool_decl,
  avance,
  defaut_sur,
  evenement_atteint,
  deficit,
];
