export default class OrderItemCollection {
    static initialize(availableItems = []) {
        return availableItems.map((item) => {
            item['quantity'] = 0;

            return item;
        });
    }
}