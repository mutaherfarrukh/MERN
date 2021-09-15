
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AlbumCard from '../components/AlbumCard';




const AllAlbums = (props) => {
    const [albums, setAlbums] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(()=> {
    axios.get("http://localhost:8000/api/albums/all")
        .then(res => {
            setAlbums(res.data.results);
            // setLoaded(true);
            })
        .catch(err => console.log(err))
    },[loaded])

    return (
        <div className="allAlbums">
            {
                albums.map((item, i)=> {
                    return <AlbumCard key={i} data={item} setLoaded={setLoaded}/>
                })
            }

        </div>
    )
}

export default AllAlbums;