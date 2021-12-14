import "./App.css";
import {firestore} from "./firebase";

import {
    collection,
    addDoc,
    doc,
    getDoc,
    getDocs,
    deleteDoc,
} from "firebase/firestore";

function App() {
    const user = {
        id: "123",
        name: "jade",
        isCoach: false,
        address: "10 Example Road, Clevedon",
    };

    const handleCreate = () => {
        const usersCollection = collection(firestore, "users");
        addDoc(usersCollection, user);
    };

    const handleRead = () => {
        const usersCollection = collection(firestore, "users");

        getDocs(usersCollection).then((response) => {
            console.log("Here's many users");
            // run this function
            response.docs.forEach((doc) => {
                console.log(doc.data());
            });
        });

        const docRef = doc(firestore, "users", "9Sx86Qi4Q8YkOhmBd5S0");
        getDoc(docRef).then((response) => {
            console.log(response.data());
        });
    };

    // const deleteDoc = async () => {
    //     const usersCollection = collection(firestore, "users");

    //     await deleteDoc(doc(usersCollection)).then((response) => {
    //         console.log(response.data());
    //     });
    // };

    return (
        <div className="App">
            <h2>Welcome to my Firebase Page</h2>
            <button onClick={handleCreate}>Do it</button>

            <h2>Read user</h2>
            <button onClick={handleRead}>Do it</button>

            <h2>Delete</h2>
            {/* <button onClick={deleteDoc}>Delete</button> */}
        </div>
    );
}

export default App;
