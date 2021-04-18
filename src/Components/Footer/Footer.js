import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Footer = () => {

    const handleSubscribe = () => {
        toast.success("😃 Thanks For Your Interest", {
            position:"top-right",
            autoClose: 2000                
        });
    }

    return (
        <div style={{background: '#F2EEE9'}}>

        <div className="container text-center" style={{paddingBottom:'5vh', paddingTop:"5rem"}}>
            <h4>We don’t keep our beauty secrets</h4>
            <h6>Subscribe now and thank us later</h6>
            <div className="mt-3">
                <input style={{padding:"1%", width: "45vw", background:"white", border:"1px sopd black"}} type="email" placeholder="Enter your email" required/>
                <input style={{padding:"1%", background:"white", border:"1px sopd black"}} onClick={handleSubscribe} type="submit" value="Subscribe"/>
            </div>
            <div className="row" style={{paddingTop:"2rem", marginRight:'0', marginBottom:"2rem"}}>
                <div className="col-md-6 d-flex justify-content-center">
                    <ul style={{listStyleType:"none", fontSize:"18px"}}>
                        <li>About</li>
                        <li>Service</li>
                        <li>Academy</li>
                        <li>Contact</li>
                        <li>FAQ</li>
                    </ul>
                </div>
                <div className="col-md-6 d-flex justify-content-center">
                    <ul style={{listStyleType:"none", fontSize:"18px"}}>
                        <li>Team</li>
                        <li>Blog</li>
                        <li>Academy</li>
                        <li>Career</li>
                        <li>T & C</li>
                    </ul>
                </div>
            </div>
            <h2>SALOZEN</h2>
            <small>© 2021 Salozen</small>
        </div>
        <ToastContainer />
        </div>
    );
};

export default Footer;