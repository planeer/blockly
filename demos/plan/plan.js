Blockly.Blocks['plan'] = {
    init: function() {
      this.appendValueInput("GLOBAL")
          .setCheck("GLOBAL")
          .appendField("GLOBAL");
      this.appendValueInput("SETUP")
          .setCheck("SETUP")
          .appendField("SETUP");
      this.appendValueInput("LOOP")
          .setCheck("LOOP")
          .appendField("LOOP");
      this.setColour(20);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['global'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("GLOBAL");
      this.appendStatementInput("VARIABLES")
          .setCheck("VARIALBE");
      this.setOutput(true, "GLOBAL");
      this.setColour(65);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['variable'] = {
    init: function() {
      this.appendValueInput("NAME")
          .setCheck("String");
      this.appendDummyInput()
          .appendField("=");
      this.appendValueInput("VALUE")
          .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['setup'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("SETUP");
      this.appendStatementInput("SETUPOPTIONS")
          .setCheck(null);
      this.setOutput(true, "SETUP");
      this.setColour(65);
   this.setTooltip("SETUP");
   this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['pindefinition'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("PIN DEFINITION");
      this.appendValueInput("PIN")
          .setCheck(["Number", "String"])
          .appendField(new Blockly.FieldDropdown([["input","INPUT"], ["output","OUTPUT"]]), "PINOPTIONS");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(160);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['serial'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("SERIAL");
      this.appendValueInput("NAME")
          .setCheck("SERIALOPTIONS");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(210);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['serialinit'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("INIT");
      this.appendValueInput("NAME")
          .setCheck(["Number", "String"]);
      this.setInputsInline(true);
      this.setOutput(true, "SERIALOPTIONS");
      this.setColour(210);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['print'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("PRINT");
      this.appendStatementInput("NAME")
          .setCheck("String");
      this.setOutput(true, ["SERIALOPTIONS", "DISPLAYOPTIONS"]);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['prinln'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("PRINTLN");
      this.appendStatementInput("NAME")
          .setCheck("String");
      this.setOutput(true, "SERIALOPTIONS");
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['serialreturnfunctions'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("SERIAL RETURN FUNCTION")
          .appendField(new Blockly.FieldDropdown([["read","READ"], ["available","AVAILABLE"]]), "SERIALRETURNFUNCTIONS");
      this.setInputsInline(true);
      this.setOutput(true, "SERIALOPTIONS");
      this.setColour(210);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['servo'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("SERVO");
      this.appendValueInput("SERVOOPTIONS")
          .setCheck("SERVOOPTIONS");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(260);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['servoinit'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("SERVO INIT");
      this.appendValueInput("NAME")
          .setCheck(["Number", "String"]);
      this.setInputsInline(true);
      this.setOutput(true, "SERVOOPTIONS");
      this.setColour(260);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['servorotate'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("SERVO ROTATE");
      this.appendValueInput("NAME")
          .setCheck("String");
      this.appendDummyInput()
          .appendField("FROM ANGLE");
      this.appendValueInput("ANGLE1")
          .setCheck(["String", "Number"]);
      this.appendDummyInput()
          .appendField("TO ANGLE");
      this.appendValueInput("ANGLE2")
          .setCheck(["String", "Number"]);
      this.setInputsInline(true);
      this.setOutput(true, "SERVOOPTIONS");
      this.setColour(260);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['time'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("TIME")
          .appendField(new Blockly.FieldDropdown([["init","INIT"], ["year","YEAR"], ["month","MONTH"], ["day","DAY"], ["hour","HOUR"], ["minute","MINUTE"], ["second","SECOND"], ["get day of week","GETDAYOFWEEKSTRING"]]), "TIMEOPTIONS");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(290);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['display'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("DISPLAY");
      this.appendValueInput("DISPLAYOPTION")
          .setCheck("DISPLAYOPTIONS");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(330);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['displayinit'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("DISPLAYINIT")
          .appendField("WIDTH");
      this.appendValueInput("WIDTH")
          .setCheck(["Number", "String"]);
      this.appendDummyInput()
          .appendField("HEIGHT");
      this.appendValueInput("HEIGHT")
          .setCheck(["Number", "String"]);
      this.setOutput(true, "DISPLAYOPTIONS");
      this.setColour(330);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['loop'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("LOOP");
      this.appendStatementInput("LOOPOPTIONS")
          .setCheck(null);
      this.setOutput(true, "LOOP");
      this.setColour(65);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['pin'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("PIN");
      this.appendValueInput("PIN")
          .setCheck(["String", "Number"]);
      this.appendValueInput("PINOPTION")
          .setCheck("PINOPTIONS");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(30);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['blink'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("BLINK");
      this.appendValueInput("NAME")
          .setCheck(["String", "Number"]);
      this.setInputsInline(true);
      this.setOutput(true, "PINOPTIONS");
      this.setColour(30);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['setvalue'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("PIN VALUE")
          .appendField(new Blockly.FieldDropdown([["on","ON"], ["off","OFF"]]), "NAME");
      this.setOutput(true, "PINOPTIONS");
      this.setColour(30);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['while'] = {
    init: function() {
      this.appendValueInput("FIRST")
          .setCheck(null)
          .appendField("WHILE");
      this.appendValueInput("SECOND")
          .setCheck(null)
          .appendField(new Blockly.FieldDropdown([["==","EQUALS"], ["<","LT"], [">","GT"], ["<=","LTE"], [">=","GTE"], ["!=","NOT"]]), "OPERATORS");
      this.appendStatementInput("CONDITIONS")
          .setCheck("CONDITION");
      this.appendStatementInput("BODY")
          .setCheck(null);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(75);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['condition'] = {
    init: function() {
      this.appendValueInput("NAME")
          .setCheck(null)
          .appendField(new Blockly.FieldDropdown([["and","AND"], ["or","OR"]]), "NAME");
      this.appendValueInput("SECOND")
          .setCheck(null)
          .appendField(new Blockly.FieldDropdown([["==","EQUALS"], ["<","LT"], [">","GT"], ["<=","LTE"], [">=","GTE"], ["!=","NOT"]]), "OPERATORS");
      this.setInputsInline(true);
      this.setPreviousStatement(true, "CONDITION");
      this.setNextStatement(true, "CONDITION");
      this.setColour(135);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['if'] = {
    init: function() {
      this.appendValueInput("FIRST")
          .setCheck(null)
          .appendField("IF");
      this.appendValueInput("SECOND")
          .setCheck(null)
          .appendField(new Blockly.FieldDropdown([["==","EQUALS"], ["<","LT"], [">","GT"], ["<=","LTE"], [">=","GTE"], ["!=","NOT"]]), "OPERATORS");
      this.appendStatementInput("CONDITIONS")
          .setCheck("CONDITION")
          .appendField("MORE CONDITIONS");
      this.appendStatementInput("BODY")
          .setCheck(null);
      this.appendStatementInput("ELSEIFS")
          .setCheck("ELSEIF")
          .appendField("ELSE IF");
      this.appendStatementInput("ELSE")
          .setCheck(null)
          .appendField("ELSE");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(180);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['elseif'] = {
    init: function() {
      this.appendValueInput("FIRST")
          .setCheck(null)
          .appendField("ELSEIF");
      this.appendValueInput("SECOND")
          .setCheck(null)
          .appendField(new Blockly.FieldDropdown([["==","EQUALS"], ["<","LT"], [">","GT"], ["<=","LTE"], [">=","GTE"], ["!=","NOT"]]), "OPERATORS");
      this.appendStatementInput("CONDITIONS")
          .setCheck("CONDITION")
          .appendField("MORE CONDITIONS");
      this.appendStatementInput("BODY")
          .setCheck(null);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(345);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

Blockly.JavaScript['plan'] = function(block) {
    var value_global = Blockly.JavaScript.valueToCode(block, 'GLOBAL', Blockly.JavaScript.ORDER_ATOMIC);
    var value_setup = Blockly.JavaScript.valueToCode(block, 'SETUP', Blockly.JavaScript.ORDER_ATOMIC);
    var value_loop = Blockly.JavaScript.valueToCode(block, 'LOOP', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };
  
  Blockly.JavaScript['global'] = function(block) {
    var statements_variables = Blockly.JavaScript.statementToCode(block, 'VARIABLES');
    // TODO: Assemble JavaScript into code variable.
    var code = '...';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
  
  Blockly.JavaScript['variable'] = function(block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    var value_value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };
  
  Blockly.JavaScript['setup'] = function(block) {
    var statements_setupoptions = Blockly.JavaScript.statementToCode(block, 'SETUPOPTIONS');
    // TODO: Assemble JavaScript into code variable.
    var code = '...';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
  
  Blockly.JavaScript['pindefinition'] = function(block) {
    var dropdown_pinoptions = block.getFieldValue('PINOPTIONS');
    var value_pin = Blockly.JavaScript.valueToCode(block, 'PIN', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };
  
  Blockly.JavaScript['serial'] = function(block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };
  
  Blockly.JavaScript['serialinit'] = function(block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '...';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
  
  Blockly.JavaScript['print'] = function(block) {
    var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = '...';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
  
  Blockly.JavaScript['prinln'] = function(block) {
    var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = '...';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
  
  Blockly.JavaScript['serialreturnfunctions'] = function(block) {
    var dropdown_serialreturnfunctions = block.getFieldValue('SERIALRETURNFUNCTIONS');
    // TODO: Assemble JavaScript into code variable.
    var code = '...';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
  
  Blockly.JavaScript['servo'] = function(block) {
    var value_servooptions = Blockly.JavaScript.valueToCode(block, 'SERVOOPTIONS', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };
  
  Blockly.JavaScript['servoinit'] = function(block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '...';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
  
  Blockly.JavaScript['servorotate'] = function(block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    var value_angle1 = Blockly.JavaScript.valueToCode(block, 'ANGLE1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_angle2 = Blockly.JavaScript.valueToCode(block, 'ANGLE2', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '...';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
  
  Blockly.JavaScript['time'] = function(block) {
    var dropdown_timeoptions = block.getFieldValue('TIMEOPTIONS');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };
  
  Blockly.JavaScript['display'] = function(block) {
    var value_displayoption = Blockly.JavaScript.valueToCode(block, 'DISPLAYOPTION', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };
  
  Blockly.JavaScript['displayinit'] = function(block) {
    var value_width = Blockly.JavaScript.valueToCode(block, 'WIDTH', Blockly.JavaScript.ORDER_ATOMIC);
    var value_height = Blockly.JavaScript.valueToCode(block, 'HEIGHT', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '...';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
  
  Blockly.JavaScript['loop'] = function(block) {
    var statements_loopoptions = Blockly.JavaScript.statementToCode(block, 'LOOPOPTIONS');
    // TODO: Assemble JavaScript into code variable.
    var code = '...';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
  
  Blockly.JavaScript['pin'] = function(block) {
    var value_pin = Blockly.JavaScript.valueToCode(block, 'PIN', Blockly.JavaScript.ORDER_ATOMIC);
    var value_pinoption = Blockly.JavaScript.valueToCode(block, 'PINOPTION', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };
  
  Blockly.JavaScript['blink'] = function(block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '...';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
  
  Blockly.JavaScript['setvalue'] = function(block) {
    var dropdown_name = block.getFieldValue('NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = '...';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
  
  Blockly.JavaScript['while'] = function(block) {
    var value_first = Blockly.JavaScript.valueToCode(block, 'FIRST', Blockly.JavaScript.ORDER_ATOMIC);
    var dropdown_operators = block.getFieldValue('OPERATORS');
    var value_second = Blockly.JavaScript.valueToCode(block, 'SECOND', Blockly.JavaScript.ORDER_ATOMIC);
    var statements_conditions = Blockly.JavaScript.statementToCode(block, 'CONDITIONS');
    var statements_body = Blockly.JavaScript.statementToCode(block, 'BODY');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };
  
  Blockly.JavaScript['condition'] = function(block) {
    var dropdown_name = block.getFieldValue('NAME');
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    var dropdown_operators = block.getFieldValue('OPERATORS');
    var value_second = Blockly.JavaScript.valueToCode(block, 'SECOND', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };
  
  Blockly.JavaScript['if'] = function(block) {
    var value_first = Blockly.JavaScript.valueToCode(block, 'FIRST', Blockly.JavaScript.ORDER_ATOMIC);
    var dropdown_operators = block.getFieldValue('OPERATORS');
    var value_second = Blockly.JavaScript.valueToCode(block, 'SECOND', Blockly.JavaScript.ORDER_ATOMIC);
    var statements_conditions = Blockly.JavaScript.statementToCode(block, 'CONDITIONS');
    var statements_body = Blockly.JavaScript.statementToCode(block, 'BODY');
    var statements_elseifs = Blockly.JavaScript.statementToCode(block, 'ELSEIFS');
    var statements_else = Blockly.JavaScript.statementToCode(block, 'ELSE');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };
  
  Blockly.JavaScript['elseif'] = function(block) {
    var value_first = Blockly.JavaScript.valueToCode(block, 'FIRST', Blockly.JavaScript.ORDER_ATOMIC);
    var dropdown_operators = block.getFieldValue('OPERATORS');
    var value_second = Blockly.JavaScript.valueToCode(block, 'SECOND', Blockly.JavaScript.ORDER_ATOMIC);
    var statements_conditions = Blockly.JavaScript.statementToCode(block, 'CONDITIONS');
    var statements_body = Blockly.JavaScript.statementToCode(block, 'BODY');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };
