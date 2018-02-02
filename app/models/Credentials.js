export default class Credentials {
    constructor(
        id,
        email,
        accessToken,
    ) {
        this.id = id;
        this.email = email;
        this.accessToken = accessToken;
    }

    static constructFromData(data) {
        data.id = Math.round(Math.random() * 100);
        data.accessToken = 'ThisIsNotARealAccessToken';

        return new Credentials(data.id, data.email, data.accessToken);
    }
}