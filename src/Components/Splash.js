import React from 'react'
import '../assets/css/Style.css';
import {useState} from 'react'
import { validate } from '../assets/util/Validation';

function Splash(props) {
    let [errors, setErrors] = useState({})
    let [grid, setGrid] = useState({})
    // console.log(grid);
    const onSubmit = (e) => {
        e.preventDefault();
        let fields=e.target.elements
        let error =validate(fields)
        if(Object.keys(error).length>0){
            setErrors(error)
        } 
       else { 
            var grid = {
                m: fields.m.value,
                n: fields.n.value,
            }
            setGrid(grid);
            setErrors(" ");
            localStorage.setItem('Mygrid', JSON.stringify(grid)); 
            props.history.push("/yourgrid")
       }
    }

    return (
        <>
            <div class="grid">
                <h1>Create Grid</h1>
                <form onSubmit={onSubmit}>
                    {errors.m?
                    errors.m ? <span className="text-danger font-weight-bold">{errors.m}</span> : null
                    :errors.n ? <span className="text-danger font-weight-bold">{errors.n}</span> : null}
                    <input type="number" className="text-center" name="m" placeholder="Rows" />
                    <input type="number" className="text-center" name="n" placeholder="Columns" />
                    <button type="submit" class="btn btn-primary btn-block btn-large">Create.</button>
                </form>
            </div>
        </>
    )
}

export default Splash
