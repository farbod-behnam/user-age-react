export class User {
    id!: string;
    username!: string;
    age!: number;

    constructor(id: string, username: string, age: number) {
        this.id = id;
        this.username = username;
        this.age = age;
    }
}