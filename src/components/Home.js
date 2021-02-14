import React from "react";
import './compo.css';
import {Link} from 'react-router-dom';
function Home() {
  return (
    <div className="Home">
        <h1> WELCOME!</h1>
        <p>This application lets you search users from Github and
          display their information on the fly.
        </p>
        
        <p>Want to try? Click the SEARCH button below.</p>
       <Link to="search"> <button type="button" class="btn btn-dark">SEARCH</button></Link> 
    </div>
  );
}

export default Home;