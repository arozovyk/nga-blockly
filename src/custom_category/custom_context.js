import * as Blockly from "blockly";
import { Order, niagaraGenerator } from "../generators/niagara";

function createAllDomainBlock(type, domain) {
  Blockly.Blocks[type] = {
    init: function () {
      this.jsonInit({
        type: type,
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
  niagaraGenerator.forBlock[type] = function (block) {
    //TODO Add all types where context connects
    const parent = block.getParent();

    if (!parent || parent.type != "operation_local_pool_decl") {
      return "";
    }
    return `tout ${domain}`;
  };
}
function createDomainCasesBlock(type, domain, cases) {
  const options = cases.map((case_, i) => {
    return [case_, case_];
  });
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
        colour: 20,
        tooltip: "",
        helpUrl: "",
      });
    },
  };

  niagaraGenerator.forBlock[type] = function (block) {
    //dont generate the code if there is no parent
    //TODO Add all types
    const parent = block.getParent();
    if (!parent || parent.type != "operation_local_pool_decl") {
      return "";
    }
    var current_block = block;
    var selected_cases = "";
    while (current_block) {
      const cas = current_block.getFieldValue("CASES");
      console.log("cas", cas);
      selected_cases = cas
        ? (selected_cases += `${selected_cases ? "," : ""}${cas}`)
        : selected_cases;
      current_block = current_block.getNextBlock();
    }

    return `${domain} (${selected_cases} )`;
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
