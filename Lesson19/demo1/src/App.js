// import logo from './logo.svg';
import './App.css';
import ClassCompDemo from './component/ClassComponentDemo';
import FunCompDemo from './component/FunctionComponentDemo';

const users = {
  firstName:"Chung",
  lastName:"Trịnh"
}

function formatName(user){
  return user.firstName + ' ' + user.lastName;
}

const name="devmaster.edu.vn";

const element = (
  <div>
      <h1>Hello, {formatName(users)} </h1> 
      <h2>Welcome to, {name} </h2>
  </div>
);

function sayWelcome(name){
  if(name){
    return <p>Welcome to, {name}</p>
  }else{
    return <p>Welcome to!</p>
  }
}

const elementFunction = <FunCompDemo name="Long Nguyễn" userName="LongLong" />;

function App() {
  return (
    <div className="App">
        {element}
        <hr />
        {element}
        <hr/>
        {sayWelcome("Devmaster Academy")}
        <hr/>
        {sayWelcome()}
        <hr/>
        {/* Function Component  */}
        <FunCompDemo />
        <FunCompDemo name="Chung Trịnh Văn" userName="Devmaster" />
        {elementFunction}
        <FunCompDemo company="Devmaster Academy" />

        {/* class component */}
        <ClassCompDemo />
        <ClassCompDemo name="Phạm Minh Chính" userName="chinhchinh"/>
    </div>
  );
}

export default App;
