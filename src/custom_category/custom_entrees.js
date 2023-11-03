import * as Blockly from "blockly";
import { updatePools } from "../custom_blocs/local_pool_decl";

export const partenaires = [];

function updatePartenaireBlock() {
  Blockly.Blocks["partenaire"] = {
    init: function () {
      this.jsonInit({
        type: "partenaire",
        message0: "Partenaire %1 ",
        args0: [
          {
            type: "field_dropdown",
            name: "NAME",
            options: partenaires,
          },
        ],
        output: ["partenaire", "compare"],
        colour: 230,
        tooltip: "",
        helpUrl: "",
      });
    },
  };
}
function updatePartenaireLabelBlock() {
  Blockly.Blocks["partenaire_label"] = {
    init: function () {
      this.jsonInit({
        type: "partenaire_label",
        message0: "Partenaire %1 %2 label %3",
        args0: [
          {
            type: "field_dropdown",
            name: "NAME",
            options: partenaires,
          },
          {
            type: "input_dummy",
          },
          {
            type: "field_input",
            name: "label",
            text: "label",
          },
        ],
        output: ["partenaire_label", "compare"],
        colour: 230,
        tooltip: "",
        helpUrl: "",
      });
    },
  };
}

function createDomainCasesBlock(type, domain, cases) {
  const options = cases.map((case_, i) => {
    return [case_, `case${i}`];
  });
  console.log(options);
  Blockly.Blocks[type] = {
    init: function () {
      this.jsonInit({
        type,
        message0: `${domain} %1`,
        args0: [
          {
            type: "field_dropdown",
            name: "CASES",
            options,
          },
        ],
        previousStatement: "context",
        nextStatement: "context",
        colour: 260,
        tooltip: "",
        helpUrl: "",
      });
    },
  };
}

function updateWorkspacePartners(ws, new_partenaire_value) {
  ws.getAllBlocks().forEach(function (block) {
    console.log(block);
    switch (block.type) {
      case "partenaire":
        var sur_field = block.inputList[0].fieldRow[1].menuGenerator_;
        if (sur_field[0][0] == "- à définir -") {
          sur_field[0] = new_partenaire_value;
          block.inputList[0].fieldRow[1].selectedOption = new_partenaire_value;
          block.inputList[0].fieldRow[1].value_ = new_partenaire_value[0];
        } else {
          sur_field.push(new_partenaire_value);
        }
        break;
      case "partenaire_label":
        var sur_field = block.inputList[0].fieldRow[1].menuGenerator_;
        console.log("surfiled", sur_field[0][0]);
        if (sur_field[0][0] == "- à définir -") {
          sur_field[0] = new_partenaire_value;
          block.inputList[0].fieldRow[1].selectedOption = new_partenaire_value;
          block.inputList[0].fieldRow[1].value_ = new_partenaire_value[0];
        } else {
          sur_field.push(new_partenaire_value);
        }
        break;
    }
    ws.refreshTheme()
  });
}

function createPartner(button, blockList) {
  const ws = button.getTargetWorkspace();
  let partenaire_name;
  Blockly.dialog.prompt("Donnez le nom du partenaire", "Nom", function (text) {
    partenaire_name = text;
  });
  partenaires.push([partenaire_name, partenaire_name]);
  updatePartenaireBlock();
  updatePartenaireLabelBlock();
  // FIXME breaks when category is added
  let cat = ws.toolbox_.contents_[5];
  const items = cat.toolboxItemDef_.contents
    ? blockList.concat(cat.toolboxItemDef_.contents)
    : blockList;

  // Create partner
  if (partenaires.length == 1) {
    items.push(
      {
        kind: "block",
        type: "partenaire",
      },
      {
        kind: "block",
        type: "partenaire_label",
        values: {
          label: {
            block: {
              type: "label",
              movable: false,
            },
          },
        },
      }
    );
    updateWorkspacePartners(ws, [partenaire_name, partenaire_name]);
    cat.updateFlyoutContents(items);

    ws.refreshToolboxSelection();
  } else {
    // Update partners
    updateWorkspacePartners(ws, [partenaire_name, partenaire_name]);
  }
}

function createPool(button, blockList) {
  const ws = button.getTargetWorkspace();
  let pool_name;
  Blockly.dialog.prompt("Donnez le nom de l'assiette", "Nom", function (text) {
    pool_name = text;
  });
  updatePools(ws, pool_name);
}

function createEntree(button, blockList) {
  const ws = button.getTargetWorkspace();

  // FIXME breaks when category is added
  let cat = ws.toolbox_.contents_[5];
  const items = cat.toolboxItemDef_.contents
    ? blockList.concat(cat.toolboxItemDef_.contents)
    : blockList;

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

function createConstant(button, blockList) {
  const ws = button.getTargetWorkspace();

  button["kind"] = "button";
  // FIXME breaks when category is added
  let cat = ws.toolbox_.contents_[5];
  console.log("cotenents ", cat.toolboxItemDef_.contents);

  const items = cat.toolboxItemDef_.contents
    ? blockList.concat(cat.toolboxItemDef_.contents)
    : blockList;
  console.log("after items ", items);

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

export function create_entrees_callback(ws) {
  // Create a button element
  const partenaire_button = {
    kind: "button",
    text: "Définir un partenaire",
    callbackKey: "CREATE_PARTNER",
  };
  const assiette_button = {
    kind: "button",
    text: "Définir une assiette",
    callbackKey: "CREATE_POOL",
  };
  const entree_button = {
    kind: "button",
    text: "Définir une entrée",
    callbackKey: "CREATE_ENTREE",
  };
  const constant_button = {
    kind: "button",
    text: "Définir une constante",
    callbackKey: "CREATE_CONSTANT",
  };

  // Define the blocks as objects
  const monetaryBlock = {
    kind: "block",
    type: "monetary",
  };

  const numberBlock = {
    kind: "block",
    type: "number",
  };

  const dest_pool_local_decl_contextBlock = {
    kind: "block",
    type: "dest_pool_local_decl_context",
  };

  // Create the blockList array with the button and blocks
  var blockList = [
    partenaire_button,
    assiette_button,
    entree_button,
    constant_button,
    monetaryBlock,
    numberBlock,
    dest_pool_local_decl_contextBlock,
  ];

  // Register the button callback
  ws.registerButtonCallback("CREATE_PARTNER", function (button) {
    return createPartner(button, blockList);
  });
  ws.registerButtonCallback("CREATE_POOL", function (button) {
    return createPool(button, blockList);
  });
  ws.registerButtonCallback("CREATE_ENTREE", function (button) {
    return createEntree(button, blockList);
  });
  ws.registerButtonCallback("CREATE_CONSTANT", function (button) {
    return createConstant(button, blockList);
  });
  return blockList;
}
