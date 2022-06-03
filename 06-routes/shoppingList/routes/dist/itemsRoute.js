"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var itemsCont_1 = require("../cont/itemsCont");
var itemsCont_2 = require("../cont/itemsCont");
var itemsCont_3 = require("../cont/itemsCont");
router
    .patch("/updateItem", itemsCont_1.HandleUpdateItem)["delete"]("/delete-item", itemsCont_2.deleteItem)
    .post("/addItem", itemsCont_3.addItem);
exports["default"] = router;
