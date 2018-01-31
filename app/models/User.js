export default class User {
    constructor(
        email,
        password,
        createdAt = new Date(),
        firstName = null,
        lastName = null,
    ) {
        this.email = email;
        this.password = password;
        this.createdAt = createdAt;
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
}