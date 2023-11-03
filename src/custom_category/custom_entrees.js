import * as Blockly from "blockly";

function createAllDomainBlock(blockType, domain) {
  Blockly.Blocks[blockType] = {
    init: function () {
      this.jsonInit({
        type: blockType,
        message0: `Tout ${domain}  %1`,
        args0: [
          {
            type: "input_dummy",
          },
        ],
        previousStatement: "context",
        nextStatement: "context",
        colour: 20,
        tooltip: "explain context domains",
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

function createPartner(button, blockList) {
  const ws = button.getTargetWorkspace();

  ws.registerButtonCallback("CREATE_ENTREES", f);
  button["kind"] = "button";

  // FIXME breaks when category is added
  let cat = ws.toolbox_.contents_[5];
  const items = cat.toolboxItemDef_.contents
    ? blockList.concat(cat.toolboxItemDef_.contents)
    : blockList;

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
  cat.updateFlyoutContents(items);

  ws.refreshToolboxSelection();
}

function createPool(button, blockList) {
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
