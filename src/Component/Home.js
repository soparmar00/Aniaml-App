
import axios from 'axios';
import React, {useEffect, useState} from 'react'

const Home = () => {

    const [api, setApi] = useState([])
 
    useEffect(() => {
        axios.get(`http://shibe.online/api/shibes?count=10`)
        .then(res=> {
            console.log(res.data)
            setApi(res.data)
        })
        .catch(err => {
            console.log(err)
        })
        
    }, [setApi]);


    return (
        <div>
            <h1>Animal List</h1>
            {api.map(fields => (< div >
                <img src={fields} alt={fields} width="150" height="200" />
            </div >))}
        </div>
    )
}

export default Home
