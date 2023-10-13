/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Blockly from 'blockly';
import {blocks} from './blocks/text';
import {forBlock} from './generators/javascript';
import {javascriptGenerator} from 'blockly/javascript';
import {save, load} from './serialization';
 import './index.css';

// Register the blocks and generator with Blockly
Blockly.common.defineBlocks(blocks);
 

Object.assign(javascriptGenerator.forBlock, forBlock);

// Set up UI elements and inject Blockly
const codeDiv = document.getElementById('generatedCode').firstChild;
const outputDiv = document.getElementById('output');
const blocklyDiv = document.getElementById('blocklyDiv');

const toolbox = `<xml xmlns="https://developers.google.com/blockly/xml" id="toolbox" style="display: none">
<block type="text"></block>
<block type="lists_create_with"></block>
<block type="pool"></block>
<block type="domain_cases"></block>
<block type="domain" deletable="true" movable="true" editable="true">
<field name="domaine">Domain</field>
</block>
<block type="operaton" deletable="false" movable="false" editable="false">
  <value name="op_name">
    <block type="text">
      <field name="TEXT">comission salle vers distributeur</field>
    </block>
  </value>
  <value name="pour">
    <block type="lists_create_with">
      <mutation items="3"></mutation>
      <value name="ADD0">
        <block type="domain" deletable="true" movable="true" editable="true">
          <field name="domaine">Domain</field>
        </block>
      </value>
    </block>
  </value>
  <value name="sur">
    <block type="lists_create_with">
      <mutation items="3"></mutation>
    </block>
  </value>
</block>
</xml>`

 
const ws = Blockly.inject(blocklyDiv, { toolbox });

// This function resets the code and output divs, shows the
// generated code from the workspace, and evals the code.
// In a real application, you probably shouldn't use `eval`.
 

// Load the initial state from storage and run the code.
 
// Every time the workspace changes state, save the changes to storage.
 