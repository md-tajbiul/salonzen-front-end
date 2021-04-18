import React from 'react';
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const Review = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        
        const reviewData = {
                description: data.description,
                name: data.name
        };
            const url = `https://cryptic-escarpment-26918.herokuapp.com/createReview`;
            fetch(url, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(reviewData)
            })
            .then(res => toast.success("⭐ Review Added Successfully", {
                position:"top-right",
                autoClose: 2000                
            })
            );
    
        }

    return (
        <section className="container-fluid row">
           <div className="col-md-2" style={{background: '#343A40'}}>
            <Sidebar></Sidebar>
           </div>

            <div className="col-md-10">
                <h5 className="pt-3">Add Review For Our Services.</h5>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label>Name: </label>
                        <input className="form-control" type="name" name="title" placeholder="Name" {...register('name', { required: true })}/>
                    </div>
                    <div className="form-group">
                        <label>Description: </label>
                        <textarea className="form-control" name="description" placeholder="Review Description" {...register('description', { required: true })}/>
                    </div>
                    <input style={{background: '#343A40'}} className="btn btn-secondary" type="submit" />
                </form>
                <ToastContainer />
            </div>
        </section>
    );
};

export default Review;