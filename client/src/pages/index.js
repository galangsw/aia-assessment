import React, { useState, useEffect }from 'react';

import axios from "axios";


const Index = () => {

    

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
            const data = await response.data.data;

    
            //assign response data to state "posts"
            setFeed(data);
        }
        

    return(
        

        <div className="card">

                <div className="card-image">
                    <figure className="image is-4by3">
                        <img src="" alt="Placeholder image"></img>
                    </figure>
                </div>
                <div className="card-content">
                    <p className="title product-title">E</p>

                    <div className="content">
                        f
                        <br></br>
                    </div>
                    <a className="button is-primary" href="" target="_blank">
                        <strong>More Details</strong>
                    </a>
                </div>
                                               
            </div>
    );
};

export default Index;