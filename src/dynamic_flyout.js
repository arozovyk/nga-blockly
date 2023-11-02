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

function createContext(button) {
  const ws = button.getTargetWorkspace();
  let domain;
  let cases = [];
  Blockly.dialog.prompt("Donnez un nom de domaine", "Nom", function (text) {
    domain = text;
  });
  Blockly.dialog.prompt(
    "Listez les cas (séparés par une virgule)",
    "cas1,cas2",
    function (text) {
      cases = text.split(",");
    }
  );
  console.log(domain, cases);
  console.log(button);
  const blockTypeDomain = "tout_" + domain.toLowerCase();
  const blockTypeCases = `${domain.toLowerCase()}_cases`;

  createAllDomainBlock(blockTypeDomain, domain);
  createDomainCasesBlock(blockTypeCases, domain, cases);
  button["kind"] = "button";
  // FIXME breaks when category is added
  let cat = ws.toolbox_.contents_[2];
  const items = cat.toolboxItemDef_.contents
    ? cat.toolboxItemDef_.contents
    : [button];
  items.push(
    {
      kind: "block",
      type: blockTypeDomain,
    },
    {
      kind: "block",
      type: blockTypeCases,
    }
  );
  cat.updateFlyoutContents(items);
 
  ws.refreshToolboxSelection();
}

export function create_context_callback(ws) {
  const button = document.createElement("button");
  button.setAttribute("text", "Créer un contexte...");
  button.setAttribute("kind", "button");

  button.setAttribute("callbackKey", "CREATE_CONTEXT");
  ws.registerButtonCallback("CREATE_CONTEXT", createContext);
  var blockList = [button];

  return blockList;
}
