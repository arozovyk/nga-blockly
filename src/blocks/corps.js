const avant = {
  type: "avant",
  message0: "avant %1 %2",
  args0: [
    {
      type: "input_value",
      name: "EVENT",
      check: "event",
    },
    {
      type: "input_statement",
      name: "CORPS",
      check: ["quotepart", "bonus", "corps"],
    },
  ],
  previousStatement: "corps",
  nextStatement: "corps",
  colour: 120,
  tooltip: "",
  helpUrl: "",
};

const apres = {
  type: "apres",
  message0: "apres %1 %2",
  args0: [
    {
      type: "input_value",
      name: "EVENT",
      check: "event",
    },
    {
      type: "input_statement",
      name: "CORPS",
      check: ["quotepart", "bonus", "corps"],
    },
  ],
  previousStatement: "corps",
  nextStatement: "corps",
  colour: 330,
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
      value: 50,
    },
    {
      type: "input_value",
      name: "DEST",
      check: [
        "partenaire",
        "partenaire_label",
        "dest_pool_local_decl",
        "dest_pool_context",
        "dest_pool",
        "dest_pool_local_decl_context",
      ],
    },
  ],
  previousStatement: "corps",
  nextStatement: "corps",
  colour: 65,
  tooltip: "",
  helpUrl: "",
};

const bonus = {
  type: "bonus",
  message0: "bonus %1 € vers %2",
  args0: [
    {
      type: "field_number",
      name: "BONUS_VALUE",
      value: 1000,
    },
    {
      type: "input_value",
      name: "DEST",
      check: [
        "partenaire",
        "partenaire_label",
        "dest_pool_local_decl",
        "dest_pool_context",
        "dest_pool",
        "dest_pool_local_decl_context",
      ],
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 195,
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
      text: "1.75",
    },
    {
      type: "input_dummy",
    },
    {
      type: "input_value",
      name: "SUR",
      check: [
        "partenaire",
        "partenaire_label",
        "dest_pool_local_decl",
        "dest_pool_context",
        "dest_pool",
        "dest_pool_local_decl_context",
      ],
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
export const corps = [avant, apres, quotepart, bonus, retrocession];
