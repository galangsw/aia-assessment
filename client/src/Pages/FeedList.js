import React, { useState, useEffect } from 'react';

import axios from "axios";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useForm }  from "react-hook-form";
import '../style.css';


function FeedList() {


    const { handleSubmit, formState } = useForm();
    const { isSubmitting } = formState;


    const [feeds, setFeed] = useState([]);
    const [text, setText] = useState('')


    //useEffect hook
    const fecthData = async () => {
        //fetching
        var api ;
        if (text === "" ){
            api = "http://localhost:4000/api"
            
        }else{
            
            api = "http://localhost:4000/api/"+text+"/30/1'"

        }
        const response = await axios.get(api)
        console.log(response);

        //get response data
        const data = await response.data.images;
        console.log(data);



        //assign response data to state "posts"
        setFeed(data);
    }


    
    useEffect(() => {

        //panggil method "fetchData"
        fecthData();


    }, []);



    function onSubmit(data) {
        // return promise that resolves after 2 seconds
        return new Promise(resolve => {
            setTimeout(() => {
                resolve();
                fecthData()
            }, 3200);
        });
    }



    return (



        <div className='container'>
            <h1>Feed</h1>

            <form className='example' onSubmit={handleSubmit(onSubmit)}  >
                <input type="text" className="form-control"
                    value={text }
                    onChange={e => setText(e.target.value)} placeholder='Search ...' />
                    <button disabled={isSubmitting} className="btn btn-primary mr-1">
                        {isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                        Submit
                    </button>
            </form>
            
            <div className='lightbox'>
                <div className="row">
                    {feeds.map(d => (<div  className='col-lg-3' >
                    
                        <LazyLoadImage
                            src={d.image}
                            alt=""
                            className="w-100 mb-md-2 shadow-1-strong rounded"
                            isSubmitting effect='blur'
                        />

                    </div>
                    ))}

                </div>
            </div>

        </div >
    );
};

export default FeedList;