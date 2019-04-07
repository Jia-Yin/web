Blockly.Blocks["gform1"] = {
  init: function() {
    this.appendDummyInput().appendField(Blockly.Msg.GFormLabel);
    this.appendValueInput("url")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("URL =");
    this.appendValueInput("interval")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Interval =");
    this.appendValueInput("field1")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Field =");
    this.appendValueInput("value1")
      .setCheck(["Number", "String"])
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Value =");
    this.setPreviousStatement(true, null);
    this.setColour(0);
    this.setTooltip();
    this.setHelpUrl("");
  }
};

Blockly.Blocks["gform2"] = {
  init: function() {
    this.appendDummyInput().appendField(Blockly.Msg.GFormLabel);
    this.appendValueInput("url")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("URL =");
    this.appendValueInput("interval")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Interval =");
    this.appendValueInput("field1")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Field 1 =");
    this.appendValueInput("value1")
      .setCheck(["Number", "String"])
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Value 1 =");
    this.appendValueInput("field2")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Field 2 =");
    this.appendValueInput("value2")
      .setCheck(["Number", "String"])
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Value 2 =");
    this.setPreviousStatement(true, null);
    this.setColour(0);
    this.setTooltip();
    this.setHelpUrl("");
  }
};

Blockly.Blocks["gform3"] = {
  init: function() {
    this.appendDummyInput().appendField(Blockly.Msg.GFormLabel);
    this.appendValueInput("url")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("URL =");
    this.appendValueInput("interval")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Interval =");
    this.appendValueInput("field1")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Field 1 =");
    this.appendValueInput("value1")
      .setCheck(["Number", "String"])
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Value 1 =");
    this.appendValueInput("field2")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Field 2 =");
    this.appendValueInput("value2")
      .setCheck(["Number", "String"])
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Value 2 =");
    this.appendValueInput("field3")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Field 3 =");
    this.appendValueInput("value3")
      .setCheck(["Number", "String"])
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Value 3 =");
    this.setPreviousStatement(true, null);
    this.setColour(0);
    this.setTooltip();
    this.setHelpUrl("");
  }
};
