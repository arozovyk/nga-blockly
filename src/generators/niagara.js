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

niagaraGenerator.forBlock["operation"] = function (block, generator) {
  const nom = block.getFieldValue("NOM");
  const pour_context = generator.statementToCode(block, "POUR");
  const pour = pour_context ? `pour ${pour_context}` : "";
  const sur = block.getFieldValue("SUR");
  const corps = generator.statementToCode(block, "CORPS");

  const code = `
  operation ${nom}
  ${pour}
  sur assiette ${sur}
  ${corps}
  `;

  return code;
};

niagaraGenerator.forBlock["operation_local_pool_decl"] = function (
  block,
  generator
) {
  const nom = block.getFieldValue("NOM");
  const sur = block.getFieldValue("SUR");
  const pour_context = generator.statementToCode(block, "POUR");
  const pour = pour_context ? `pour ${pour_context}` : "";
  const corps = generator.statementToCode(block, "CORPS");
  const code = `
  operation ${nom} \n ${pour} ${
    sur == "nom assiette" ? "" : `sur assiette ${sur}`
  } ${corps ? `\n ${corps}` : ""}
  `;

  return code;
};

niagaraGenerator.forBlock["operation_par"] = function (block, generator) {
  const nom = block.getFieldValue("NOM");
  const par = generator.valueToCode(block, "PAR", Order.ATOMIC);
  const corps = generator.statementToCode(block, "CORPS");

  const code = `
  operation ${nom}
  par ${par}
  ${corps}
  `;
  return code;
};

niagaraGenerator.forBlock["avant"] = function (block, generator) {
  const event = generator.valueToCode(block, "EVENT", Order.ATOMIC);
  const corps = generator.statementToCode(block, "CORPS");

  const code = `avant ${event}\n${corps}`;

  return code;
};

niagaraGenerator.forBlock["apres"] = function (block, generator) {
  const event = generator.valueToCode(block, "EVENT", Order.ATOMIC);
  const corps = generator.statementToCode(block, "CORPS");

  const code = `apres ${event}\n${corps} `;

  return code;
};

niagaraGenerator.forBlock["quotepart"] = function (block, generator) {
  const name = block.getFieldValue("NAME");
  const dest = generator.valueToCode(block, "DEST", Order.ATOMIC);

  const code = `quotepart ${name} % vers ${dest}`;

  return code;
};

niagaraGenerator.forBlock["bonus"] = function (block, generator) {
  const bonusValue = block.getFieldValue("BONUS_VALUE");
  const dest = generator.valueToCode(block, "DEST", Order.ATOMIC);

  const code = `bonus ${bonusValue} € vers ${dest}`;

  return code;
};

niagaraGenerator.forBlock["retrocession"] = function (block, generator) {
  const retrocessionValue = block.getFieldValue("retrocession_value");
  const sur = generator.valueToCode(block, "SUR", Order.ATOMIC);
  const par = generator.valueToCode(block, "PAR", Order.ATOMIC);

  const code = `
  retrocession ${retrocessionValue} %%
  sur ${sur} 
  par ${par}
  `;

  return code;
};

niagaraGenerator.forBlock["quand"] = function (block, generator) {
  const cond = generator.valueToCode(block, "COND", Order.ATOMIC);

  const code = `quand ${cond}`;

  return [code, Blockly.JavaScript.ORDER_NONE];
};

niagaraGenerator.forBlock["quand_statement"] = function (block, generator) {
  const cond = generator.valueToCode(block, "COND", Order.ATOMIC);
  const corps = generator.statementToCode(block, "CORPS");

  const code = `
  quand ${cond}
  ${corps}
  `;

  return code;
};

niagaraGenerator.forBlock["avance"] = function (block, generator) {
  const nom_avance = block.getFieldValue("nom_avance");
  const sur = generator.valueToCode(block, "SUR", Order.ATOMIC);
  const par = generator.valueToCode(block, "par", Order.ATOMIC);
  const montant = generator.valueToCode(block, "MONTANT", Order.ATOMIC);

  const code = `
  avance ${nom_avance}
  sur ${sur} par ${par} montant ${montant}
  `;

  return code;
};

niagaraGenerator.forBlock["evenement_atteint"] = function (block, generator) {
  const name = block.getFieldValue("NAME");
  const cond = generator.valueToCode(block, "COND", Order.ATOMIC);

  const code = `
  evenement_atteint ${name}
  atteint quand ${cond}
  `;

  return code;
};

niagaraGenerator.forBlock["defaut_sur"] = function (block, generator) {
  const sur = generator.valueToCode(block, "SUR", Order.ATOMIC);
  const vers = generator.valueToCode(block, "VERS", Order.ATOMIC);

  const code = `
  defaut sur ${sur} vers ${vers}
  `;

  return code.trim();
};

niagaraGenerator.forBlock["deficit"] = function (block, generator) {
  const sur = generator.valueToCode(block, "SUR", Order.ATOMIC);
  const par = generator.valueToCode(block, "par", Order.ATOMIC);

  const code = `
  déficit sur ${sur} par ${par}
  `;

  return code;
};

niagaraGenerator.forBlock["partenaire"] = function (block, generator) {
  const name = block.getFieldValue("NAME");

  return [name, Order.ATOMIC];
};

niagaraGenerator.forBlock["partenaire_label"] = function (block, generator) {
  const name = block.getFieldValue("NAME");
  const label = block.getFieldValue("label");

  return [`${name}[${label}]`, Order.ATOMIC];
};

niagaraGenerator.forBlock["dest_pool"] = function (block, generator) {
  const name = block.getFieldValue("NAME");

  return [name, Order.ATOMIC];
};

niagaraGenerator.forBlock["label"] = function (block, generator) {
  const label = block.getFieldValue("label");

  return [label, Order.ATOMIC];
};

niagaraGenerator.forBlock["entree"] = function (block, generator) {
  const name = block.getFieldValue("NAME");

  return [name, Order.ATOMIC];
};

niagaraGenerator.forBlock["number"] = function (block, generator) {
  const value = block.getFieldValue("NAME");

  return [value, Order.ATOMIC];
};

niagaraGenerator.forBlock["monetary"] = function (block, generator) {
  const value = block.getFieldValue("NAME");

  return [`${value} €`, Order.ATOMIC];
};

niagaraGenerator.forBlock["constant"] = function (block, generator) {
  const name = block.getFieldValue("NAME");

  return [name, Order.ATOMIC];
};

niagaraGenerator.forBlock["event"] = function (block, generator) {
  const eventName = block.getFieldValue("EVENT_NAME");

  return [eventName, Order.ATOMIC];
};

niagaraGenerator.forBlock["dest_pool_context"] = function (block, generator) {
  const name = block.getFieldValue("NAME");
  const context = generator.statementToCode(block, "CONTEXT");

  return [`${name} ${context}`, Order.ATOMIC];
};

niagaraGenerator.forBlock["dest_pool_local_decl"] = function (
  block,
  generator
) {
  const name = block.getFieldValue("NAME");

  return [name, Order.ATOMIC];
};

niagaraGenerator.forBlock["dest_pool_local_decl_context"] = function (
  block,
  generator
) {
  const name = block.getFieldValue("NAME");
  const context = generator.statementToCode(block, "CONTEXT");

  return [`${name} ${context}`, Order.ATOMIC];
};

niagaraGenerator.forBlock["logic_compare"] = function (block, generator) {
  return [`(truc) = (bidule)`, Order.ATOMIC];
};
