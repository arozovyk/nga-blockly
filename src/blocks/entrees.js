const partenaire = {
  type: "partenaire",
  message0: "Partenaire %1 ",
  args0: [
    {
      type: "field_dropdown",
      name: "NAME",
      options: [
        ["les_productions_du_chameau", "les_productions_du_chameau"],
        ["distributeur_du_desert", "distributeur_du_desert"],
        ["vendeur_scorpion", "vendeur_scorpion"],
        ["dromadaire_film", "dromadaire_film"],
        ["barbie", "barbie"],
      ],
    },
  ],
  output: null,
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
      type: "field_input",
      name: "label",
      text: "label",
    },
  ],
  output: null,
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
  output: null,
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
  output: null,
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
  output: null,
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
  output: null,
  colour: 225,
  tooltip: "",
  helpUrl: "",
};

const monant = {
  type: "monetary",
  message0: "Montant %1 €",
  args0: [
    {
      type: "field_input",
      name: "NAME",
      text: "1000",
    },
  ],
  output: null,
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
  output: null,
  colour: 60,
  tooltip: "",
  helpUrl: "",
};

const event = {
  type: "event",
  message0: "%1",
  args0: [
    {
      type: "field_dropdown",
      name: "EVENT_NAME",
      options: [
        ["seuil_100000_entrees", "seuil_100000_entrees"],
        [
          "recuperation_frais_edition_distributeur",
          "recuperation_frais_edition_distributeur",
        ],
        ["recuperation_minimum_garanti", "recuperation_minimum_garanti"],
      ],
    },
  ],
  output: null,
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
      name: "CONTEXT",
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
export const entrees = [
  entree,
  partenaire,
  partenaire_label,
  dest_pool,
  dest_pool_context,
  pool_local_decl,
  label,
  monant,
  number,
  constante,
  event,
];
