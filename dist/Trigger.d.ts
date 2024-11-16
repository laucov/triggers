export type Callback<T> = (data: T) => void;
export interface Options {
    once: boolean;
}
export interface Step<T> {
    callback: Callback<T>;
    options: Partial<Options>;
}
export declare class Trigger<T> {
    readonly name: string;
    protected steps: Step<T>[];
    constructor(name: string);
    fire(data: T): void;
    push(callback: Callback<T>, options: Partial<Options>): this;
    remove(callback: Callback<T>): void;
}
