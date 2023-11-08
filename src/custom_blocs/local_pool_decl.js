import * as Blockly from "blockly";
import { pools, entree_pools } from "../model/model";
import { create_entrees_callback } from "../custom_category/custom_entrees";

function updateOperationBlock() {
  Blockly.Blocks["operation"] = {
    init: function () {
      this.jsonInit({
        type: "operation",
        message0: "opération %1 %2 pour %3 sur assiette %4 %5 %6",
        args0: [
          {
            type: "field_input",
            name: "NOM",
            text: "nom",
          },
          {
            type: "input_dummy",
          },
          {
            type: "input_statement",
            name: "POUR",
            check: "context",
          },
          {
            type: "field_dropdown",
            name: "SUR",
            options: pools,
          },
          {
            type: "input_dummy",
            name: "SUR",
          },
          {
            type: "input_statement",
            name: "CORPS",
            check: ["corps"],
          },
        ],
        colour: 120,
        tooltip: "Define an operation",
        helpUrl: "",
      });
    },
  };
}

function updateDest_pool_contextBlock() {
  Blockly.Blocks["dest_pool_context"] = {
    init: function () {
      this.jsonInit({
        type: "dest_pool_context",
        message0: "Assiette %1 %2 Context %3",
        args0: [
          {
            type: "field_dropdown",
            name: "NAME",
            options: pools,
          },
          {
            type: "input_dummy",
          },
          {
            type: "input_statement",
            name: "CONTEXT",
            check: "context",
          },
        ],
        output: ["dest_pool_context", "compare"],
        colour: 345,
        tooltip: "",
        helpUrl: "",
      });
    },
  };
}
function updateDest_poolBlock() {
  Blockly.Blocks["dest_pool"] = {
    init: function () {
      this.jsonInit({
        type: "dest_pool",
        message0: "Assiette %1",
        args0: [
          {
            type: "field_dropdown",
            name: "NAME",
            options: pools,
          },
        ],
        output: ["dest_pool", "compare"],
        colour: 345,
        tooltip: "",
        helpUrl: "",
      });
    },
  };
}

function updateOperationCategory(ws, new_option) {
  updateOperationBlock();
  let cat = ws.toolbox_.contents_[0];
  let items = cat.toolboxItemDef_.contents;

  if (pools.length > 0) {
    items = items.filter((item) => item.type != "operation");
  }
  items.push({
    kind: "block",
    type: "operation",
  });

  cat.updateFlyoutContents(items);
  ws.refreshToolboxSelection();
}

function updateEntreesCategory(ws, new_option, edit) {
  updateDest_pool_contextBlock();
  updateDest_poolBlock();
  let cat = ws.toolbox_.contents_[5];
  let items = cat.toolboxItemDef_.contents
    ? cat.toolboxItemDef_.contents
    : create_entrees_callback(ws);

  if (pools.length > 0) {
    items = items.filter(
      (item) => item.type != "dest_pool" && item.type != "dest_pool_context"
    );
  }
  if (!edit) entree_pools.push(new_option);

  pools.push(new_option);
  
  items.push(
    {
      kind: "block",
      type: "dest_pool",
    },
    {
      kind: "block",
      type: "dest_pool_context",
    }
  );

  cat.updateFlyoutContents(items);
  ws.refreshToolboxSelection();
}

function updateWorkspaceBlocks(ws, new_pool_value) {
  ws.getAllBlocks().forEach(function (block) {
    switch (block.type) {
      case "operation":
        var sur_field = block.inputList[2].fieldRow[1].menuGenerator_;
        sur_field.push(new_pool_value);
        break;
      case "dest_pool":
        var sur_field = block.inputList[0].fieldRow[1].menuGenerator_;
        sur_field.push(new_pool_value);
        break;
      case "dest_pool_context":
        var sur_field = block.inputList[0].fieldRow[1].menuGenerator_;
        sur_field.push(new_pool_value);
        break;
    }
  });
}
export function updatePools(ws, e, edit) {
  const already_defined = pools.find((pool) => pool[0] == e);
  if (!already_defined && e != "nom assiette") {
    updateOperationCategory(ws); //toolbox
    updateEntreesCategory(ws, [e, e]); //toolbox
    updateWorkspaceBlocks(ws, [e, e]); //workspace
  } else {
    if (!edit) {
      Blockly.dialog.alert(` Assiette ${e} existe déjà `);
    }
  }
}

export class LocalPoolDeclInput extends Blockly.FieldTextInput {
  onFinishEditing_(e) {
    updatePools(this.workspace_, e, true);
    super.onFinishEditing_(e);
  }
  onHtmlInputKeyDown_(e) {
    super.onHtmlInputKeyDown_(e);
  }
}
