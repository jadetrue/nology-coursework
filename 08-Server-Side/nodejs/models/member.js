const database = require("../config/firebase.js");

class Member {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.familyName = data.familyName;
        this.age = data.age;
        this.hobbies = data.hobbies;
        this.dateCreated = new Date().toUTCString();
    }

    static async findAll() {
        return database
            .collection("members")
            .get()
            .then((res) => {
                return res.docs.map((doc) => doc.data());
            });
    }

    static async find(id) {
        const response = await database
            .collection("members")
            .where("id", "==", id)
            .get();
        return response.docs.map((doc) => doc.data());
    }

    async save() {
        // this.dateModified = new Date().toUTCString();
        const member = {...this};
        const res = await database.collection("members").doc().set(member);
    }

    static async remove(id) {
        await database
            .collection("members")
            .where("id", "==", id)
            .get()
            .then((res) => res.forEach((r) => r.ref.delete()));

        return `Deleted family member with id of ${id}`;
    }
}

module.exports = Member;
