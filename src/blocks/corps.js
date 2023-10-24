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
      check: ["quotepart", "bonus", "corps"],
    },
  ],
  previousStatement: "corps",
  nextStatement: "corps",
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
  previousStatement: "corps",
  nextStatement: "corps",
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
      check: ["quotepart", "bonus", "corps"],
    },
  ],
  previousStatement: "corps",
  nextStatement: "corps",
  colour: 330,
  tooltip: "",
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
  colour: 345,
  tooltip: "",
  helpUrl: "",
};

const pool_local_decl = {
  type: "pool_local_decl",
  message0: "Assiette %1",
  args0: [
    {
      type: "field_input",
      name: "NAME",
      text: "nom assiette",
    },
  ],
  output: null,
  colour: 345,
  tooltip: "",
  helpUrl: "",
};

const retrocession = {
  type: "retrocession",
  message0: "retrocession %1 %% %2 sur %3 vers %4",
  args0: [
    {
      type: "field_input",
      name: "retrocession_value",
      text: "0",
    },
    {
      type: "input_dummy",
    },
    {
      type: "input_value",
      name: "NAME",
    },
    {
      type: "field_dropdown",
      name: "NAME",
      options: [
        ["partenaire1", "partenaire1"],
        ["partenaire2", "partenaire2"],
        ["partenaire3", "partenaire3"],
      ],
    },
  ],
  inputsInline: false,
  previousStatement: null,
  nextStatement: null,
  colour: 230,
  tooltip: "",
  helpUrl: "",
};
export const corps = [
  avant,
  apres,
  quotepart,
  bonus,
  dest_pool_context,
  pool_local_decl,
  retrocession,
];
