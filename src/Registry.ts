import Trigger, { Callback, Options } from "./Trigger";

export interface Map
{
}

export default class Registry<T extends Map = Map>
{
    /**
     * Registered callback groups.
     */
    protected triggers: {[Key in keyof T]?: Trigger<T[Key]>} = {};

    /**
     * Register a new trigger.
     */
    public add<U extends keyof T & string>(
        name: U,
        callback: Callback<T[U]>,
        options: Partial<Options> = {},
    ): this {
        this.triggers[name] ??= new Trigger(name);
        this.triggers[name]?.push(callback, options);
        return this;
    }

    /**
     * Fire a registered trigger.
     */
    public fire<U extends keyof T & string>(name: U, data: T[U]): void
    {
        this.triggers[name]?.fire(data);
    }

    /**
     * Remove a registered trigger.
     */
    public remove<U extends keyof T & string>(
        name: U,
        callback?: Callback<T[U]>,
    ): this {
        if (callback) {
            this.triggers[name]?.remove(callback);
        } else {
            delete this.triggers[name];
        }
        return this;
    }
}
