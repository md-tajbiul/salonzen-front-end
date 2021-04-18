import React from 'react';
import { Card } from 'react-bootstrap';

const TeamCart = ({member}) => {    
    return (
        <div className="col-md-3 d-flex justify-content-center">
            <Card style={{ width: '20rem', border:"none"}}>
<Card.Img variant="top" src={member.Image} alt="Image"/>
  <Card.Body>
    <Card.Title>{member.Name}</Card.Title>
    <Card.Text>
      {member.Title}
    </Card.Text>
  </Card.Body>
            </Card>
        </div>
    );
};

export default TeamCart;