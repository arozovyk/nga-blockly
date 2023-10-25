const operation = {
  type: "operation",
  message0: "opération %1 %2 pour %3 sur assiette %4 %5 corps %6",
  args0: [
    {
      type: "field_input",
      name: "NOM",
      text: "nom",
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
      name: "SUR",
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
      name: "CORPS",
      check: ["corps"],
    },
  ],
  colour: 123,
  tooltip: "Define an operation",
  helpUrl: "",
};

const operation_par = {
  type: "operation_par",
  message0: "opération %1 %2 par %3 %4 corps %5",
  args0: [
    {
      type: "field_input",
      name: "NOM",
      text: "nom",
    },
    {
      type: "input_dummy",
    },
    {
      type: "field_dropdown",
      name: "SUR",
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
      name: "CORPS",
      check: "corps",
    },
  ],
  colour: 210,
  tooltip: "Define an operation",
  helpUrl: "",
};

const operation_local_pool_decl = {
  type: "operation_local_pool_decl",
  message0: "opération %1 %2 pour %3 sur assiette %4 %5 corps %6",
  args0: [
    {
      type: "field_input",
      name: "NOM",
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
      type: "field_input",
      name: "NOM_DECL",
      text: "nom assiette",
    },
    {
      type: "input_dummy",
    },
    {
      type: "input_statement",
      name: "CORPS",
      check: "corps",
    },
  ],
  colour: 210,
  tooltip: "Define an operation",
  helpUrl: "",
};

export const operations = [operation, operation_par, operation_local_pool_decl];
