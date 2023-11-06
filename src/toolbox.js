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
      custom: "EVENTS",
    },
    {
      kind: "category",
      name: "Contexts",
      custom: "CONTEXTS",
      categorystyle: "colour_category",
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
      custom: "ENTREES",
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
