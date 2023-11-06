const quand = {
  type: "quand",
  message0: "quand %1",
  args0: [
    {
      type: "input_value",
      name: "COND",
    },
  ],
  output: "quand",
  colour: 120,
  tooltip: "",
  helpUrl: "",
};

const quand_statement = {
  type: "quand_statement",
  message0: "quand %1 %2",
  args0: [
    {
      type: "input_value",
      name: "COND",
      check: ["Boolean", "event"],
    },
    {
      type: "input_statement",
      name: "CORPS",
      check: ["corps", "operation_par"],
    },
  ],
  previousStatement: ["corps", "operation_par"],
  nextStatement: ["corps", "operation_par"],
  colour: 120,
  tooltip: "",
  helpUrl: "",
};
export const logic = [quand, quand_statement];
