import * as Blockly from "blockly";

export const niagaraGenerator = new Blockly.Generator("NIAGARA");

export const Order = {
  ATOMIC: 0,
};

niagaraGenerator.scrub_ = function (block, code, thisOnly) {
  const nextBlock = block.nextConnection && block.nextConnection.targetBlock();
  if (nextBlock && !thisOnly) {
    return code + "\n" + niagaraGenerator.blockToCode(nextBlock);
  }
  return code;
};

niagaraGenerator.forBlock["operation_local_pool_decl"] = function (block) {
  const nom = block.getFieldValue("NOM");
  console.log(block);
  const code = `
  operation ${nom}
  `;

  return code;
};

niagaraGenerator.forBlock["operation_local_pool_decl"] = function (
  block,
  generator
) {
  const nom = block.getFieldValue("NOM");
  const pour_context = generator.statementToCode(block, "POUR");
  const pour = pour_context ? `pour ${pour_context}` : "";
  const code = `
  operation ${nom}
  ${pour}
  `;

  return code;
};

/* niagaraGenerator.forBlock["logic_null"] = function (block) {
  return ["null", Order.ATOMIC];
};  
niagaraGenerator.forBlock["math_number"] = function (block) {
  const code = String(block.getFieldValue("NUM"));
  return [code, Order.ATOMIC];
};

niagaraGenerator.forBlock["logic_boolean"] = function (block) {
  const code = block.getFieldValue("BOOL") == "TRUE" ? "true" : "false";
  return [code, Order.ATOMIC];
};

niagaraGenerator.forBlock["member"] = function (block, generator) {
  const name = block.getFieldValue("MEMBER_NAME");
  const value = generator.valueToCode(block, "MEMBER_VALUE", Order.ATOMIC);
  const code = `"${name}": ${value}`;
  return code;
};

niagaraGenerator.forBlock["lists_create_with"] = function (block, generator) {
  const values = [];
  for (let i = 0; i < block.itemCount_; i++) {
    const valueCode = generator.valueToCode(block, "ADD" + i, Order.ATOMIC);
    if (valueCode) {
      values.push(valueCode);
    }
  }
  const valueString = values.join(",\n");
  const indentedValueString = generator.prefixLines(
    valueString,
    generator.INDENT
  );
  const codeString = "[\n" + indentedValueString + "\n]";
  return [codeString, Order.ATOMIC];
};

niagaraGenerator.forBlock["object"] = function (block, generator) {
  const statementMembers = generator.statementToCode(block, "MEMBERS");
  const code = "{\n" + statementMembers + "\n}";
  return [code, Order.ATOMIC];
};
 */
