
import * as Blockly from "blockly";


export class LocalPoolDeclInput extends Blockly.FieldMultilineInput {
  constructor(text, opt_validator) {
    super(text, opt_validator);
  }

  onFinishEditing_(e) {
    console.log(this);
    const newText = this.htmlInput_.value;
    console.log(`User finished editing: ${newText}`);
    super.onFinishEditing_(e);

  }
  // Override the input handling method
  onHtmlInputChange_(e) {
    // Call the parent method to preserve default behavior
    super.onHtmlInputChange_(e);
    console.log(e)
    // Your custom logic here to modify the user's input or trigger events
    const newText = this.htmlInput_.value;
    console.log(`User typed: ${newText}`);

    // You can also trigger custom events here if needed
  }
}
