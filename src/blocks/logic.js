const quand = {
  type: "quand",
  message0: "quand %1",
  args0: [
    {
      type: "input_value",
      name: "COND",
    },
  ],
  output: "null",
  colour: 230,
  tooltip: "",
  helpUrl: "",
};

const quand_statement = {
  type: "quand_statement",
  message0: "quand %1 corps %2",
  args0: [
    {
      type: "input_value",
      name: "COND",
    },
    {
      type: "input_statement",
      name: "CORPS",
    },
  ],
  previousStatement: "operation",
  nextStatement: null,
  colour: 60,
  tooltip: "",
  helpUrl: "",
};
export const logic = [quand, quand_statement];