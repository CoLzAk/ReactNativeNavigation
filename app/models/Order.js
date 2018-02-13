import { OrderItemCollection } from './';

export default class Order {
    static IRONING_SERVICE = 'IRONING';
    static DRY_CLEANING_SERVICE = 'DRY_CLEANING';

    constructor(
        id = null,
        deliveryAddress = null,
        service = null,
        items = new OrderItemCollection()
    ) {
        this.id = id;
        this.deliveryAddress = deliveryAddress;
        this.service = service;
        this.items = items;
    }
}