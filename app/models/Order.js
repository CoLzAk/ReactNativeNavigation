import { DeliveryAddress, Cart } from './';

export default class Order {
    static IRONING_SERVICE = 'IRONING';
    static DRY_CLEANING_SERVICE = 'DRY_CLEANING';

    constructor(
        id = null,
        deliveryAddress = new DeliveryAddress(),
        service = null,
        cart = new Cart()
    ) {
        this.id = id;
        this.deliveryAddress = deliveryAddress;
        this.service = service;
        this.cart = cart;
    }
}