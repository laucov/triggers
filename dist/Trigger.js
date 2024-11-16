export class Trigger {
    constructor(name) {
        this.steps = [];
        this.name = name;
    }
    fire(data) {
        this.steps.forEach((s) => s.callback(data));
        this.steps = this.steps.filter((s) => !s.options.once);
    }
    push(callback, options) {
        this.steps.push({ callback: callback, options: options });
        return this;
    }
    remove(callback) {
        this.steps = this.steps.filter((s) => s.callback !== callback);
    }
}
