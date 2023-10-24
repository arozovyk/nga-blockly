const territoire_domain = {
  type: "territoire_domain",
  message0: "Territoire_domain %1 cases %2",
  args0: [
    {
      type: "input_dummy",
    },
    {
      type: "input_statement",
      name: "TERRITORY_CASES",
      check: "territory_cases",
    },
  ],
  previousStatement: "context",
  nextStatement: "context",
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
      name: "SUPPORT_CASES",
      check: "support_cases",
    },
  ],
  previousStatement: "context",
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
      name: "SECTEUR_CASES",
      check: "secteur_cases",
    },
  ],
  previousStatement: "context",
  nextStatement: "context",
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
  previousStatement: "support_cases",
  nextStatement: "support_cases",
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
  previousStatement: "secteur_cases",
  nextStatement: "secteur_cases",
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
  previousStatement: null,
  nextStatement: null,
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
  previousStatement: null,
  nextStatement: null,
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
  previousStatement: null,
  nextStatement: null,
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
  previousStatement: null,
  nextStatement: null,
  colour: 20,
  tooltip: "explain context domains",
  helpUrl: "",
};
export const contexts = [
  territoire_domain,
  secteur_domain,
  support_domain,
  territory_cases,
  secteur_cases,
  support_cases,
  tout_territoire,
  tout_secteur,
  tout_support,
  tout_context,
];
