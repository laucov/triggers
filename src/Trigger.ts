export type Callback<T> = (data: T) => void;

export interface Options
{
    once: boolean;
}

export interface Step<T>
{
    callback: Callback<T>;
    options: Partial<Options>;
}

export default class Trigger<T>
{
    /**
     * Trigger name.
     */
    public readonly name: string;

    /**
     * Callbacks.
     */
    protected steps: Step<T>[] = [];

    /**
     * Create the trigger instance.
     */
    public constructor(name: string)
    {
        this.name = name;
    }

    /**
     * Execute all callbacks.
     */
    public fire(data: T): void
    {
        this.steps.forEach((s) => s.callback(data));
        this.steps = this.steps.filter((s) => !s.options.once);
    }

    /**
     * Push a callback.
     */
    public push(callback: Callback<T>, options: Partial<Options>): this
    {
        this.steps.push({callback: callback, options: options});
        return this;
    }

    /**
     * Remove a callback.
     */
    public remove(callback: Callback<T>): void
    {
        this.steps = this.steps.filter((s) => s.callback !== callback);
    }
}
