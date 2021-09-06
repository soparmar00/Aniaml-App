import React, {useEffect} from 'react'
import { fetchData } from '../Thunk';
import { useDispatch, useSelector } from "react-redux";

const Home = () => {

    const dispatch = useDispatch()
    const result = useSelector(state => state.animal.fetchData)
    console.log(result)

    useEffect(() => {
        dispatch(fetchData())
    }, [dispatch])

    const recordFields = result.map((fields) => {
        return (
            < div >
            <img src={fields} alt={fields} width="150" height="200" />
            </div >

        )
    })

    return (
        <div>
        <h1>Animal List</h1>
        <br />
        <br />
        <div>
        {recordFields}
        </div>    
        </div>
    )
}

export default Home
