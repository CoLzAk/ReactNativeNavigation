export default class Cart {
    constructor(
        items = [],
    ) {
        this.items = items;
    }

    add(item) {
        this.items.map((currentItem) => {
            if (item === currentItem) {
                currentItem.quantity++;
            }

            return currentItem;
        });

        return this;
    }

    contains(item) {
        return this.items.filter((currentItem) => {
            return currentItem === item;
        }) > -1;
    }

    remove(item) {
        this.items.map((currentItem) => {
            if (item === currentItem) {
                currentItem.quantity--;
            }

            return currentItem;
        });

        return this;
    }
}
