/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { save, load } from "./serialization";

import * as Blockly from "blockly";
import { blocks } from "./blocks/blocks";
import { niagaraGenerator } from "./generators/niagara";
import { CustomCategory } from "./custom_category/custom_category_es6";
import { ToolboxLabel } from "./custom_category/toolbox_label_es6";
import { LocalPoolDeclInput, pools } from "./custom_blocs/local_pool_decl";
import { toolbox } from "./toolbox";
import { create_context_callback } from "./custom_category/custom_context";
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

/* Object.assign(niagaraGenerator.forBlock, forBlock);
 */
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

// Generator stuff
const codeDiv = document.getElementById("generatedCode").firstChild;
const outputDiv = document.getElementById("output");

const runCode = () => {
  const code = niagaraGenerator.workspaceToCode(ws);
  codeDiv.innerText = code;

  outputDiv.innerHTML = "";
};

/* load(ws);
 */ runCode();

ws.addChangeListener((e) => {
  // Don't run the code when the workspace finishes loading; we're
  // already running it once when the application starts.
  // Don't run the code during drags; we might have invalid state.
  if (
    e.isUiEvent ||
    e.type == Blockly.Events.FINISHED_LOADING ||
    ws.isDragging()
  ) {
    return;
  }
  runCode();
});

// Every time the workspace changes state, save the changes to storage.
ws.addChangeListener((e) => {
  // UI events are things like scrolling, zooming, etc.
  // No need to save after one of these.
  if (e.isUiEvent) return;
  /*   save(ws);
   */
});

document.getElementById("writeButton").addEventListener("click", () => {
  const data = niagaraGenerator.workspaceToCode(ws);
  const blob = new Blob([data], { type: "text/plain" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "myFile.txt";
  a.style.display = "none";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
});
