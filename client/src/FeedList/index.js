import React, { useState, useEffect } from 'react';

import axios from "axios";

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import "../style.css"
import 'bulma/css/bulma.min.css';

const FeedList = () => {



    const [feeds, setFeed] = useState([]);
    //useEffect hook
    useEffect(() => {

        //panggil method "fetchData"
        fectData();

    }, []);
    const fectData = async () => {
        //fetching
        const response = await axios.get('http://localhost:4000/feed');
        //get response data
        const data = await response.data.images;


        //assign response data to state "posts"
        setFeed(data);
    }


    return (

        <div className="columns is-multiline">
            {feeds.map(d => (<div key={d.owner} className="column is-one-quarter-desktop is-half-tablet">
                <div className="card">
                    <div className="card-image">
                            <LazyLoadImage 
                            src={d.image}  
                            alt="Placeholder image" 
                            effect="blur"
                            
                            />
                        <div className="card-content is-overlay is-clipped">
                            <span className="tag is-info">{d.title}
                            </span>
                        </div>
                    </div>
                    <footer className="card-footer">
                            {d.owner}
                    </footer>
                </div>


                </div >

                ))
                }

        </div >
    );
};

export default FeedList;