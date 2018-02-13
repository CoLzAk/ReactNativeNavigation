export default class OrderItemCollection {
    constructor(items = []) {
        this.items = items;
    }

    add(item) {
        this.items.push(item);

        return this;
    }

    remove(item) {
        let itemIndex = this.items.filter((currentItem) => {
            return currentItem === item;
        });
        this.items.splice(itemIndex, 1);

        return this;
    }

    static initialize(availableItems = []) {
        return availableItems.map((item) => {
            item['quantity'] = 0;

            return item;
        });
    }
}
