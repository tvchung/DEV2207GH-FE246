import "./App.css";
import { React, Component } from "react";
import Control from "./component/Control";
import ListStudent from "./component/ListStudent";
import Form from "./component/Form";
class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-7 grid-margin stretch-card">
            <div className="card">

              <Control />

              <ListStudent />

            </div>
          </div>

          <Form />

        </div>
      </div>
    );
  }
}

export default App;
