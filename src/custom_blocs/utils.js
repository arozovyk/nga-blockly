import * as Blockly from "blockly";

export function createCustomBlock(blockType, domain, cases) {
  Blockly.Blocks[blockType] = {
    init: function () {
      this.jsonInit({
        type: blockType,
        message0: `Custom test ${domain}  %1`,
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
