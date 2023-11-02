import * as Blockly from "blockly";

function redefineBlocks(ws) {
  // Clear the existing workspace
  /*   ws.clear();
   */
  // Redefine the blocks with new parameters

  //TODO modify blocks in the workspace DONE : dev
  const dog = ws.getAllBlocks();
  const assiette_block = ws.getAllBlocks()[1];
  const generator = assiette_block.inputList[0].fieldRow[1].menuGenerator_;
  generator.push(["ja", "ja"]);
  console.log(dog);
  console.log(generator);
  /*   dog.appendDummyInput().appendField("koko");
   */
}

export class LocalPoolDeclInput extends Blockly.FieldTextInput {
  onFinishEditing_(e) {
    this.workspace_.getAllBlocks().forEach(function (block) {
      /* if (block.type === 'your_block_type') {
          // Check if the block matches the type you want to redefine
          // Modify the block's properties as needed
          block.setFieldValue('New value', 'FIELD_NAME');
          block.setOutput(true, 'new_output_type');
        } */
      console.log(block);
    });
    console.log(this.workspace_.toolbox_);

    const newText = this.htmlInput_.value;
    console.log(`User finished editing: ${newText}`);
    redefineBlocks(this.workspace_);
    pools.push(e);
    super.onFinishEditing_(e);
  }
  onHtmlInputKeyDown_(e) {
    super.onHtmlInputKeyDown_(e);
  }
}
