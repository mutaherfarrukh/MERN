import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AlbumCard from '../components/AlbumCard';
import {Link} from 'react-router-dom';

const SingleAlbum = (props) => {
    const {_id} = useParams();
    const [album, setAlbum] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8000/api/albums/"+ _id)
            .then(res => setAlbum(res.data.results))
            .catch(err => console.log(err))
    },[_id])

    return (
        <div className="d-flex justify-content-center mt-5">
            <div>
            <AlbumCard data={album}/>
            <Link to={`/albums/${_id}/edit`} className= "btn btn-lg btn-warning">Edit</Link>
            </div>
        </div>
    )
}
export default SingleAlbum;