import logoOnly from "./icons/logo_only.svg";
import money_flow from "./icons/money_flow.svg";
import context from "./icons/context.svg";
import partners from "./icons/partners.svg";
import logic from "./icons/logic.svg";
import partition from "./icons/partition.svg";
import event from "./icons/event.svg";
import * as Blockly from "blockly";

export class CustomCategory extends Blockly.ToolboxCategory {
  /**
   * Constructor for a custom category.
   * @override
   */
  constructor(categoryDef, toolbox, opt_parent) {
    super(categoryDef, toolbox, opt_parent);
  }

  /**
   * Adds the colour to the toolbox.
   * This is called on category creation and whenever the theme changes.
   * @override
   */
  addColourBorder_(colour) {
    this.rowDiv_.style.backgroundColor = colour;
  }

  /**
   * Sets the style for the category when it is selected or deselected.
   * @param {boolean} isSelected True if the category has been selected,
   *     false otherwise.
   * @override
   */
  setSelected(isSelected) {
    // We do not store the label span on the category, so use getElementsByClassName.
    var labelDom = this.rowDiv_.getElementsByClassName("blocklyTreeLabel")[0];
    if (isSelected) {
      // Change the background color of the div to white.
      this.rowDiv_.style.backgroundColor = "white";
      // Set the colour of the text to the colour of the category.
      labelDom.style.color = this.colour_;
      this.iconDom_.style.color = this.colour_;
    } else {
      // Set the background back to the original colour.
      this.rowDiv_.style.backgroundColor = this.colour_;
      // Set the text back to white.
      labelDom.style.color = "white";
      this.iconDom_.style.color = "white";
    }
    // This is used for accessibility purposes.
    Blockly.utils.aria.setState(
      /** @type {!Element} */ (this.htmlDiv_),
      Blockly.utils.aria.State.SELECTED,
      isSelected
    );
  }

  /**
   * Creates the dom used for the icon.
   * @returns {HTMLElement} The element for the icon.
   * @override
   */
  createIconDom_() {
    const iconImg = document.createElement("img");
    console.log(this);
    switch (this.name_) {
      case "Operation":
        iconImg.src = money_flow;
        break;
      case "Contexts":
        iconImg.src = context;
        break;
      case "Entrées":
        iconImg.src = partners;
        break;
      case "Logic":
        iconImg.src = logic;
        break;
      case "Corps":
        iconImg.src = partition;
        break;
      case "Evenements":
        iconImg.src = event;
        break;
      default:
        iconImg.src = logoOnly;
    }
    iconImg.alt = "Blockly Logo";
    iconImg.width = "60";
    iconImg.height = "60";
    return iconImg;
  }
}
