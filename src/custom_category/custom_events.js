import * as Blockly from "blockly";
import { updateEvents } from "../custom_blocs/local_event_decl";

var rendered = false;

function createEvent(button, blockList) {
  const ws = button.getTargetWorkspace();
  let event_name;
  Blockly.dialog.prompt("Donnez le nom de l'évènement", "Nom", function (text) {
    event_name = text;
  });
  updateEvents(ws, event_name, false, blockList, rendered);
}

export function create_event_callback(ws) {
  // Create a button element
  const event_button = {
    kind: "button",
    text: "Définir un évènement",
    callbackKey: "CREATE_EVENT",
  };

  var blockList = [
/*     event_button,
 */
    {
      kind: "block",
      type: "avant",
    },
    {
      kind: "block",
      type: "apres",
    },
    {
      kind: "block",
      type: "quand_statement",
      inputs: {
        COND: {
          block: {
            type: "event",
          },
        },
      },
    },
    {
      kind: "block",
      type: "quand_statement",
      inputs: {
        COND: {
          block: {
            type: "logic_compare",
          },
        },
      },
    },
    {
      kind: "block",
      type: "evenement_atteint",
      inputs: {
        COND: {
          block: {
            type: "logic_compare",
          },
        },
      },
      values: {
        evenement_atteint: {
          block: {
            type: "quand",
          },
        },
      },
    },
    {
      kind: "block",
      type: "event",
    },
  ];

  // Register the button callback
  ws.registerButtonCallback("CREATE_EVENT", function (button) {
    rendered = true;
    return createEvent(button, blockList);
  });

  return blockList;
}
