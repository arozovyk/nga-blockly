import * as Blockly from "blockly";
import { updatePools } from "../custom_blocs/local_pool_decl";

export const events = [];

var rendered = false;

function updateEventBlock() {
  Blockly.Blocks["event"] = {
    init: function () {
      this.jsonInit({
        type: "event",
        message0: " évènement %1",
        args0: [
          {
            type: "field_dropdown",
            name: "EVENT_NAME",
            options: events,
          },
        ],
        output: "event",
        colour: 210,
        tooltip: "",
        helpUrl: "",
      });
    },
  };
}

function updateWsBlocs(ws, new_value) {
  ws.getAllBlocks().forEach(function (block) {
    switch (block.type) {
      case "event":
        var sur_field = block.inputList[0].fieldRow[1].menuGenerator_;
        if (sur_field[0][0] == "- à définir -") {
          sur_field[0] = new_value;
          block.inputList[0].fieldRow[1].selectedOption = new_value;
          block.inputList[0].fieldRow[1].value_ = new_value[0];
        } else {
          sur_field.push(new_value);
        }
        break;
    }
    ws.refreshTheme();
  });
}

function createEvent(button, blockList) {
  const ws = button.getTargetWorkspace();
  let event_name;
  Blockly.dialog.prompt("Donnez le nom de l'évènement", "Nom", function (text) {
    event_name = text;
  });
  events.push([event_name, event_name]);
  updateEventBlock();
  // FIXME breaks when category is added
  let cat = ws.toolbox_.contents_[5];
  const items = cat.toolboxItemDef_.contents
    ? rendered
      ? cat.toolboxItemDef_.contents
      : blockList.concat(cat.toolboxItemDef_.contents)
    : blockList;

  // Create partner
  if (events.length == 1) {
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
    updateWsBlocs(ws, [event_name, event_name]);
    cat.updateFlyoutContents(items);

    ws.refreshToolboxSelection();
  } else {
    // Update partners
    updateWsBlocs(ws, [event_name, event_name]);
  }
}

export function create_event_callback(ws) {
  // Create a button element
  const event_button = {
    kind: "button",
    text: "Définir un évènement",
    callbackKey: "CREATE_EVENT",
  };

  var blockList = [
    event_button,

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
