import React from 'react'
import { useState } from 'react';
import Form from './Form'

function TodoList() {
    const [showForm, setShowForm] = useState(false);
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [date, setDate] = useState('')
    const [addData, setAddDate] = useState([])
    function handleTitle(e){
        setTitle(e.target.value)
        console.log(title)
    }
    function handleDesc(e){
        setDesc(e.target.value)
        console.log(desc)
    }
    function handleDate(e){
        setDate(e.target.value)
        console.log(date)
    }
    function handleForm(){
        setShowForm(true)
    }
    function handleSubmit(e){
      e.preventDefault();
        setAddDate(  [...addData,{title: title, desc: desc, date:date}])
    }


  return (
    <div>
        <button onClick={handleForm}>Add Todo</button>
        {showForm ? <Form title={title} desc={desc} date={date} handleTitle={handleTitle} handleDate={handleDate} handleDesc={handleDesc} handleSubmit={handleSubmit}/> :null }
        {addData.map((data)=> <div key={data.date}> <p>{data.title}</p> <p>{data.desc}</p> <p>{data.date}</p> </div>)}

        {addData.filter((data)=>{
            if(data.title === title){ 
                // set{}
        } })}
       
    </div>
  )
}

export default TodoList