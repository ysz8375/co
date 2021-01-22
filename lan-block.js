//编写：白篮 可以随便那去用（不嫌我做的简陋的话hhh
//集成了海龟库、easygui和岛三常用代码
Blockly.Blocks['eb-halloworld'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("显示：你好，世界！");
        this.setPreviousStatement(true, "String");
        this.setNextStatement(true, "String");
        this.setColour(120);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};
Blockly.Python['eb-halloworld'] = function(block) {
    var code = '#/usr/bin/env python\n# -*- coding: UTF-8 -*-\nimport easygui as g\ng.msgbox("你好，世界！")';
    return code;
};

Blockly.Blocks['eb-halloworld-1'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("显示：你好，世界！按钮：好的");
        this.setPreviousStatement(true, "String");
        this.setNextStatement(true, "String");
        this.setColour(120);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};
Blockly.Python['eb-halloworld-1'] = function(block) {
    var code = '#/usr/bin/env python\n# -*- coding: UTF-8 -*-\nimport easygui as g\ng.msgbox("你好，世界！", ok_button="好的")';
    return code;
};

Blockly.Blocks['savebox'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("保存盒（savebox）");
        this.setPreviousStatement(true, "String");
        this.setNextStatement(true, "String");
        this.setColour(120);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};
Blockly.Python['savebox'] = function(block) {
    var code = '#/usr/bin/env python\n# -*- coding: UTF-8 -*-\nimport easygui as g\ng.filesavebox(msg=None,title=None,filetypes=None)';
    return code;
};

Blockly.Blocks['fileopenbox'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("打开盒（fileopenbox）");
        this.setPreviousStatement(true, "String");
        this.setNextStatement(true, "String");
        this.setColour(120);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};
Blockly.Python['fileopenbox'] = function(block) {
    var code = '#/usr/bin/env python\n# -*- coding: UTF-8 -*-\nimport easygui as g\ng.fileopenbox(msg=None, title=None, filetypes=None, multiple=False)';
    return code;
};

Blockly.Blocks['codebox'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("代码盒（codebox）");
        this.setPreviousStatement(true, "String");
        this.setNextStatement(true, "String");
        this.setColour(120);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};
Blockly.Python['codebox'] = function(block) {
    var code = '#/usr/bin/env python\n# -*- coding: UTF-8 -*-\nimport easygui as g\ng.codebox(msg="",title="",text="")';
    return code;
};

Blockly.Blocks['passwordbox'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("密码盒（passwordbox）");
        this.setPreviousStatement(true, "String");
        this.setNextStatement(true, "String");
        this.setColour(120);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};
Blockly.Python['passwordbox'] = function(block) {
    var code = '#/usr/bin/env python\n# -*- coding: UTF-8 -*-\nimport easygui as g\ng.passwordbox(msg="请输入密码", title="", default="", image=None, root=None)';
    return code;
};

Blockly.Blocks['boolbox'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("布尔盒（boolbox）");
        this.setPreviousStatement(true, "String");
        this.setNextStatement(true, "String");
        this.setColour(120);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};
Blockly.Python['boolbox'] = function(block) {
    var code = '#/usr/bin/env python\n# -*- coding: UTF-8 -*-\nimport easygui as g\ng.boolbox(msg="1+1=？", title="", choices=("1", "2"), image=None, default_choice="yes", cancel_choice="no")';
    return code;
};
//以上是easygui
Blockly.Blocks.draw_move = {
        init: function() {
            var a = [
                ["前进", "forward"],
                ["后退", "backward"]
            ];
            this.setColour(160),
                this.appendValueInput("VALUE").setCheck("Number").appendField(new Blockly.FieldDropdown(a), "DIR"),
                this.setPreviousStatement(!0),
                this.setNextStatement(!0)
        }
    },

    Blockly.Python.draw_move = function(block) {
        Blockly.Python.definitions_.import_turtle = "import turtle\nturtle=turtle.Turtle()";
        var b = Blockly.Python.valueToCode(block, "VALUE", Blockly.Python.ORDER_NONE) || "0";
        return "turtle." + block.getFieldValue("DIR") + "(" + b + ")\n"
    },

    Blockly.Blocks.draw_turn = {
        init: function() {
            var a = [
                ["向右转", "right"],
                ["向左转", "left"]
            ];
            a[0][0] += " ↻",
                a[1][0] += " ↺",
                this.setColour(160),
                this.appendValueInput("VALUE").setCheck("Number").appendField(new Blockly.FieldDropdown(a), "DIR"),
                this.setPreviousStatement(!0),
                this.setNextStatement(!0)
        }
    },
    Blockly.Python.draw_turn = function(a) {
        Blockly.Python.definitions_.import_turtle = "import turtle\nturtle=turtle.Turtle()";
        var b = Blockly.Python.valueToCode(a, "VALUE", Blockly.Python.ORDER_NONE) || "0";
        return "turtle." + a.getFieldValue("DIR") + "(" + b + ")\n"
    },
    Blockly.Blocks.draw_shape = {
        init: function() {
            var a = [
                ["形状", "turtle"],
                ["圆圈", "circle"],
                ["标准形状", "classic"],
                ["正方形", "square"],
                ["三角形", "triangle"]
            ];
            this.setColour(160),
                this.appendDummyInput().appendField(new Blockly.FieldDropdown(a), "SHAPE"),
                this.setPreviousStatement(!0),
                this.setNextStatement(!0)
        }
    },
    Blockly.Python.draw_shape = function(a) {
        return Blockly.Python.definitions_.import_turtle = "import turtle\nturtle=turtle.Turtle()",
            'turtle.shape("' + a.getFieldValue("SHAPE") + '")\n'
    },
    Blockly.Blocks.draw_pen = {
        init: function() {
            var a = [
                ["画笔抬起", "penup"],
                ["画笔按下", "pendown"]
            ];
            this.setColour(160),
                this.appendDummyInput().appendField(new Blockly.FieldDropdown(a), "PEN"),
                this.setPreviousStatement(!0),
                this.setNextStatement(!0)
        }
    },
    Blockly.Python.draw_pen = function(a) {
        return Blockly.Python.definitions_.import_turtle = "import turtle\nturtle=turtle.Turtle()",
            "turtle." + a.getFieldValue("PEN") + "()\n"
    },
    Blockly.Blocks.draw_color = {
        init: function() {
            this.setColour(160),
                this.appendValueInput("COLOR").appendField("颜色"),
                this.setPreviousStatement(!0),
                this.setNextStatement(!0)
        }
    },
    Blockly.Python.draw_color = function(a) {
        Blockly.Python.definitions_.import_turtle = "import turtle\nturtle=turtle.Turtle()";
        var b = Blockly.Python.valueToCode(a, "COLOR", Blockly.Python.ORDER_NONE) || "#FFFFFF";
        return "turtle.color(" + b + ")\n"
    },
    Blockly.Blocks.draw_write = {
        init: function() {
            this.setColour(160),
                this.appendValueInput("STRING").appendField("打印");
            var a = new Blockly.FieldTextInput("14", Blockly.FieldTextInput.nonnegativeIntegerValidator);
            this.appendDummyInput().appendField("字体大小").appendField(a, "FONTSIZE"),
                this.setPreviousStatement(!0),
                this.setNextStatement(!0)
        }
    },
    Blockly.Python.draw_write = function(a) {
        Blockly.Python.definitions_.import_turtle = "import turtle\nturtle=turtle.Turtle()";
        var b = Blockly.Python.valueToCode(a, "STRING", Blockly.Python.ORDER_NONE) || "",
            c = a.getFieldValue("FONTSIZE");
        return "turtle.write(" + b + ', None, None, "' + c + 'pt normal")\n'
    },
    Blockly.Blocks.draw_circle = {
        init: function() {
            this.setColour(160),
                this.appendValueInput("VALUE").appendField("圆圈"),
                this.setPreviousStatement(!0),
                this.setNextStatement(!0)
        }
    },
    Blockly.Python.draw_circle = function(a) {
        Blockly.Python.definitions_.import_turtle = "import turtle\nturtle=turtle.Turtle()";
        var b = Blockly.Python.valueToCode(a, "VALUE", Blockly.Python.ORDER_NONE) || "50";
        return "turtle.circle(" + b + ")\n"
    },
    Blockly.Blocks.draw_stamp = {
        init: function() {
            this.setColour(160),
                this.appendDummyInput().appendField("印记"),
                this.setPreviousStatement(!0),
                this.setNextStatement(!0)
        }
    },
    Blockly.Python.draw_stamp = function(a) {
        return Blockly.Python.definitions_.import_turtle = "import turtle\nturtle=turtle.Turtle()",
            "turtle.stamp()\n"
    },
    Blockly.Blocks.begin_fill = {
        init: function() {
            this.setColour(160),
                this.appendDummyInput().appendField("开始填充"),
                this.setPreviousStatement(!0),
                this.setNextStatement(!0)
        }
    },
    Blockly.Python.begin_fill = function(a) {
        return Blockly.Python.definitions_.import_turtle = "import turtle\nturtle=turtle.Turtle()",
            "turtle.begin_fill()\n"
    },
    Blockly.Blocks.end_fill = {
        init: function() {
            this.setColour(160),
                this.appendDummyInput().appendField("结束填充"),
                this.setPreviousStatement(!0),
                this.setNextStatement(!0)
        }
    },
    Blockly.Python.end_fill = function(a) {
        return Blockly.Python.definitions_.import_turtle = "import turtle\nturtle=turtle.Turtle()",
            "turtle.end_fill()\n"
    },
    Blockly.Blocks["goto"] = {
        init: function() {
            this.setColour(160),
                this.appendDummyInput().appendField("转到"),
                this.appendValueInput("X"),
                this.appendValueInput("Y").appendField(","),
                this.setInputsInline(!0),
                this.setPreviousStatement(!0),
                this.setNextStatement(!0)
        }
    },
    Blockly.Python["goto"] = function(a) {
        Blockly.Python.definitions_.import_turtle = "import turtle\nturtle=turtle.Turtle()";
        var b = Blockly.Python.valueToCode(a, "X", Blockly.Python.ORDER_NONE) || "0",
            c = Blockly.Python.valueToCode(a, "Y", Blockly.Python.ORDER_NONE) || "0";
        return "turtle.goto(" + b + "," + c + ")\n"
    },
    Blockly.Blocks.draw_speed = {
        init: function() {
            this.setColour(160),
                this.appendValueInput("VALUE").appendField("速度"),
                this.setPreviousStatement(!0),
                this.setNextStatement(!0)
        }
    },
    Blockly.Python.draw_speed = function(a) {
        Blockly.Python.definitions_.import_turtle = "import turtle\nturtle=turtle.Turtle()";
        var b = Blockly.Python.valueToCode(a, "VALUE", Blockly.Python.ORDER_NONE) || "50";
        return "turtle.speed(" + b + ")\n"
    },
    Blockly.Blocks.draw_pos = {
        init: function() {
            this.setColour(160),
                this.appendDummyInput().appendField("位置"),
                this.setOutput(!0)
        }
    },
    Blockly.Python.draw_pos = function(a) {
        Blockly.Python.definitions_.import_turtle = "import turtle\nturtle=turtle.Turtle()";
        return ["turtle.pos()", Blockly.Python.ORDER_ATOMIC]
    }
    //以上是海龟库
Blockly.Blocks['box31'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("系统发言");
        this.setPreviousStatement(true, "String");
        this.setNextStatement(true, "String");
        this.setColour(270);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};
Blockly.JavaScript['box31'] = function(block) {
    var code = 'world.say("*")';
    return code;
};

Blockly.Blocks['box32'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("玩家发言");
        this.setPreviousStatement(true, "String");
        this.setNextStatement(true, "String");
        this.setColour(270);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};
Blockly.JavaScript['box32'] = function(block) {
    var code = 'forEach((x) => {if (x.player.name == "玩家") {x.say("hello")}}) ';
    return code;
};

Blockly.Blocks['box33'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("玩家飞行");
        this.setPreviousStatement(true, "String");
        this.setNextStatement(true, "String");
        this.setColour(270);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};
Blockly.JavaScript['box33'] = function(block) {
    var code = 'forEach((x) => {if (x.player.name == "玩家") {x.player.canFly = true}});';
    return code;
};

Blockly.Blocks['box34'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("无视实体");
        this.setPreviousStatement(true, "String");
        this.setNextStatement(true, "String");
        this.setColour(270);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};
Blockly.JavaScript['box34'] = function(block) {
    var code = 'forEach((x) => {if (x.player.name == "玩家") {x.player.spectator = true}});';
    return code;
};

Blockly.Blocks['box35'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("调整玩家大小");
        this.setPreviousStatement(true, "String");
        this.setNextStatement(true, "String");
        this.setColour(270);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};
Blockly.JavaScript['box35'] = function(block) {
    var code = 'forEach((x) => {if (x.player.name == "玩家") {x.player.scale = 6}})';
    return code;
};

Blockly.Blocks['box36'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("玩家隐身");
        this.setPreviousStatement(true, "String");
        this.setNextStatement(true, "String");
        this.setColour(270);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};
Blockly.JavaScript['box36'] = function(block) {
    var code = 'forEach((x) => {if (x.player.name == "玩家") {x.player.invisible = true}});';
    return code;
};

Blockly.Blocks['box37'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("玩家发光");
        this.setPreviousStatement(true, "String");
        this.setNextStatement(true, "String");
        this.setColour(270);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};
Blockly.JavaScript['box37'] = function(block) {
    var code = 'forEach((x) => {if (x.player.name == "玩家") {x.player.emissive = 2}});';
    return code;
};

Blockly.Blocks['box38'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("玩家死亡");
        this.setPreviousStatement(true, "String");
        this.setNextStatement(true, "String");
        this.setColour(270);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};
Blockly.JavaScript['box38'] = function(block) {
    var code = 'forEach((x) => {if (x.player.name == "玩家") {x.player.Pokering=false}});';
    return code;
};