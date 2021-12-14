import "./App.css";
import {UserProvider} from "./context/UserProvider";
import {ThemeProvider} from "./context/ThemeProvider";

function App() {
    return (
        <div className="App">
            <UserProvider />
            <ThemeProvider />
        </div>
    );
}

export default App;
