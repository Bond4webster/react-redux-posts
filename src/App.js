import React from "react";
import PostForm from "./components/PostForm";
import Posts from "./components/Posts";
import './App.css';

function App() {
  return (
    <div className="container pt-3">
        <div className="row">
            <div className="col">
                <PostForm />
            </div>
        </div>
        <div className="row">
            <div className="col">
                <Posts />
            </div>
        </div>
    </div>
  );
}

export default App;
