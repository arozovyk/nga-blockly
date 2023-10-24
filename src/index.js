/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Blockly from "blockly";
import { blocks } from "./blocks/text";
import { forBlock } from "./generators/javascript";
import { javascriptGenerator } from "blockly/javascript";
import { CustomCategory } from "./custom_category/custom_category_es6";
import { ToolboxLabel } from "./custom_category/toolbox_label_es6";
import "./index.css";

Blockly.registry.register(
  Blockly.registry.Type.TOOLBOX_ITEM,
  Blockly.ToolboxCategory.registrationName,
  CustomCategory,
  true
);

Blockly.registry.register(
  Blockly.registry.Type.TOOLBOX_ITEM,
  "toolboxlabel",
  ToolboxLabel
);

// Register the blocks and generator with Blockly
Blockly.common.defineBlocks(blocks);

Object.assign(javascriptGenerator.forBlock, forBlock);

// Set up UI elements and inject Blockly
const blocklyDiv = document.getElementById("blocklyDiv");

const toolbox = {
  kind: "categoryToolbox",
  contents: [
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
        },
        {
          kind: "block",
          type: "evenement_atteint",
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
      ],
    },
    {
      kind: "category",
      name: "Contexts",
      categorystyle : "colour_category",
      contents: [
        {
          kind: "block",
          type: "territoire_domain",
          deletable: true,
          editable: true,
          statements: {
            territory_cases: {
              block: {
                type: "territory_cases",
                fields: {
                  territory_cases: "France",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "support_domain",
          deletable: true,
          editable: true,
          statements: {
            support_cases: {
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
          statements: {
            secteur_cases: {
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
      ],
    },
    {
      kind: "category",
      categorystyle : "variable_category",

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
          statements: {
            avant_body: {
              block: {
                type: "quotepart",
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
          statements: {
            apres_body: {
              block: {
                type: "quotepart",
              },
            },
          },
        },
        {
          kind: "block",
          type: "quotepart",
        },
        {
          kind: "block",
          type: "bonus",
        },
        {
          kind: "block",
          type: "event",
        },
        {
          kind: "block",
          type: "retrocession",
        },
      ],
    },
    {
      kind: "category",
      name: "Entrées",
      categorystyle : "text_category",

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
          type: "entree_value",
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
      kind: "category",
      name: "Logic",
      categorystyle : "logic_category",

      contents: [
        {
          kind: "block",
          type: "quand",
        },
        {
          kind: "block",
          type: "quand_statement",
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
    {
      kind: "category",
      name: "Misc",
      categorystyle : "logic_category",

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
    {
      kind: "sep",
    },
  ],
};

const ws = Blockly.inject(blocklyDiv, { toolbox });
