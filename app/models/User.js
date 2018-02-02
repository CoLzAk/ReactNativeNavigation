export default class User {
    constructor(
        email,
        id = null,
        firstName = null,
        lastName = null,
    ) {
        this.email = email;
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;

        this.fullName = this.getFullName();
    }

    getFullName() {
        if (this.firstName === null && this.lastName === null) {
            return `${this.email}`;
        }

        return `${this.firstName} ${this.lastName}`;
    }

    static constructFromCredentials(credentials) {
        return new User(credentials.email, credentials.id);
    }
}