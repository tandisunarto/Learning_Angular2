import { Ingridient } from 'app/shared';

export class Recipe {
    private _name: string;
    private _description: string;
    private _imagePath: string;

    get name(): string {
        return this._name;
    }
    set name(value: string) {
        this._name = value;
    }

    get description(): string {
        return this._description;
    }
    set description(value: string) {
        this._description = value;
    }

    get imagePath(): string {
        return this._imagePath;
    }
    set imagePath(value: string) {
        this._imagePath = value;
    }

    constructor(name: string, description: string, imagePath: string, ingridient: Ingridient[] ) {
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
    }
}
