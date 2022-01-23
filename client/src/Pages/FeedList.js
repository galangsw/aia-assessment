import React, { useState, useEffect } from 'react';

import axios from "axios";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
// import "../style.css"
// import 'bulma/css/bulma.min.css';

function FeedList() {



    const [feeds, setFeed] = useState([]);
    const [text, setText] = useState('')


    //useEffect hook
    const fecthData = async () => {
        //fetching
        var api ;
        if (text === "" ){
            api = "http://localhost:4000/api"
            
        }else{
            
            api = "http://localhost:4000/api/"+text+"/30/2'"

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




    const handleSubmit =  (event) => {
        event.preventDefault();
        

        fecthData();

    }




    return (



        <div className='container'>
            <h1>Feed</h1>

            <form onSubmit={handleSubmit} >
                <input name="text" className="form-control"
                    value={text }
                    onChange={e => setText(e.target.value)} placeholder='Search ...' />
                    <input type="submit" />
            </form>
            
            <div className='lightbox'>
                <div className="row">
                    {feeds.map(d => (<div  className='col-lg-3' >
                        <LazyLoadImage
                            src={d.image}
                            alt=""
                            className="w-100 mb-md-2 shadow-1-strong rounded"
                            effect='blur'
                        />

                    </div>
                    ))}

                </div>
            </div>

        </div >
    );
};

export default FeedList;