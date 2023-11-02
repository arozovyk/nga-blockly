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
function f() {
  console.log("entrees");
}
function createContext(button) {
  const ws = button.getTargetWorkspace();

  ws.registerButtonCallback("CREATE_ENTREES", f);
  button["kind"] = "button";

  // FIXME breaks when category is added
  let cat = ws.toolbox_.contents_[5];
  const items = cat.toolboxItemDef_.contents
    ? cat.toolboxItemDef_.contents
    : [];

  const partenaire_button = document.createElement("button");
  partenaire_button.setAttribute("text", "Déclarer un partenaire");
  partenaire_button.setAttribute("callbackKey", "CREATE_ENTREES");

  partenaire_button["kind"] = "button";
  items.push(
    {
      kind: "block",
      type: "partenaire",
    },
    partenaire_button,
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
    },
    {
      kind: "block",
      type: "dest_pool_local_decl",
    },
    {
      kind: "block",
      type: "dest_pool_local_decl_context",
    },
    {
      kind: "block",
      type: "entree",
    },

    {
      kind: "block",
      type: "constant",
    },
    {
      kind: "block",
      type: "monetary",
    },
    {
      kind: "block",
      type: "number",
    }
  );
  cat.updateFlyoutContents(items);

  ws.refreshToolboxSelection();
}

export function create_entrees_callback(ws) {
  const partenaire_button = document.createElement("button");

  partenaire_button.setAttribute("text", "Déclarer un partenaire");
  partenaire_button.setAttribute("kind", "button");

  partenaire_button.setAttribute("callbackKey", "CREATE_CONTEXT");
  ws.registerButtonCallback("CREATE_CONTEXT", createContext);
  const items = [partenaire_button];

  return items;
}

export function init(ws) {
  const button = document.createElement("button");
  button.setAttribute("text", "init");
  button.setAttribute("kind", "button");

  button.setAttribute("callbackKey", "CREATE_CONTEXT");
  ws.registerButtonCallback("CREATE_CONTEXT", createContext);
  var blockList = [button];

  return blockList;
}
