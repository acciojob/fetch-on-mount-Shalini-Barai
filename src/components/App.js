
import React,{useState,useEffect} from "react";
import './../styles/App.css';

const App = () => {
 const [dt,setDt]=useState([]);

useEffect(()=>{
 fetch("https://jsonplaceholder.typicode.com/posts")
 .then((response)=>response.json())
 .then((data)=>{
  //console.log(data);
  setDt(data);
 });
 
},[dt])

return(
<div>
  <ol style={{fontWeight:'bold'}}>
  {dt.map((data)=>{
    
    return(
      <div>
          <li><h2>{data.title}</h2></li>
          <p>{data.body}</p>
          </div>
    )
  })}
  </ol>
  
</div>)
}
export default App

