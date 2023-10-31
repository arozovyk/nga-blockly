/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Blockly from "blockly";
import { blocks } from "./blocks/blocks";
import { forBlock } from "./generators/javascript";
import { javascriptGenerator } from "blockly/javascript";
import { CustomCategory } from "./custom_category/custom_category_es6";
import { ToolboxLabel } from "./custom_category/toolbox_label_es6";
import { toolbox } from "./toolbox";
import "./index.css";

Blockly.registry.register(
  Blockly.registry.Type.TOOLBOX_ITEM,
  Blockly.ToolboxCategory.registrationName,
  CustomCategory,
  true
);
var colourList = ["red", "green"];

function createCustomBlock(blockType, domain, cases) {
  Blockly.Blocks[blockType] = {
    init: function () {
      this.jsonInit({
        type: blockType,
        message0: `Tout ${domain}  %1`,
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
      });
    },
  };
}
function createAllDomainBlock(blockType, domain) {
  Blockly.Blocks[blockType] = {
    init: function () {
      this.jsonInit({
        type: blockType,
        message0: `Tout ${domain}  %1`,
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
      });
    },
  };
}
function createDomainCasesBlock(type, domain, cases) {
  const options = cases.map((case_, i) => {
    return [case_, `case${i}`];
  });
  console.log(options);
  Blockly.Blocks[type] = {
    init: function () {
      this.jsonInit({
        type,
        message0: `${domain} %1`,
        args0: [
          {
            type: "field_dropdown",
            name: "CASES",
            options,
          },
        ],
        previousStatement: "context",
        nextStatement: "context",
        colour: 260,
        tooltip: "",
        helpUrl: "",
      });
    },
  };
}

var coloursFlyoutCallback = function (workspace) {
  var blockList = [];

  for (var i = 0; i < colourList.length; i++) {
    blockList.push({
      kind: "block",
      type: "dest_pool_context",
      fields: {
        NAME: "vente_tvsvod",
      },
    });
  }
  return blockList;
};

Blockly.registry.register(
  Blockly.registry.Type.TOOLBOX_ITEM,
  "toolboxlabel",
  ToolboxLabel
);
// Register the blocks and generator with Blockly
Blockly.common.defineBlocks(blocks);

Blockly.common.red;
Object.assign(javascriptGenerator.forBlock, forBlock);

// Set up UI elements and inject Blockly
const blocklyDiv = document.getElementById("blocklyDiv");
let pools = [];

const ws = Blockly.inject(blocklyDiv, {
  toolbox,
  move: {
    scrollbars: {
      horizontal: true,
      vertical: true,
    },
    drag: true,
    wheel: true,
  },
  grid: { spacing: 20, length: 3, colour: "#ccc", snap: true },
});
function redefineBlocks() {
  // Clear the existing workspace
  /*   ws.clear();
   */
  // Redefine the blocks with new parameters

  //TODO modify blocks in the workspace
  const dog = ws.getAllBlocks()[0];
  dog.appendDummyInput().appendField("koko");
  console.log();
  createCustomBlock("dest_pool_local_decl", "New Message");
  createCustomBlock("another_block", "Different Message");
  // Rebuild the workspace with the updated block definitions

  ws.updateToolbox(toolbox);
  ws.resize();
}

export class LocalPoolDeclInput extends Blockly.FieldTextInput {
  onFinishEditing_(e) {
    ws.getAllBlocks().forEach(function (block) {
      /* if (block.type === 'your_block_type') {
        // Check if the block matches the type you want to redefine
        // Modify the block's properties as needed
        block.setFieldValue('New value', 'FIELD_NAME');
        block.setOutput(true, 'new_output_type');
      } */
      console.log(block);
    });
    console.log(ws.toolbox_);

    const newText = this.htmlInput_.value;
    console.log(`User finished editing: ${newText}`);
    redefineBlocks();
    pools.push(e);
    super.onFinishEditing_(e);
  }
  onHtmlInputKeyDown_(e) {
    super.onHtmlInputKeyDown_(e);
  }
}

var blockInWorkspace = ws.toolbox_; // Change to locate your block
console.log(blockInWorkspace);
ws.registerToolboxCategoryCallback("COLOUR_PALETTE", coloursFlyoutCallback);

Blockly.fieldRegistry.register("local_pool_decl_input", LocalPoolDeclInput);

createCustomBlock("dest_pool_local_decl", "or_message");

function createContext(button) {
  const ws = button.getTargetWorkspace();
  let domain;
  let cases = [];
  Blockly.dialog.prompt("Donnez un nom de domaine", "x", function (text) {
    domain = text;
  });
  Blockly.dialog.prompt(
    "Listez les cas (séparés par une virgule)",
    "cas1,cas2",
    function (text) {
      cases = text.split(",");
    }
  );
  console.log(domain, cases);
  console.log(button);
  const blockTypeDomain = "tout_" + domain.toLowerCase();
  const blockTypeCases = `${domain.toLowerCase()}_cases`;

  createAllDomainBlock(blockTypeDomain, domain);
  createDomainCasesBlock(blockTypeCases, domain, cases);
  button["kind"] = "button";
  let cat = ws.toolbox_.contents_[1];
  cat.updateFlyoutContents([
    button,
    {
      kind: "block",
      type: blockTypeDomain,
    },
    {
      kind: "block",
      type: blockTypeCases,
    },
  ]);
  console.log(ws);

  ws.refreshToolboxSelection();
}

function create_context_callback() {
  const button = document.createElement("button");
  button.setAttribute("text", "Créer un contexte...");
  button.setAttribute("kind", "button");

  button.setAttribute("callbackKey", "CREATE_CONTEXT");
  ws.registerButtonCallback("CREATE_CONTEXT", createContext);
  var blockList = [button];

 
  return blockList;
}
ws.registerToolboxCategoryCallback("CONTEXTS", create_context_callback);
