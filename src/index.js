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

function createCustomBlock(blockType, message0) {
  Blockly.Blocks[blockType] = {
    init: function () {
      this.appendDummyInput().appendField(message0);
      this.setOutput(true, "Number");
      this.setColour(160);
      this.setTooltip("");
      this.setHelpUrl("");
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
  const dog = ws.getAllBlocks()[0] 
  dog.appendDummyInput().appendField("koko")
  console.log()
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
