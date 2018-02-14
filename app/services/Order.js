import dress from '../assets/images/dress.png';
import jacket from '../assets/images/jacket.png';
import skirt from '../assets/images/skirt.png';
import shirt from '../assets/images/shirt.png';

export default class OrderService {
    static getItemsForService(service = null) {
        if (service === null) {
            return [];
        }

        // get items by service
        return [{
            'thumbnail': shirt,
            'name': 'Chemise',
            'price': 8,
            'category': 'tops',
        }, {
            'thumbnail': skirt,
            'name': 'Jupe courte',
            'price': 7,
            'category': 'trousers_and_shorts',
        }, {
            'thumbnail': skirt,
            'name': 'Jupe longue',
            'price': 10,
            'category': 'trousers_and_shorts',
        }, {
            'thumbnail': dress,
            'name': 'Robe',
            'price': 12,
            'category': 'dresses',
        }, {
            'thumbnail': jacket,
            'name': 'Veste',
            'price': 15,
            'category': 'jackets',
        }];
    }

    static getTotal(items) {
        let total = 0;

        items.map((item) => {
            if (item.quantity > 0) {
                total += item.price * item.quantity;
            }

            return item;
        });

        return total;
    }
}