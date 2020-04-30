import React from 'react';
import './App.css';
import Articles from "./components/Articles"
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Article from './components/Article';
import article from './components/a';


const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

const App = () => (
  <ApolloProvider client={client}>
  <Router>
    <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Team Ace: Google Scholar Project</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="">Create</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="">Test</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
       </form>
      </div>
    </nav>
      
        <Route exact path="/" component={Articles} />
        <Route exact path="/article/:article_id" component={article} />
    </div>
    </Router>
  </ApolloProvider>
);


// const App = () => (
//   <ApolloProvider client={client}>
//     <div className="container">
//       <nav className="navbar navbar-dark bg-primary">
//         <a className="navbar-brand" href="#">Team Ace: Google Scholar Project</a>
//       </nav>
//       <div>
//         <Articles />
//       </div>
//     </div>
//   </ApolloProvider>
// );

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

export default App;

