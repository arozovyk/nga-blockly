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
import { create_context_callback } from "./dynamic_flyout";
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
        message0: `Custom test ${domain}  %1`,
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

  //TODO modify blocks in the workspace DONE : dev
  const dog = ws.getAllBlocks();
  const assiette_block = ws.getAllBlocks()[1];
  const generator = assiette_block.inputList[0].fieldRow[1].menuGenerator_;
  generator.push(["ja","ja"])
  console.log(dog);
  console.log(generator);
  /*   dog.appendDummyInput().appendField("koko");
   */
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

ws.registerToolboxCategoryCallback("CONTEXTS", function () {
  return create_context_callback(ws);
});
