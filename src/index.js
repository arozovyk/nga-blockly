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

<category name="Contexts">
  <block type="territoire_domain" deletable="false" editable="false">
    <statement name="territory_cases">
      <block type="territory_cases">
        <field name="territory_cases">France</field>
      </block>
    </statement>
  </block>
  <block type="support_domain" deletable="false" editable="false">
    <statement name="support_cases">
      <block type="support_cases">
      </block>
    </statement>
  </block>
  <block type="secteur_domain" deletable="false" editable="false">
    <statement name="secteur_cases">
      <block type="secteur_cases">
      </block>
    </statement>
  </block>
  <block type="support_cases"></block>
  <block type="secteur_cases"></block>
  <block type="territory_cases">
    <field name="territory_cases">France</field>
  </block>
</category>

<category name="Operation">
  <block type="operation">
    <field name="sur_assiette">les_productions_du_chameau</field>
    <value name="operation">
      <block type="text">
        <field name="TEXT"></field>
      </block>
    </value>
  </block>
</category>

<category name="Corps">

  <block type="avant">
    <value name="event_name">
      <block type="event" movable="false">
        <field name="TEXT">dssd</field>
      </block>
    </value>
    <statement name="avant_body">
      <block type="quotepart"></block>
    </statement>
  </block>

  <block type="apres">
    <value name="event_name">
      <block type="event" movable="false">
        <field name="TEXT">dssd</field>
      </block>
    </value>
    <statement name="apres_body">
      <block type="quotepart"></block>
    </statement>
  </block>

  <block type="quotepart"></block>

  <block type="text">
    <field name="TEXT"></field>
  </block>

  <block type="math_arithmetic">
    <field name="OP">ADD</field>
    <value name="A">
      <shadow type="math_number">
        <field name="NUM">1</field>
      </shadow>
    </value>
    <value name="B">
      <shadow type="math_number">
        <field name="NUM">1</field>
      </shadow>
    </value>
  </block>

</category>

 
<category name="Destination">
  <block type="event"></block>
</category>

</xml>`;
const toolbox2 = `<xml xmlns="https://developers.google.com/blockly/xml" id="toolbox" style="display: none">
 


<block type="operation" >
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
