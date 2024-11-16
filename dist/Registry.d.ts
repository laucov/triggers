import { Trigger, Callback, Options } from "./Trigger";
export interface TriggerMap {
}
export declare class Registry<T extends TriggerMap = TriggerMap> {
    protected triggers: {
        [Key in keyof T]?: Trigger<T[Key]>;
    };
    add<U extends keyof T & string>(name: U, callback: Callback<T[U]>, options?: Partial<Options>): this;
    fire<U extends keyof T & string>(name: U, data: T[U]): void;
    remove<U extends keyof T & string>(name: U, callback?: Callback<T[U]>): this;
}
