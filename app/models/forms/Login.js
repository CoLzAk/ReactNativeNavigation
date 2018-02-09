import t from 'tcomb-form-native';

export default class Login {
    getType() {
        return t.struct({
            email: t.String,
            password: t.String,
        });
    }

    getOptions() {
        return {}
    }
}