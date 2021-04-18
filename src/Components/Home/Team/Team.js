import React from 'react';
import { Button } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TeamCart from './TeamCart';

const teamDate = [{
    "Key": 1,
    "Name": "Dr. Bob",
    "Title": "Founder - MD, Facts",
    "Image": "https://firstsight.design/cherie/hair/wp-content/uploads/2020/11/Blog-Img.png"
},{
    "Key": 2,
    "Name": "Jack Milan",
    "Title": "Designer",
    "Image": "https://firstsight.design/cherie/hair/wp-content/uploads/2020/11/Blog-Img-2.png"
},{
    "Key": 3,
    "Name": "Victoria De Vito",
    "Title": "Hair Specialist",
    "Image": "https://firstsight.design/cherie/hair/wp-content/uploads/2020/11/Blog-Img-4.png"
},{
    "Key": 4,
    "Name": "Dr. Diane Alexander",
    "Title": "Top Hair Specialist",
    "Image": "https://firstsight.design/cherie/hair/wp-content/uploads/2020/11/Blog-Img-6.png"
}]

const Team = () => {
    const joinTeam = () => {
        toast.error("😢 Our Team Is Full Now! Sorry...", {
            position:"top-right",
            autoClose: 2000                
        });
    }


    return (
        <div className="container text-center" style={{marginBottom:'10vh'}}>
            <h2>Our Team</h2>
                <div className="row" style={{marginRight:'0', marginBottom:"2rem", marginTop:'2rem'}}>
                    {
                        teamDate.map(member => <TeamCart member={member} key={member.Key}/>)
                    }
                </div>
            <Button className="animation" onClick={joinTeam} variant="outline-dark">Join Our Team</Button>
            <ToastContainer />
        </div>
    );
};

export default Team;