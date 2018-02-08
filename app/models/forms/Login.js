import t from 'tcomb-form-native';
import template from '../../helpers/form';

export default class Login {
    getType() {
        return t.struct({
            email: t.String,
            password: t.String,
        });
    }

    getOptions() {
        return {
            fields: {
                email: {
                    template: template.textbox,
                },
                password: {
                    template: template.textbox,
                },
            }
        }
    }
}