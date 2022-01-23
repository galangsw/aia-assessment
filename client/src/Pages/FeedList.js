import React, { useState, useEffect } from 'react';

import axios from "axios";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
// import "../style.css"
// import 'bulma/css/bulma.min.css';

function FeedList ()  {



    const [feeds, setFeed] = useState([]);
    const [dataValue, setDataValue] = useState('');


    //useEffect hook
    useEffect(() => {

        //panggil method "fetchData"
        fectData();
        

    }, []);
    const fectData = async (e) => {
        //fetching
        const response = await axios.get('http://localhost:4000/api/')
          
        //get response data
        const data = await response.data.images;
        console.log(data);



        //assign response data to state "posts"
        setFeed(data);
    }


 

      
    function handleSubmit(e) {
        setDataValue(e.target.value);
      }

    return (



        <div className='container'>
            <h1>Feed</h1>
            
            <form onSubmit={handleSubmit} >
            <input name="text" className="form-control" value={dataValue} onChange={e => setDataValue(e.target.value)} placeholder='Search ...' />

            </form>
            <div className='lightbox'>
                <div className="row">
                {feeds.map(d => (<div key={d.owner} className='col-lg-4' >
                <LazyLoadImage
                    src={d.image}
                    alt="Table Full of Spices"
                    className="w-100 mb-2 mb-md-4 shadow-1-strong rounded"
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