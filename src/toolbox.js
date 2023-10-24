export const toolbox = {
  kind: "categoryToolbox",
  contents: [
    // Operation
    {
      kind: "category",
      categorystyle: "loop_category",
      name: "Operation",
      contents: [
        {
          kind: "block",
          type: "operation",
          inputs: {
            POUR: {
              shadow: {
                type: "territoire_domain",
                inputs: {
                  TERRITORY_CASES: {
                    shadow: {
                      type: "territory_cases",
                    },
                  },
                },
              },
            },
            CORPS: {
              shadow: {
                type: "avant",
                next: { shadow: { type: "apres" } },
              },
            },
          },
          fields: {
            sur_assiette: "les_productions_du_chameau",
          },
          values: {
            operation: {
              block: {
                type: "text",
                fields: {
                  TEXT: "",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "operation_local_pool_decl",
          inputs: {
            POUR: {
              shadow: {
                type: "territoire_domain",
                inputs: {
                  TERRITORY_CASES: {
                    shadow: {
                      type: "territory_cases",
                    },
                  },
                },
              },
            },
            CORPS: {
              shadow: {
                type: "avant",
                next: { shadow: { type: "apres" } },
              },
            },
          },
        },

        {
          kind: "block",
          type: "operation_par",
          inputs: {
            CORPS: {
              shadow: {
                type: "retrocession",
              },
            },
          },
        },
        {
          kind: "block",
          type: "operation_par",
          inputs: {
            CORPS: {
              shadow: {
                type: "avant",
                next: { shadow: { type: "apres" } },
              },
            },
          },
        },
      ],
    },
    //Evenements
    {
      kind: "category",
      name: "Evenements",
      categorystyle: "math_category",
      contents: [
        {
          kind: "block",
          type: "evenement_atteint",
          inputs: {
            COND: {
              shadow: {
                type: "logic_compare",
              },
            },
          },
          values: {
            evenement_atteint: {
              block: {
                type: "quand",
              },
            },
          },
        },
        {
          kind: "block",
          type: "defaut_sur",
          inputs: {
            SUR: {
              shadow: {
                type: "dest_pool_context",
              },
            },
            VERS: {
              shadow: {
                type: "partenaire_label",
              },
            },
          },
        },
        {
          kind: "block",
          type: "deficit",
          inputs: {
            SUR: {
              shadow: {
                type: "dest_pool_context",
              },
            },
          },
        },
        {
          kind: "block",
          type: "avance",
          inputs: {
            SUR: {
              shadow: {
                type: "partenaire_label",
              },
            },
            MONTANT: {
              shadow: {
                type: "monetary",
              },
            },
          },
        },
      ],
    },
    // Contexts
    {
      kind: "category",
      name: "Contexts",
      categorystyle: "colour_category",
      contents: [
        {
          kind: "block",
          type: "territoire_domain",
          deletable: true,
          editable: true,
          inputs: {
            TERRITORY_CASES: {
              block: {
                type: "territory_cases",
              },
            },
          },
        },
        {
          kind: "block",
          type: "support_domain",
          deletable: true,
          editable: true,
          inputs: {
            SUPPORT_CASES: {
              block: {
                type: "support_cases",
              },
            },
          },
        },
        {
          kind: "block",
          type: "secteur_domain",
          deletable: true,
          editable: true,
          inputs: {
            SECTEUR_CASES: {
              block: {
                type: "secteur_cases",
              },
            },
          },
        },
        {
          kind: "block",
          type: "support_cases",
        },
        {
          kind: "block",
          type: "secteur_cases",
        },
        {
          kind: "block",
          type: "territory_cases",
          fields: {
            territory_cases: "France",
          },
        },
        {
          kind: "block",
          type: "tout_territoire",
        },
        {
          kind: "block",
          type: "tout_support",
        },
        {
          kind: "block",
          type: "tout_territoire",
        },
        {
          kind: "block",
          type: "tout_context",
        },
      ],
    },
    {
      kind: "sep",
    },
    // Corps
    {
      kind: "category",
      categorystyle: "variable_category",

      name: "Corps",
      contents: [
        {
          kind: "block",
          type: "avant",
          values: {
            event_name: {
              block: {
                type: "event",
                movable: true,
                fields: {
                  TEXT: "dssd",
                },
              },
            },
          },
          inputs: {
            avant_body: {
              shadow: {
                type: "quotepart",
                next: {
                  shadow: {
                    type: "quotepart",
                  },
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "apres",
          values: {
            event_name: {
              block: {
                type: "event",
                movable: true,
                fields: {
                  TEXT: "dssd",
                },
              },
            },
          },
          inputs: {
            apres_body: {
              shadow: {
                type: "quotepart",
                next: {
                  shadow: {
                    type: "quotepart",
                  },
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "quotepart",
          inputs: {
            DEST: {
              block: {
                type: "partenaire",
              },
            },
          },
        },
        {
          kind: "block",
          type: "quotepart",
          inputs: {
            DEST: {
              block: {
                type: "partenaire_label",
              },
            },
          },
        },
        {
          kind: "block",
          type: "quotepart",
          inputs: {
            DEST: {
              block: {
                type: "dest_pool",
              },
            },
          },
        },
        {
          kind: "block",
          type: "bonus",
          inputs: {
            DEST: {
              shadow: {
                type: "partenaire_label",
              },
            },
          },
        },
        {
          kind: "block",
          type: "event",
        },
        {
          kind: "block",
          type: "retrocession",
          inputs: {
            SUR: {
              shadow: {
                type: "dest_pool",
              },
            },
          },
        },
      ],
    },
    // Entrées
    {
      kind: "category",
      name: "Entrées",
      categorystyle: "text_category",

      contents: [
        {
          kind: "block",
          type: "partenaire",
        },
        {
          kind: "block",
          type: "partenaire_label",
          values: {
            label: {
              block: {
                type: "label",
                movable: false,
              },
            },
          },
        },
        {
          kind: "block",
          type: "dest_pool",
        },
        {
          kind: "block",
          type: "dest_pool_context",
          inputs: {
            CONTEXT: {
              shadow: {
                type: "territoire_domain",
                inputs: {
                  TERRITORY_CASES: {
                    shadow: {
                      type: "territory_cases",
                    },
                  },
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "pool_local_decl",
        },
        {
          kind: "block",
          type: "entree",
        },

        {
          kind: "block",
          type: "constant",
        },
        {
          kind: "block",
          type: "monetary",
        },
        {
          kind: "block",
          type: "number",
        },
      ],
    },
    {
      kind: "sep",
    },
    //Logic
    {
      kind: "category",
      name: "Logic",
      categorystyle: "logic_category",

      contents: [
        {
          kind: "block",
          type: "quand",
          inputs: {
            COND: {
              block: {
                type: "event",
              },
            },
          },
        },
        {
          kind: "block",
          type: "quand_statement",
          inputs: {
            COND: {
              block: {
                type: "event",
              },
            },
            CORPS: {
              shadow: {
                type: "bonus",
              },
            },
          },
        },
        {
          kind: "block",
          type: "logic_compare",
        },
        {
          kind: "block",
          type: "logic_operation",
        },
        {
          kind: "block",
          type: "logic_negate",
        },
      ],
    },
    //Misc
    {
      kind: "category",
      name: "Misc",
      categorystyle: "logic_category",

      contents: [
        {
          kind: "block",
          type: "math_arithmetic",
          fields: {
            OP: "ADD",
          },
          values: {
            A: {
              block: {
                type: "math_number",
                fields: {
                  NUM: 1,
                },
              },
            },
            B: {
              block: {
                type: "math_number",
                fields: {
                  NUM: 1,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "text",
          fields: {
            TEXT: "",
          },
        },
      ],
    },
  ],
};
