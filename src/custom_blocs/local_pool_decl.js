import * as Blockly from "blockly";

export const pools = [];

function redefineBlocks(ws) {
  // Clear the existing workspace
  /*   ws.clear();
   */
  // Redefine the blocks with new parameters
  //TODO modify blocks in the workspace DONE : dev
  /*   const dog = ws.getAllBlocks();
  const assiette_block = ws.getAllBlocks()[1];
  const generator = assiette_block.inputList[0].fieldRow[1].menuGenerator_;
  generator.push(["ja", "ja"]); */
  /*   console.log(dog);
  console.log(generator); */
  /*   dog.appendDummyInput().appendField("koko");
   */
}
function updateWorkspaceBlocks(ws, new_pool_value) {
  ws.getAllBlocks().forEach(function (block) {
    switch (block.type) {
      case "operation":
        var sur_field = block.inputList[2].fieldRow[1].menuGenerator_;
        sur_field.push(new_pool_value);
        break;
      case "dest_pool":
        block.setFieldValue("vente_tvsvod", "NAME");
        break;
      case "dest_pool_context":
        block.setFieldValue("vente_tvsvod", "NAME");
        break;
    }
    console.log(block);
  });
}
export class LocalPoolDeclInput extends Blockly.FieldTextInput {
  onFinishEditing_(e) {
    const newText = this.htmlInput_.value;
    console.log(`User finished editing: ${newText}`);
    pools.push([e, e]);
    redefineBlocks(this.workspace_); //toolbox
    updateWorkspaceBlocks(this.workspace_, [e, e]); //workspace
    super.onFinishEditing_(e);
  }
  onHtmlInputKeyDown_(e) {
    super.onHtmlInputKeyDown_(e);
  }
}
