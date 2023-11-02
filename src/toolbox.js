export const toolbox = {
  kind: "categoryToolbox",
  contents: [
    // Operation
    {
      kind: "category",
      categorystyle: "loop_category",
      name: "Operation",
      contents: [
       /*  {
          kind: "block",
          type: "operation",

          fields: {
            SUR: "les_productions_du_chameau",
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
        }, */

        {
          kind: "block",
          type: "operation_local_pool_decl",
        },

        {
          kind: "block",
          type: "operation_par",
        },
        {
          kind: "block",
          type: "evenement_atteint",
          inputs: {
            COND: {
              block: {
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
        },
        {
          kind: "block",
          type: "deficit",
        },
        {
          kind: "block",
          type: "avance",
        },
      ],
    },

    // Contexts
    {
      kind: "category",
      name: "Evenements",
      categorystyle: "procedure_category",
      contents: [
        {
          kind: "block",
          type: "avant",
        },
        {
          kind: "block",
          type: "apres",
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
          },
        },
        {
          kind: "block",
          type: "quand_statement",
          inputs: {
            COND: {
              block: {
                type: "logic_compare",
              },
            },
          },
        },
        {
          kind: "block",
          type: "event",
        },
      ],
    },
    {
      kind: "category",
      name: "Contexts",
      custom: "CONTEXTS",
     },
    {
      kind: "sep",
    },
 
    {
      kind: "category",
      categorystyle: "variable_category",

      name: "Corps",
      contents: [
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
                type: "dest_pool_local_decl_context",
              },
            },
          },
        },

        {
          kind: "block",
          type: "bonus",
          /*   inputs: {
            DEST: {
              shadow: {
                type: "partenaire_label",
              },
            },
          }, */
        },

        {
          kind: "block",
          type: "retrocession",
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
     /*    {
          kind: "block",
          type: "dest_pool",
        },
        {
          kind: "block",
          type: "dest_pool_context",
        }, */
        {
          kind: "block",
          type: "dest_pool_local_decl",
        },
        {
          kind: "block",
          type: "dest_pool_local_decl_context",
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
