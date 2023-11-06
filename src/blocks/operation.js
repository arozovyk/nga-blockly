const operation = {
  type: "operation",
  message0: "opération %1 %2 pour %3 sur assiette %4 %5 %6",
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
      options: [["defaut", "defaut"]],
    },
    {
      type: "input_dummy",
      name: "SUR",
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
  message0: "opération %1 %2 par %3 %4 %5",
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
      type: "input_value",
      name: "par",
      check: ["partenaire", "partenaire_label"],
      align: "RIGHT",
    },
    {
      type: "input_dummy",
    },
    {
      type: "input_statement",
      name: "CORPS",
      check: ["corps", "operation_par"],
    },
  ],
  colour: 120,
  inputsInline: false,
  tooltip: "Define an operation",
  helpUrl: "",
};

const operation_local_pool_decl = {
  type: "operation_local_pool_decl",
  message0: "opération %1 %2 pour %3 sur assiette %4 %5 %6",
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
      type: "local_pool_decl_input",
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
  colour: 120,
  tooltip: "Define an operation",
  helpUrl: "",
};

export const operations = [operation, operation_par, operation_local_pool_decl];
