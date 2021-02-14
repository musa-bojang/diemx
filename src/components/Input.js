import React from "react";
import './compo.css';
class Input extends React.Component {
   
    render() {
        return(
            
            <div className="container">
              <fomr>
                 <input type="text" placeholder="SEARCH AREA"></input>
                 <button type="submit">Search </button>
             </fomr>  
                    
            </div>
           
        );
    }
}
export default Input;