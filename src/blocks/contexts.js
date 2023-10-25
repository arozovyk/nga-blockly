const territory_cases = {
  type: "territory_cases",
  message0: "Territoire %1",
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
  previousStatement: "context",
  nextStatement: "context",
  colour: 260,
  tooltip: "",
  helpUrl: "",
};

const support_cases = {
  type: "support_cases",
  message0: "Support %1",
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
  previousStatement: "context",
  nextStatement: "context",
  colour: 300,
  tooltip: "",
  helpUrl: "",
};

const secteur_cases = {
  type: "secteur_cases",
  message0: "Secteur %1",
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
  previousStatement: "context",
  nextStatement: "context",
  colour: 65,
  tooltip: "",
  helpUrl: "",
};

const tout_territoire = {
  type: "tout_territoire",
  message0: "Tout Territoire %1",
  args0: [
    {
      type: "input_dummy",
    },
  ],
  previousStatement: "context",
  nextStatement: "context",
  colour: 20,
  tooltip: "explain context domains",
  helpUrl: "",
};
const tout_support = {
  type: "tout_support",
  message0: "Tout Support %1",
  args0: [
    {
      type: "input_dummy",
    },
  ],
  previousStatement: "context",
  nextStatement: "context",
  colour: 20,
  tooltip: "explain context domains",
  helpUrl: "",
};
const tout_secteur = {
  type: "tout_secteur",
  message0: "Tout Territoire %1",
  args0: [
    {
      type: "input_dummy",
    },
  ],
  previousStatement: "context",
  nextStatement: "context",
  colour: 20,
  tooltip: "explain context domains",
  helpUrl: "",
};
const tout_context = {
  type: "tout_context",
  message0: "Tout Context %1",
  args0: [
    {
      type: "input_dummy",
    },
  ],
  previousStatement: "context",
  nextStatement: "context",
  colour: 20,
  tooltip: "explain context domains",
  helpUrl: "",
};

export const contexts = [
  territory_cases,
  secteur_cases,
  support_cases,
  tout_territoire,
  tout_secteur,
  tout_support,
  tout_context,
];
