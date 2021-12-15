class Student {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.age = data.age;
        this.interests = data.interests;
        this.date = new Date().toUTCString();
    }
    static findAll() {
        return "I am all the students";
    }

    static find(id) {
        return `I am a student with an id of ${id}`;
    }

    save() {
        return "Created account for student";
    }

    static delete(id) {
        return `Deleted a student with an id of ${id}`;
    }
}

module.exports = Student;
