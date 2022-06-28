"use strict";
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
exports.__esModule = true;
;
var users = [];
// not fixed
function getUsers(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var data, users_1, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios.get('/users/get-users')];
                case 1:
                    data = (_a.sent()).data;
                    users_1 = data.users;
                    if (!Array.isArray(users_1))
                        throw new Error("Error");
                    renderUsers(users_1);
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [2 /*return*/, false];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function handleAddUser(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var elements, userName, email, password, data, user, error, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    ev.preventDefault();
                    elements = ev.target.elements;
                    userName = elements.userName.value;
                    email = elements.email.value;
                    password = elements.permissions.value;
                    console.log(userName, email, password);
                    if (!userName || !email || !password)
                        throw new Error("Details are required");
                    return [4 /*yield*/, axios.post('/users/add-user', {
                            userName: userName,
                            email: email,
                            password: password
                        })];
                case 1:
                    data = (_a.sent()).data;
                    user = data.user, error = data.error;
                    if (error)
                        throw new Error(error);
                    renderUsers(users);
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    console.error(error_2);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
;
function renderUsers(users) {
    var html = '';
    users.forEach(function (user) {
        html += "<div class=\"screen__card-wrapper\" id=\"" + user.email + "\">\n    <h3 class=\"screen__title-h3__white\">" + user.userName + "</h3>\n    <div class=\"screen__card-wrapper__actions\">\n        <img onclick=\"handleUpdateUser('" + user.email + "')\" class=\"screen__card-wrapper__actions__icon\" src=\" ./icons/pencil.svg\" alt=\"edit\">\n        <img onclick=\"handleDeleteUser('" + user.email + "')\" class=\"screen__card-wrapper__actions__icon\" src=\"./icons/trash.svg\" alt=\"delete\">\n    </div>\n    </div>";
    });
    var root = document.querySelector('#usersTasks');
    root.innerHTML = html;
}
//   const queryString = window.location.search;
function handleDelete(event) {
    return __awaiter(this, void 0, void 0, function () {
        var userId, data, users_2, error, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    console.log("delete button pressed");
                    userId = event.target.id;
                    return [4 /*yield*/, axios["delete"]("/users/delelte-user", { data: { userId: userId, userId: userId } })];
                case 1:
                    data = (_a.sent()).data;
                    users_2 = data.users, error = data.error;
                    renderUsers(users_2);
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _a.sent();
                    console.error(error_3);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function handleUpdateUser(userId) {
    return __awaiter(this, void 0, void 0, function () {
        var newName, data, users;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    newName = prompt('Enter new user name');
                    return [4 /*yield*/, axios.patch('/users/update-user', { email: email, newName: newName })];
                case 1:
                    data = (_a.sent()).data;
                    users = data.users;
                    if (!Array.isArray(users))
                        throw new Error("users should be an array");
                    renderUsers(users);
                    return [2 /*return*/];
            }
        });
    });
}
// async function getUserByCookie() {
//     try{
//     //@ts-ignore
//     const { data } = await axios.get("/user/get-userCookie");
//     console.log(data);
//     const {user} = data;
//     if(!user){
//         throw new Error('User not found');
//     }
//     const usernameDB = user.username;
//     const root = document.getElementById('root');
//     if(root){
//         root.innerHTML = `<h1>Welcome ${usernameDB}</h1>`
//     }
//     } catch (error) {
//         console.error(error)
//     }
// }
