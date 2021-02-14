import React, { Component } from 'react';
import './compo.css';


class List extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        items: [],
      };
    }

  
    componentDidMount() {
      fetch('https://api.github.com/users')
        .then(res => res.json())
        .then(result =>
            {
          this.setState({
            items: result
          });
        }
        );
    }
  
    render() {
      const { items } = this.state;
        return (
         
              <div className="card">         
              {items.map(item => (        
                
                <div className="row">
                <div class="col-5">
                   <img className="rounded-circle" src={item.avatar_url} alt="Card image cap"/>
                   </div>
                   <div class="col">
                       <div className="row">
                                  <div className="col-8">
                                  <h4>{item.login}</h4>
                                  <p>@{item.id}</p>
                                  </div>
                                  <div className="col-4">
                               
                              
                                <i class="fas fa-plus-circle"></i>
                              
                                  </div>
                       </div>
                       {/* follow and following row */}
                       <div className="row">
                                  <div className="col-4">
                                  <p>?</p>
                                  <p>followers</p>
                                  </div>
                                  <div className="col-4">
                                  <p>?</p>
                                  <p>following</p>
                                  </div>
                                  <div className="col-4">
                                  <p>?</p>
                                  <p>Repos</p>
                                  </div>
                       </div>
                 
       
                       </div>
                       </div>
               ))}
              
                  </div>
        );
    }
  }
export default List;