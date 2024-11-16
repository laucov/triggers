import { Trigger } from "./Trigger";
export class Registry {
    constructor() {
        this.triggers = {};
    }
    add(name, callback, options = {}) {
        var _a, _b;
        var _c;
        (_a = (_c = this.triggers)[name]) !== null && _a !== void 0 ? _a : (_c[name] = new Trigger(name));
        (_b = this.triggers[name]) === null || _b === void 0 ? void 0 : _b.push(callback, options);
        return this;
    }
    fire(name, data) {
        var _a;
        (_a = this.triggers[name]) === null || _a === void 0 ? void 0 : _a.fire(data);
    }
    remove(name, callback) {
        var _a;
        if (callback) {
            (_a = this.triggers[name]) === null || _a === void 0 ? void 0 : _a.remove(callback);
        }
        else {
            delete this.triggers[name];
        }
        return this;
    }
}
