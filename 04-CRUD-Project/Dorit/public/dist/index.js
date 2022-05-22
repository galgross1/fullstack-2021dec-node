var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function handleGetRecipe() {
    console.log("handleGetRecipe");
    var forms = document.querySelector("#forms");
    if (forms)
        forms.remove();
    var html = "";
    html = "\n    <div id=\"forms\">\n    <form onsubmit=\"GetRecipe(event)\">\n    <input type=\"text\" name=\"recipeName\" placeholder=\"Recipe Name\">\n    <button type=\"submit\">Get Recipe</button>\n    </form>\n    </div>";
    var root = document.querySelector("#root");
    root.innerHTML = html;
    root.style.position = "relative";
    root.style.top = "200px";
    root.style.left = "350px";
}
function GetRecipe(event) {
    return __awaiter(this, void 0, void 0, function () {
        var recipeName, data, recipe, error, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("getRecipe");
                    event.preventDefault();
                    recipeName = event.target.elements.recipeName.value;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    console.log("" + recipeName);
                    return [4 /*yield*/, axios.put('/api/get-recipe', { recipeName: recipeName })];
                case 2:
                    data = (_a.sent()).data;
                    console.log({ data: data });
                    recipe = data.recipe, error = data.error;
                    console.log(recipe);
                    if (error)
                        throw new Error(error);
                    renderFullRecipe(recipe);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function handleAddRepipe() {
    console.log("handleAddRecipe");
    var forms = document.querySelector("#forms");
    if (forms)
        forms.remove();
    var html = "";
    html = "\n    <div id=\"forms\">\n        <form onsubmit=\"PostRecipe(event)\">\n            <input type=\"text\" name=\"recipeName\" placeholder=\"Recipe Name\">";
    html += "        \n            <input type=\"text\" name=\"array1[]\" placeholder=\"Ingredients\"/><br>"
        < input;
    type = "text";
    name = "array[]";
    placeholder = "PrepareMode" /  > onclick;
    type;
    "text";
    name = "adderName";
    placeholder = "Name of Adder" /  >
        type;
    "text";
    name = "ingredients";
    placeholder = "Ingredients" >
        type;
    "text";
    name = "prepareMode";
    placeholder = "Prepare Mode" >
        type;
    "text";
    name = "adderName";
    placeholder = "Adder Name" >
        type;
    "submit" > Post;
    Recipe < /button>
        < /form>
        < /div>` ;
    var root = document.querySelector("#root");
    root.innerHTML = html;
    root.style.position = "relative";
    root.style.top = "200px";
    root.style.left = "350px";
}
/** @class */ (function () {
    function class_1() {
    }
    return class_1;
}());
"";
action = "index.html";
method = "post" >
    type;
"text";
name = "array[]";
value = "" /  > type;
"text";
name = "array[]";
value = "" /  > type;
"text";
name = "array[]";
value = "" /  > type;
"text";
name = "array[]";
value = "" /  > type;
"text";
name = "array[]";
value = "" /  > type;
"button";
name = "button";
onclick = "ns()" >
    Submit
    < /button> 
    < /form> 
    < br >
    id;
"var" > /p> 
    < script;
type = "text/javascript" >
;
var v = "The respective values are :";
function ns() {
    var input = document.getElementsByName('array[]');
    for (var i = 0; i < input.length; i++) {
        var p = input[i];
        v = v + "array[" + i + "].value= "
            + p.value + " ";
    }
    document.getElementById("var").innerHTML = v;
    document.getElementById("mv").innerHTML = "Output";
}
/script> ;
function PostRecipe(event) {
    return __awaiter(this, void 0, void 0, function () {
        var myRecipe, data, myRecipe_1, error, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("PostRecipe");
                    event.preventDefault();
                    myRecipe = { event: event, : .target.elements.recipeName.value, event: event, : .target.elements.ingredients.value, event: event, : .target.elements.prepareMode.value, event: event, : .target.elements.adderName.value };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    console.log("" + myRecipe_1);
                    return [4 /*yield*/, axios.post('/api/add-recipe', { myRecipe: myRecipe_1 })];
                case 2:
                    data = (_a.sent()).data;
                    console.log({ data: data });
                    myRecipe_1 = data.myRecipe, error = data.error;
                    console.log(myRecipe_1);
                    if (error)
                        throw new Error(error);
                    renderFullRecipe(myRecipe_1);
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _a.sent();
                    console.error(error_2);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function renderFullRecipe(fullRecipe) {
    console.log("fullRecipe from server:" + fullRecipe);
    var forms = document.querySelector("#forms");
    var html = "";
    html = "<div id=\"name\" color=\"red\">" + fullRecipe.name + "</div>";
    html += "===================================";
    html += "<div id=\"ing\" color=\"red\">Ingredients</div>";
    html += "===================================";
    html += "<br>";
    var ingNo = fullRecipe.ingredients.length;
    for (var i = 0; i < ingNo; i++) {
        html += "<div class=\"ingredients\">" + fullRecipe.ingredients[i] + "</div>";
    }
    html += "===================================";
    html += "<br>";
    html += "<div id=\"pre\" color=\"red\">Prepare Mode</div>";
    html += "===================================";
    html += "<br>";
    var preNo = fullRecipe.prepareMode.length;
    for (var j = 0; j < preNo; j++) {
        html += "<div class=\"prepares\">" + fullRecipe.prepareMode[j] + "</div>";
    }
    forms.innerHTML = html;
    forms.style.position = "absolute";
    forms.style.top = "150px";
    forms.style.left = "350px";
    forms.style.border = "1px solid black";
    forms.style.backgroundColor = "yellow";
}
