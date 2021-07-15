class Store {
    private _name: string;
    private _city: string;
    private _country: string;
    private _category: string;

    constructor(name: string, city: string, country: string, cateogry: string) {
        this._name = name;
        this._city = city;
        this._country = country;
        this._category = cateogry;
    }

    public clone() :Store {
        return new Store(
            this.name,
            this.city,
            this.country,
            this.category
        );
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get city(): string {
        return this._city;
    }

    set city(value: string) {
        this._city = value;
    }

    get country(): string {
        return this._country;
    }

    set country(value: string) {
        this._country = value;
    }

    get category(): string {
        return this._category;
    }

    set category(value: string) {
        this._category = value;
    }
}

export default Store;