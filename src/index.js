/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Blockly from "blockly";
import { blocks } from "./blocks/text";
import { forBlock } from "./generators/javascript";
import { javascriptGenerator } from "blockly/javascript";
import { save, load } from "./serialization";
import "./index.css";

// Register the blocks and generator with Blockly
Blockly.common.defineBlocks(blocks);

Object.assign(javascriptGenerator.forBlock, forBlock);

// Set up UI elements and inject Blockly
const codeDiv = document.getElementById("generatedCode").firstChild;
const outputDiv = document.getElementById("output");
const blocklyDiv = document.getElementById("blocklyDiv");

const toolbox = `<xml xmlns="https://developers.google.com/blockly/xml" id="toolbox" style="display: none">
<block type="context">
  <field name="context_domain">Territoire</field>
</block>
<block type="operation" editable="false">
  <value name="operation">
    <block type="text" deletable="false" movable="false" >
      <field name="TEXT"></field>
    </block>
  </value>
</block>
</xml>`;

const ws = Blockly.inject(blocklyDiv, { toolbox });

// This function resets the code and output divs, shows the
// generated code from the workspace, and evals the code.
// In a real application, you probably shouldn't use `eval`.

// Load the initial state from storage and run the code.

// Every time the workspace changes state, save the changes to storage.
