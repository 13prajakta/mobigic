import React from 'react'
import {useState,useEffect} from 'react'
import { validate } from '../assets/util/Validation';
import { Redirect } from 'react-router-dom';

function Search({tableCellsData,clickMe},props) {
    let [errors, setErrors] = useState({})
    let [search, setSearch] = useState({})
    // console.log(search);
    const table = Object.values(tableCellsData);
    console.log(table,"table");

    const onSubmit = (e) => {
        e.preventDefault();
        let fields=e.target.elements
        let error =validate(fields)
        if(Object.keys(error).length>0){
            setErrors(error)
        } 
       else { 
            setSearch(fields.search.value);
            setErrors(" ");
       }
    }
    
    if(search)
    {
    //    const data= table.includes(search);
       var count = table.reduce(function(n, val) {
        return n + (val === search);
    }, 0);
    const dataa={
        count:count,
        search:search
    }
    console.log(count,"count");
    //    console.log(data)
       

                if(count>0)
                {
                localStorage.setItem('Mysearch', JSON.stringify(dataa)); 
                return <Redirect to='/search'  />
        }else{
            console.log("no")
        }
           
            
        
    }
    return (
        <>
           <div className="row">
                <div className="col-md-12">
                
                    <div className="wrap col-md-4">
                        
                        <form class="form-inline my-2 my-lg-0" onSubmit={onSubmit}>
                        {errors.search ? <span className="text-danger font-weight-bold">{errors.search}</span> : null}
                        <input class="form-control mr-sm-2" name="search" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                       
                    </div>
                </div>
            </div> 
        </>
    )
}

export default Search
