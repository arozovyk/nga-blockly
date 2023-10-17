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

const toolbox = ` <xml xmlns="https://developers.google.com/blockly/xml" id="toolbox" style="display: none">


<category name="Operation">
  <block type="operation">
    <field name="sur_assiette">les_productions_du_chameau</field>
    <value name="operation">
      <block type="text">
        <field name="TEXT"></field>
      </block>
    </value>
  </block>
  <block type="evenement_atteint">
    
    <value name="evenement_atteint">
      <block type="quand">
        
      </block>
    </value>
  </block>

  <block type="operation_par"> </block>

</category>
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
  <block type="bonus"></block>


</category>

<category name="Entrées ">
  <block type="individu"></block>
  <block type="individu_label">
    <value name="label">
      <block type="label" movable= false></block>
    </value>
  </block>


  <block type="dest_pool"></block>
  <block type="dest_pool_context"></block>
  <block type="entree"></block>
  <block type="entree_value"></block>
  <block type="constant"></block>
  <block type="monetary"></block>
  <block type="number"></block>
</category>

<category name="Logic">
  <block type="quand"></block>
  <block type="quand_statement"></block>
  <block type="logic_compare"></block>
  <block type="logic_operation"></block>
  <block type="logic_negate"></block>
</category>

<category name="Misc">

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
  <block type="text">
    <field name="TEXT"></field>
  </block>
</category>


<category name="Math">
  <block type="math_arithmetic"></block>

</category>

</xml>`;

const ws = Blockly.inject(blocklyDiv, { toolbox });
