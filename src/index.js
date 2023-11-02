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
import { LocalPoolDeclInput, pools } from "./custom_blocs/local_pool_decl";
import { toolbox } from "./toolbox";
import { create_context_callback } from "./dynamic_flyout";
import { createCustomBlock } from "./custom_blocs/utils";
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

Blockly.fieldRegistry.register("local_pool_decl_input", LocalPoolDeclInput);

createCustomBlock("dest_pool_local_decl", "or_message");

ws.registerToolboxCategoryCallback("CONTEXTS", function () {
  return create_context_callback(ws);
});
