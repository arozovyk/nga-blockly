const avance = {
  type: "avance",
  message0: "avance %1 %2 sur %3 par %4  %5",
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
      type: "field_dropdown",
      name: "PAR",
      options: [
        ["partner1", "partner1"],
        ["partner2", "partner2"],
        ["partner3", "partner3"],
      ],
    },
    {
      type: "input_value",
      name: "MONTANT",
      check: "monetary",
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
      text: "nom_evenement",
    },
    {
      type: "input_dummy",
    },
    {
      type: "input_value",
      name: "COND",
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
  message0: "défaut sur %1 vers %2",
  args0: [
    {
      type: "input_value",
      name: "SUR",
      check: ["dest_pool_local_decl", "dest_pool_context", "dest_pool"],
    },
    {
      type: "input_value",
      name: "VERS",
      check: ["partenaire", "partenaire_label"],
    },
  ],
  colour: 45,
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
      check: ["dest_pool_local_decl", "dest_pool_context", "dest_pool"],
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

export const evenements = [avance, defaut_sur, evenement_atteint, deficit];
