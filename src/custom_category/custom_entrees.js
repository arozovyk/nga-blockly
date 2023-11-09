import * as Blockly from "blockly";
import { updatePools } from "../custom_blocs/local_pool_decl";
import { partners as partenaires, entrees, constants } from "../model/model";

// todo move to utils
export function uncapitalizeFirstLetter(string) {
  return string.charAt(0).toLowerCase() + string.slice(1);
}
var rendered = false;
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
function updateConstantBlock() {
  let options = [];
  for (const key of constants.keys()) {
    options.push([key, key]);
  }
  Blockly.Blocks["constant"] = {
    init: function () {
      this.jsonInit({
        type: "constant",
        message0: "Constante %1  ",
        args0: [
          {
            type: "field_dropdown",
            name: "NAME",
            options,
          },
        ],
        output: ["constant", "compare"],
        inputsInline: false,
        colour: 30,
        tooltip: "",
        helpUrl: "",
      });
    },
  };
}
function updateEntreesBlock() {
  let options = [];
  for (const key of entrees.keys()) {
    options.push([key, key]);
  }
  Blockly.Blocks["entree"] = {
    init: function () {
      this.jsonInit({
        type: "entree",
        message0: "Entrée %1  ",
        args0: [
          {
            type: "field_dropdown",
            name: "NAME",
            options,
          },
        ],
        output: ["entree", "compare"],
        colour: 60,
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

function updateWsBlocs(ws, new_value) {
  ws.getAllBlocks().forEach(function (block) {
    switch (block.type) {
      case "partenaire":
        var sur_field = block.inputList[0].fieldRow[1].menuGenerator_;
        if (sur_field[0][0] == "- à définir -") {
          sur_field[0] = new_value;
          block.inputList[0].fieldRow[1].selectedOption = new_value;
          block.inputList[0].fieldRow[1].value_ = new_value[0];
        } else {
          sur_field.push(new_value);
        }
        break;
      case "partenaire_label":
        var sur_field = block.inputList[0].fieldRow[1].menuGenerator_;
        if (sur_field[0][0] == "- à définir -") {
          sur_field[0] = new_value;
          block.inputList[0].fieldRow[1].selectedOption = new_value;
          block.inputList[0].fieldRow[1].value_ = new_value[0];
        } else {
          sur_field.push(new_value);
        }
        break;
      case "entree":
        var sur_field = block.inputList[0].fieldRow[1].menuGenerator_;
        sur_field.push(new_value);
        break;
      case "constant":
        var sur_field = block.inputList[0].fieldRow[1].menuGenerator_;
        sur_field.push(new_value);
        break;
    }
    ws.refreshTheme();
  });
}

function createPartner(button, blockList) {
  const ws = button.getTargetWorkspace();
  let partenaire_name;
  Blockly.dialog.prompt("Donnez le nom du partenaire", "Nom", function (text) {
    partenaire_name = uncapitalizeFirstLetter(text);
  });
  if (
    partenaires.find((e) => {
      return e[0] == partenaire_name;
    })
  ) {
    Blockly.dialog.alert(`Partenaire ${partenaire_name} existe déjà `);
    return;
  }
  partenaires.push([partenaire_name, partenaire_name]);
  updatePartenaireBlock();
  updatePartenaireLabelBlock();
  // FIXME breaks when category is added
  let cat = ws.toolbox_.contents_[5];
  const items = cat.toolboxItemDef_.contents
    ? rendered
      ? cat.toolboxItemDef_.contents
      : blockList.concat(cat.toolboxItemDef_.contents)
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
    updateWsBlocs(ws, [partenaire_name, partenaire_name]);
    cat.updateFlyoutContents(items);

    ws.refreshToolboxSelection();
  } else {
    // Update partners
    updateWsBlocs(ws, [partenaire_name, partenaire_name]);
  }
}
function createEntree(button, blockList) {
  const ws = button.getTargetWorkspace();
  let entree_name;
  let type;
  Blockly.dialog.prompt("Donnez le nom l'entrée", "Nom", function (text) {
    entree_name = uncapitalizeFirstLetter(text);
    Blockly.dialog.prompt(
      "Donnez le type (argent | entier) ",
      "entier",
      function (text) {
        type = uncapitalizeFirstLetter(text);
      }
    );
  });
  if (entrees.has(entree_name)) {
    Blockly.dialog.alert(` Entrée ${entree_name} existe déjà `);
    return;
  }
  entrees.set(entree_name, type);
  updateEntreesBlock();
  // FIXME breaks when category is added
  let cat = ws.toolbox_.contents_[5];
  const items = cat.toolboxItemDef_.contents
    ? rendered
      ? cat.toolboxItemDef_.contents
      : blockList.concat(cat.toolboxItemDef_.contents)
    : blockList;

  // Create entree
  if (entrees.size == 1) {
    items.push({
      kind: "block",
      type: "entree",
    });
    updateWsBlocs(ws, [entree_name, entree_name]);
    cat.updateFlyoutContents(items);

    ws.refreshToolboxSelection();
  } else {
    // Update entree
    updateWsBlocs(ws, [entree_name, entree_name]);
  }
}
function createConstant(button, blockList) {
  const ws = button.getTargetWorkspace();
  let const_name;
  let value;
  Blockly.dialog.prompt("Donnez le nom la constante", "Nom", function (text) {
    const_name = uncapitalizeFirstLetter(text);
    Blockly.dialog.prompt(
      "Donnez une valeur (entière ou en €)",
      "entier",
      function (text) {
        value = uncapitalizeFirstLetter(text);
      }
    );
  });

  if (constants.has(const_name)) {
    Blockly.dialog.alert(` Constante ${const_name} existe déjà `);
    return;
  }

  constants.set(const_name, value);
  /*   constants.push([`${const_name} : ${value}`, `${const_name} - ${value}`]);
   */ updateConstantBlock();
  // FIXME breaks when category is added
  let cat = ws.toolbox_.contents_[5];
  const items = cat.toolboxItemDef_.contents
    ? rendered
      ? cat.toolboxItemDef_.contents
      : blockList.concat(cat.toolboxItemDef_.contents)
    : blockList;

  // Create constant
  if (constants.size == 1) {
    items.push({
      kind: "block",
      type: "constant",
    });
    updateWsBlocs(ws, [const_name, const_name]);
    cat.updateFlyoutContents(items);

    ws.refreshToolboxSelection();
  } else {
    // Update constant
    updateWsBlocs(ws, [const_name, const_name]);
  }
}

function createPool(button) {
  const ws = button.getTargetWorkspace();
  let pool_name;
  Blockly.dialog.prompt("Donnez le nom de l'assiette", "Nom", function (text) {
    pool_name = uncapitalizeFirstLetter(text);
  });
  updatePools(ws, pool_name, false);
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
    text: "Définir une assiette d'entrée",
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
  const dest_pool_local_declBlock = {
    kind: "block",
    type: "dest_pool_local_decl",
  };

  // Create the blockList array with the button and blocks
  var blockList = [
    partenaire_button,
    assiette_button,
    entree_button,
    constant_button,
    monetaryBlock,
    numberBlock,
    dest_pool_local_declBlock,
    dest_pool_local_decl_contextBlock,
  ];

  // Register the button callback
  ws.registerButtonCallback("CREATE_PARTNER", function (button) {
    rendered = true;
    return createPartner(button, blockList);
  });
  ws.registerButtonCallback("CREATE_POOL", function (button) {
    rendered = true;
    return createPool(button);
  });
  ws.registerButtonCallback("CREATE_ENTREE", function (button) {
    rendered = true;
    return createEntree(button, blockList);
  });
  ws.registerButtonCallback("CREATE_CONSTANT", function (button) {
    rendered = true;
    return createConstant(button, blockList);
  });
  return blockList;
}
