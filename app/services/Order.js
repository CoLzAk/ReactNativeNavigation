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
            'name': 'shirt',
            'price': 8,
            'category': 'tops',
        }, {
            'thumbnail': skirt,
            'name': 'short_skirt',
            'price': 7,
            'category': 'trousers_and_shorts',
        }, {
            'thumbnail': skirt,
            'name': 'long_skirt',
            'price': 10,
            'category': 'trousers_and_shorts',
        }, {
            'thumbnail': dress,
            'name': 'dress',
            'price': 12,
            'category': 'dresses',
        }, {
            'thumbnail': jacket,
            'name': 'jacket',
            'price': 15,
            'category': 'jackets',
        }];
    }
}