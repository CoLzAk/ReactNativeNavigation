export default class Place {
    constructor(
        id,
        address,
        name = null,
    ) {
        this.id = id;
        this.address = address;
        this.name = name;
    }
}