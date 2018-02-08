import t from 'tcomb-form-native';

import template from '../../helpers/form';

export default class Register{
    getType() {
        return t.struct({
            email: t.String,
            password: t.String,
            passwordVerification: t.String,
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
                passwordVerification: {
                    template: template.textbox,
                },
            }
        }
    }
}