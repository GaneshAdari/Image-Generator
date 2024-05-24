import React,{useState} from 'react'
import axios from 'axios';
import Gallery from './Gallery';
import './App.css';
const App = () => {
  const [search,setSearch]=useState("");
  const [data,setData]=useState([]);
  const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";
  const changeHandler=e=>{
    setSearch(e.target.value);
  }
  const submitHandler=e=>{
    e.preventDefault();
    axios
    .get(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`
    )
    .then(response => {
      setData(response.data.photos.photo)
    })
    console.log(search);
  }
  return (
    <div className='container'>
      <center>
        <form action="" onSubmit={submitHandler}>
          <h1>Gallery Snapshots</h1>
          <br />
          <input size="30" height="30" type="text" className="search" placeholder="Enter image name.." value={search} onChange={changeHandler}/>
          <br /><br />
          <button className="submit">Submit</button>  
        </form>
        <br />
        {data.length>=1?<Gallery data={data}/>: <h4>Data not Loaded</h4> }
      </center>
    </div>
  )
}

export default App

