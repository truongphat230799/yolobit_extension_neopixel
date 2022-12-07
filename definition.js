Blockly.Blocks['yolobit_neopixel_setup'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "yolobit_neopixel_setup",
        "message0": "khởi tạo dây led Neopixel chân  %1 số led %3 %2",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "pin",
            "options": [
              [
                "P0",
                "pin0"
              ],
              [
                "P1",
                "pin1"
              ],
              [
                "P2",
                "pin2"
              ],
              [
                "P3",
                "pin3"
              ],
              [
                "P4",
                "pin4"
              ],
              [
                "P5",
                "pin5"
              ],
              [
                "P6",
                "pin6"
              ],
              [
                "P7",
                "pin7"
              ],
              [
                "P8",
                "pin8"
              ],
              [
                "P9",
                "pin9"
              ],
              [
                "P10",
                "pin10"
              ],
              [
                "P11",
                "pin11"
              ],
              [
                "P12",
                "pin12"
              ],
              [
                "P13",
                "pin13"
              ],
              [
                "P14",
                "pin14"
              ],
              [
                "P15",
                "pin15"
              ],
              [
                "P16",
                "pin16"
              ]
            ]
          },
          {
            "type": "input_dummy",
          },
          {
            "type": "input_value",
            "name": "neo",
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#bf42bf",
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};

Blockly.Blocks['yolobit_neopixel_color'] = {
  init: function() {
    this.jsonInit({      
      "type": "yolobit_neopixel_color",
      "message0": "đổi màu dây led Neopixel %1 %2",
      "args0": [
        { "type": "input_value", "name": "COLOR" },
        { "type": "input_dummy" }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#bf42bf",
      "tooltip": "",
      "helpUrl": ""      
    });
  }
};

Blockly.Blocks["yolobit_neopixel_effect"] = {
  init: function () {    
    this.jsonInit({
      "message0": "dây led chạy hiệu ứng %1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "effect",
          "options": [            
              [
                 "wipe","wipe_effect()",
              ],
              [
                "dim","dim_effect()",
              ],
              [
                "twinkle","twinkle_effect()",
              ],
              [
                "sparkle","spakle_effect()",
              ],
              [
                "thearter","theaterChase_effect()",
              ],
              [
                "bounce","bounce_effect()",
              ],
              [
                "firework","firework_effect()",
              ],
              [
                "rainbow","rainbow_effect()",
              ],
              [
                "cycle","cycle_effect()",
              ],        
          ],
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#bf42bf",
      "tooltip": "",
      "helpUrl": "",
    });
  },
};

Blockly.Blocks['neopixel_show_index_rgb_led'] = {
  init: function () {
    this.jsonInit(
      {
        "type": "neopixel_show_index_rgb_led",
        "message0": "đổi màu led thứ %1 thành %2",
        "args0": [
          {
            "type": "input_value",
            "name": "number_led"
          },
          {
            "type": "input_value",
            "name": "color"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#bf42bf",
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};



// Any imports need to be reserved words
//Blockly.Python.addReservedWords('neopixel');
//Blockly.Python.addReservedWords('led_strip');
//Blockly.Python.addReservedWords('led_strip');

Blockly.Python['yolobit_neopixel_setup'] = function(block) {
  Blockly.Python.definitions_['import_display'] = 'from yolobit import *';
  Blockly.Python.definitions_['import_machine'] = 'import machine';
  Blockly.Python.definitions_['import_led_strip'] = 'import led_strip';
  Blockly.Python.definitions_['import_neopixel'] = 'import neopixel';
  var dropdown_pin = block.getFieldValue('pin');
  var number_neo = Blockly.Python.valueToCode(block, 'neo', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'strips = led_strip.Led_Strip(' + dropdown_pin + "," + number_neo + ")";
  return code;
};

Blockly.Python['yolobit_neopixel_color'] = function(block) {
  var value_color = Blockly.Python.valueToCode(block, 'COLOR', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = "strips.set_hex_color(" + value_color + ")\n";
  return code;
};

Blockly.Python['yolobit_neopixel_effect'] = function(block) {
  var dropdown_effect = block.getFieldValue('effect');
  var code = 'strips.' + dropdown_effect + '\n';
return code;
};

Blockly.Python['neopixel_show_index_rgb_led'] = function (block) {
  var value_number_led = Blockly.Python.valueToCode(block, 'number_led', Blockly.Python.ORDER_ATOMIC);
  var value_color = Blockly.Python.valueToCode(block, 'color', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'strips.show_index_led(' + value_number_led + ', hex_to_rgb(' + value_color + '))\n';
  return code;
};
