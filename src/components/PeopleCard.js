import React, { Component,useState } from 'react';

import { Card, Button  } from 'react-bootstrap';

class PeopleCard extends Component {
  constructor(props) {
    super(props);
  };

  render () {
    let { id, login, avatar_url, followers_url, repos_url, following_url } = this.props.person;
    return (
      <div>
        <Card className="card" style={{ width: '25rem' }}>
          
          <Card.Body>
           
                            <div className="row">
                                    <div class="col-5">
                                    <img className="rounded-circle"  src={avatar_url} alt="Card image cap"/>
                                    </div>
                                    <div class="col">
                                        <div className="row">
                                                   <div className="col-8">
                                                   <h4>{login}</h4>
                                                   <p>@{id}</p>
                                                   </div>
                                                   <div className="col-4">
                                                   <i class="fas fa-plus-circle" onClick={() => this.props.removePerson(id)}></i>
                                                   </div>
                                        </div>
                                        {/* follow and following row */}
                                        <div className="row">
                                                   <div className="col-4">
                                                
                                                   <p><a href={followers_url}>Followers </a></p>
                                                   </div>
                                                   <div className="col-4">
                                                   <p><a href={following_url}>Followings </a></p>
                                                   </div>
                                                   <div className="col-4"  >
                                                   <p className="tiny-link"><a  href={repos_url}>Repos </a></p>
                                                   
                                                   </div>
                                        </div>
                                    </div>
                           </div>
                    
            </Card.Body>
        </Card>
      
        </div>
          
    
    )
  }
}

export default PeopleCard;