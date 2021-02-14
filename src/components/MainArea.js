import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import PeopleCard from './PeopleCard';

class MainArea extends Component {

constructor(props) {
    super(props);
    this.state = {
      user: [],
      check: false
    };
  }


  componentDidMount() {
    fetch('https://api.github.com/users')
      .then(res => res.json())
      .then(result =>
          {
        this.setState({
          user: result,
          check: true
        });
      }
      );
  }

  removePerson(id) {
    this.setState({ user: this.state.user.filter(person => person.id !== id)});
    this.setState(prevState => ({
        check: !prevState.check
      }));
    console.log(id);
   
  }

  render () {
    let peopleCards = this.state.user.map(person => {
      return (
        <div className="capman">
            <Col sm="4">
          <PeopleCard key={person.id} removePerson={this.removePerson.bind(this)} person={person}  />
        </Col>
        </div>
      )
    })
    
    return (
      <Container fluid>
        <Row>
          {peopleCards}
        </Row>
      </Container>
    )
  }
}

export default MainArea;