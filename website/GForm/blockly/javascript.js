Blockly.JavaScript['gform1'] = function(block) {
    var value_url = Blockly.JavaScript.valueToCode(block, 'url', Blockly.JavaScript.ORDER_ATOMIC);
    var value_interval = Blockly.JavaScript.valueToCode(block, 'interval', Blockly.JavaScript.ORDER_ATOMIC);
    var value_field = Blockly.JavaScript.valueToCode(block, 'field1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_value = Blockly.JavaScript.valueToCode(block, 'value1', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.

    var code = `
        gform_count++;
        if (gform_count % INTERVAL==0) {
            var obj = {};
            obj[FIELD] = VALUE;
            post_to_gform(URL, obj);
        }
    `;
    
    code = code.replace(/URL/, value_url);
    code = code.replace(/INTERVAL/, value_interval);
    code = code.replace(/FIELD/, value_field);
    code = code.replace(/VALUE/, value_value);

    return code;
};

Blockly.JavaScript['gform2'] = function(block) {
    var value_url = Blockly.JavaScript.valueToCode(block, 'url', Blockly.JavaScript.ORDER_ATOMIC);
    var value_interval = Blockly.JavaScript.valueToCode(block, 'interval', Blockly.JavaScript.ORDER_ATOMIC);
    var value_field1 = Blockly.JavaScript.valueToCode(block, 'field1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_value1 = Blockly.JavaScript.valueToCode(block, 'value1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_field2 = Blockly.JavaScript.valueToCode(block, 'field2', Blockly.JavaScript.ORDER_ATOMIC);
    var value_value2 = Blockly.JavaScript.valueToCode(block, 'value2', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.

    var code = `
        gform_count++;
        if (gform_count % INTERVAL==0) {
            var obj = {};
            obj[FIELD1] = VALUE1;
            obj[FIELD2] = VALUE2;
            post_to_gform(URL, obj);
        }
    `;
    
    code = code.replace(/URL/, value_url);
    code = code.replace(/INTERVAL/, value_interval);
    code = code.replace(/FIELD1/, value_field1);
    code = code.replace(/VALUE1/, value_value1);
    code = code.replace(/FIELD2/, value_field2);
    code = code.replace(/VALUE2/, value_value2);

    return code;
};

Blockly.JavaScript['gform3'] = function(block) {
    var value_url = Blockly.JavaScript.valueToCode(block, 'url', Blockly.JavaScript.ORDER_ATOMIC);
    var value_interval = Blockly.JavaScript.valueToCode(block, 'interval', Blockly.JavaScript.ORDER_ATOMIC);
    var value_field1 = Blockly.JavaScript.valueToCode(block, 'field1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_value1 = Blockly.JavaScript.valueToCode(block, 'value1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_field2 = Blockly.JavaScript.valueToCode(block, 'field2', Blockly.JavaScript.ORDER_ATOMIC);
    var value_value2 = Blockly.JavaScript.valueToCode(block, 'value2', Blockly.JavaScript.ORDER_ATOMIC);
    var value_field3 = Blockly.JavaScript.valueToCode(block, 'field3', Blockly.JavaScript.ORDER_ATOMIC);
    var value_value3 = Blockly.JavaScript.valueToCode(block, 'value3', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.

    var code = `
        gform_count++;
        if (gform_count % INTERVAL==0) {
            var obj = {};
            obj[FIELD1] = VALUE1;
            obj[FIELD2] = VALUE2;
            obj[FIELD3] = VALUE3;
            post_to_gform(URL, obj);
        }
    `;
    
    code = code.replace(/URL/, value_url);
    code = code.replace(/INTERVAL/, value_interval);
    code = code.replace(/FIELD1/, value_field1);
    code = code.replace(/VALUE1/, value_value1);
    code = code.replace(/FIELD2/, value_field2);
    code = code.replace(/VALUE2/, value_value2);
    code = code.replace(/FIELD3/, value_field3);
    code = code.replace(/VALUE3/, value_value3);

    return code;
};
