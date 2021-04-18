import React from 'react';
import { Card } from 'react-bootstrap';

const courseDate = [{
    "Key": 1,
    "Name": "Hair Advanced Course",
    "Price": "$200",
    "Date": "20-26 MAY",
    "Image": "https://firstsight.design/cherie/hair/wp-content/uploads/2020/08/Group-143.png"
},{
    "Key": 2,
    "Name": "Hair Color: Basic Course",
    "Price": "$140",
    "Date": "9-13 JUNE",
    "Image": "https://firstsight.design/cherie/hair/wp-content/uploads/2020/08/Group-140.png"
},{
    "Key": 3,
    "Name": "Classic Hair Styles",
    "Price": "$350",
    "Date": "18-24 JUNE",
    "Image": "https://firstsight.design/cherie/hair/wp-content/uploads/2020/08/Group-141.png"
},{
    "Key": 4,
    "Name": "Long Hair Care",
    "Price": "$150",
    "Date": "3-6 JULY",
    "Image": "https://firstsight.design/cherie/hair/wp-content/uploads/2020/08/Group-142.png"
}]

const AcademyCourse = () => {
    return (
        <div className="container text-center" style={{marginBottom:'10vh'}}>
            <h2>Upcoming Courses</h2>

            <div className="row" style={{marginRight:'0', marginBottom:"2rem", marginTop:'2rem'}}>
                    {
                        courseDate.map(course => <div className="col-md-3 d-flex justify-content-center">
                        <Card style={{ width: '20rem', border:"none"}}>
                        <Card.Img variant="top" src={course.Image} alt="Image"/>
                    <Card.Body>
                        <small>{course.Date}</small>
                    <Card.Title>{course.Name}</Card.Title>
                    <Card.Text>
                  {course.Price}
                    </Card.Text>
                </Card.Body>
                        </Card>
                    </div>)
                    }
            </div>
            

        </div>
    );
};

export default AcademyCourse;