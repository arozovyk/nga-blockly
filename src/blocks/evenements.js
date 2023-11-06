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
      name: "SUR",
      check: ["partenaire", "partenaire_label"],
      align: "RIGHT",
    },
    {
      type: "input_value",
      name: "par",
      check: ["partenaire", "partenaire_label"],
      align: "RIGHT",
    },
    {
      type: "input_value",
      name: "MONTANT",
      check: "monetary",
      align: "RIGHT",
    },
  ],
  inputsInline: false,
  colour: 120,
  tooltip: "",
  helpUrl: "",
};

const evenement_atteint = {
  type: "evenement_atteint",
  message0: "evenement %1 %2 atteint quand %3",
  args0: [
    {
      type: "local_event_decl_input",
      name: "NAME",
      text: "nom_evenement",
    },
    {
      type: "input_dummy",
    },
    {
      type: "input_value",
      name: "COND",
      check: "Boolean",
      align: "RIGHT",

    },
  ],
  inputsInline: false,
  colour: 210,
  tooltip: "",
  helpUrl: "",
};

const defaut_sur = {
  type: "defaut_sur",
  message0: "défaut sur %1 vers %2",
  args0: [
    {
      type: "input_value",
      name: "SUR",
      check: [
        "dest_pool_local_decl",
        "dest_pool_local_decl_context",
        "dest_pool_context",
        "dest_pool",
      ],
      align: "RIGHT",
    },
    {
      type: "input_value",
      name: "VERS",
      check: [
        "partenaire",
        "partenaire_label",
        "dest_pool_local_decl",
        "dest_pool_context",
        "dest_pool",
        "dest_pool_local_decl_context",
      ],
      align: "RIGHT",
    },
  ],
  colour: 120,
  tooltip: "",
  helpUrl: "",
};

const deficit = {
  type: "deficit",
  message0: "déficit sur %1 par %2",
  args0: [
    {
      type: "input_value",
      name: "SUR",
      check: [
        "dest_pool_local_decl",
        "dest_pool_local_decl_context",
        "dest_pool_context",
        "dest_pool",
      ],
      align: "RIGHT",
    },
    {
      type: "input_value",
      name: "par",
      check: ["partenaire", "partenaire_label"],
      align: "RIGHT",
    },
  ],
  inputsInline: false,
  colour: 120,
  tooltip: "",
  helpUrl: "",
};

export const evenements = [avance, defaut_sur, evenement_atteint, deficit];
