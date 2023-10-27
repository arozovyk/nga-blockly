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
import { LocalPoolDeclInput } from "./custom_blocs/local_pool_decl_input";
import "./index.css";

Blockly.registry.register(
  Blockly.registry.Type.TOOLBOX_ITEM,
  Blockly.ToolboxCategory.registrationName,
  CustomCategory,
  true
);
var colourList = ["red", "green"];

var coloursFlyoutCallback = function (workspace) {
  var blockList = [];
  for (var i = 0; i < colourList.length; i++) {
    blockList.push({
      kind: "block",
      type: "colour_picker",
      fields: {
        COLOUR: colourList[i],
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

Object.assign(javascriptGenerator.forBlock, forBlock);

// Set up UI elements and inject Blockly
const blocklyDiv = document.getElementById("blocklyDiv");

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

ws.registerToolboxCategoryCallback("COLOUR_PALETTE", coloursFlyoutCallback);

Blockly.fieldRegistry.register("local_pool_decl_input", LocalPoolDeclInput);
