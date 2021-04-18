import React from 'react';
import { useForm } from "react-hook-form";
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const NewAdmin = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);        
    }

    return (
        <section className="container-fluid row">
           <div className="col-md-2" style={{background: '#343A40'}}>
                <Sidebar></Sidebar>
           </div>

            <div className="col-md-10">
                <h5 className="pt-3">Add a New Admin</h5>

                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row pt-2">
                    <div className="col">
                        <input className="form-control" type="email" name="email" placeholder="joe@gmail.com" {...register('name', { required: true })}/>
                    </div>
                    <div className="col">
                        <input style={{background: '#343A40'}} className="btn btn-secondary" type="submit" />
                    </div>
                </div>
                </form>

            </div>
        </section>
    );
};

export default NewAdmin;