class Student {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.age = data.age;
        this.interests = data.interests;
        this.dateCreated = new Date().toUTCString();
    }

    static findAll() {
        return "I'm all the students";
    }

    static findAll() {
        return `I'm a specific student with the id of ${this.id}`;
    }

    save() {
        return "Created a student";
    }

    static delete() {
        return `Deleted a specific students with the id of ${this.id}`;
    }
}

module.exports = Student;
