import React, {useEffect, useState} from 'react'
import { fetchData, filterData } from '../Thunk';
import { useDispatch, useSelector } from "react-redux";

const Home = () => {

    const dispatch = useDispatch()
    const result = useSelector(state => state.animal.fetchData)
    console.log(result)

    const [filter, setFilter] = useState({ record: '10',  category: 'Dogs' })
    const [image, setImage] = useState(true)

    useEffect(() => {
        dispatch(fetchData())
    }, [dispatch])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilter({ ...filter, [name]: value })
    }


    const handleFilterSubmit = (e) => {
        e.preventDefault()
        console.log(filter.record, filter.category)
        dispatch(filterData(filter))
    }

    useEffect(() => {
        const filterD = JSON.parse(localStorage.getItem('FilterData',))
        setFilter((prev) => ({...prev, ...filterD}))
    }, [])

    useEffect(() => {
        localStorage.setItem('FilterData', JSON.stringify(filter))
    })

    const recordFields = result.map((fields) => {
        return (
            image ?
            < div >
            <img src={fields} alt={fields} width="150" height="200" />
            </div > :
            <div>
            <h4>{fields}</h4>
            </div>     
        )
    })

    return (
        <div>
        <h1>Animal List</h1>
        <br />
        <div>
        <center>
        <form onSubmit={handleFilterSubmit}>
        <input type='number' name='record' placeholder='Enter record' value={filter.record} onChange={handleChange} />&nbsp;&nbsp;&nbsp;&nbsp;

        <button onClick={()=> setImage(!image)}>{image ? "Show URL" : "Show Images"}</button>&nbsp;&nbsp;&nbsp;&nbsp;

        <select name='category' value={filter.category} onChange={handleChange}>
        <option value="shibes">Dogs</option>
        <option value="cats">Cats</option>
        <option value="birds">Birds</option>
        </select>&nbsp;&nbsp;&nbsp;&nbsp;

        <button type="submit">Apply Filter</button>
        </form>
        </center>
        <br />
        <br />
        </div>
        <div>
        {recordFields}
        </div>    
        </div>
    )
}

export default Home
