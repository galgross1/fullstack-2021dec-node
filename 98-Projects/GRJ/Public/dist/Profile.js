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
function getUserId() {
    try {
        var queryString = window.location.search;
        var urlParams = new URLSearchParams(queryString);
        var userId = urlParams.get("userId");
        console.log(userId);
        return userId;
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
function onscondPageLoad() {
    return __awaiter(this, void 0, void 0, function () {
        var userId, data, error, userDB, name, email, nav, nav, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    userId = getUserId();
                    if (!userId)
                        throw new Error("couldnt find user id in url");
                    return [4 /*yield*/, axios.post("/profile/get-name", { userId: userId })];
                case 1:
                    data = (_a.sent()).data;
                    error = data.error, userDB = data.userDB;
                    console.log(data);
                    if (error)
                        throw error;
                    name = data.name;
                    email = data.email;
                    if (name) {
                        nav = document.querySelector("#Navbar");
                        nav.innerHTML = "<img\n      src=\"https://toppng.com/uploads/preview/medical-symbol-11563573249uiwcpj6pbe.png\"/>\n      <h1>Hello " + name + "! What would you like to do?</h1>";
                    }
                    else {
                        nav = document.querySelector("#Navbar");
                        nav.innerHTML = "<img src=\"https://toppng.com/uploads/preview/medical-symbol-11563573249uiwcpj6pbe.png\"/>\n      <h1>Hello " + email + "! What would you like to do?</h1>";
                    }
                    renderAll(data);
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.log(error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function renderAll(data) {
    var userDB = data;
    var html = "";
    html = "<div class=\"ScheduleApointmant\">\n   <button class=\"scheduleMeeting\">\n     <a href=\"./ScheduleAppo.html?userId=" + userDB._id + "\" alt=\"scheduleMeeting\">\n       <i id=\"calenderPlusIcon\" class=\"fas fa-calendar-plus\"></i>\n     </a>\n   </button>\n   <p>schedule a meeting</p>\n </div>\n <div>\n   <button class=\"scheduleMeeting\">\n     <a href=\"./myMeetings.html?userId=" + userDB._id + "\" alt=\"my meetings\">\n     <i class=\"fas fa-calendar-check\"></i>\n   </a>\n   </button>\n   <p>check my meetings</p>\n </div>\n <div>\n   <button class=\"ContactADoctor\">\n     <a href=\"./Connect.html?userId=" + userDB._id + "\" alt=\"online Doctor\">\n       <i class=\"fas fa-comment-medical\"></i>\n     </a>\n     </button>\n     <p>online Doctor</p>\n </div>\n <div>\n <button class=\"ContactADoctor\">\n <a href=\"./createAppo.html?userId=" + userDB._id + "\" alt=\"online Doctor\">\n   <i class=\"fas fa-user-md\"></i>\n </a>\n <p>Scheduling the Doctors</p>\n</button>\n\n</div>\n\n\n";
    var actions = document.querySelector('#actions');
    actions.innerHTML = html;
}
