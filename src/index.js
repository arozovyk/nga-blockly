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
import { create_context_callback } from "./custom_category/custom_context";
import { createCustomBlock } from "./custom_blocs/utils";
import "./index.css";
import { create_entrees_callback } from "./custom_category/custom_entrees";
import { create_event_callback } from "./custom_category/custom_events";
import { LocalEventDecl } from "./custom_blocs/local_event_decl";

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
Blockly.fieldRegistry.register("local_event_decl_input", LocalEventDecl);

 
ws.registerToolboxCategoryCallback("CONTEXTS", function () {
  return create_context_callback(ws);
});
ws.registerToolboxCategoryCallback("ENTREES", function () {
  return create_entrees_callback(ws);
});
ws.registerToolboxCategoryCallback("EVENTS", function () {
  return create_event_callback(ws);
});
