import * as Blockly from "blockly";
import { create_event_callback } from "../custom_category/custom_events";

export const events = [];

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

function updateEventCategory(ws, new_option) {
  updateEventBlock();
  let cat = ws.toolbox_.contents_[1];
  let items = cat.toolboxItemDef_.contents
    ? cat.toolboxItemDef_.contents
    : create_event_callback(ws);
  items = items.filter((item) => item.type != "event");
  events.push(new_option);
  items.push({
    kind: "block",
    type: "event",
  });

  cat.updateFlyoutContents(items);
  ws.refreshToolboxSelection();
}

function updateWorkspaceBlocks(ws, new_event_value) {
  ws.getAllBlocks().forEach(function (block) {
    switch (block.type) {
      case "event":
        var sur_field = block.inputList[0].fieldRow[1].menuGenerator_;
        if (sur_field[0][0] == "- à définir -") {
          sur_field[0] = new_event_value;
          block.inputList[0].fieldRow[1].selectedOption = new_event_value;
          block.inputList[0].fieldRow[1].value_ = new_event_value[0];
        } else {
          sur_field.push(new_event_value);
        }
        break;
    }
    ws.refreshTheme();
  });
}
export function updateEvents(ws, e, edit) {
  const already_defined = events.find((event) => event[0] == e);
  if (!already_defined && e != "nom_evenement") {
    updateEventCategory(ws, [e, e]); //toolbox
    updateWorkspaceBlocks(ws, [e, e]); //workspace
  } else {
    if (!edit) {
      Blockly.dialog.alert(` Évenement ${e} existe déjà `);
    }
  }
}

export class LocalEventDecl extends Blockly.FieldTextInput {
  onFinishEditing_(e) {
    updateEvents(this.workspace_, e, true);
    super.onFinishEditing_(e);
  }
  onHtmlInputKeyDown_(e) {
    super.onHtmlInputKeyDown_(e);
  }
}
