import "./css/main.css";
import Header from "./header";
import LeftNavigation from "./LeftNavigation";
import RegistrationForm from "./contentForm";
//import "bootstrap/dist/bootstrap.min.css";

function App() {
  return (
    <div>
      <Header />
      <div className="Main">
        <div className="LeftNavigation">
          <LeftNavigation />
        </div>
        <div className="RegistrationForm">
          <RegistrationForm />
        </div>
      </div>
    </div>
  );
}

export default App;
