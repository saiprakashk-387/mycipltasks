import React from 'react'
import { useState } from 'react';

const TodoListCrud = () => {
    const [valeu, setValeu] = useState()
    const [profile, setProfile] = useState([])
    const [edit, setEdit] = useState("ADD")
    const [editIndex, setEditIndex] = useState(-1)

    const handleInput = (val) => {
        setValeu(val.target.value)
    }

    const addValue = () => {
        let user = {
            "isSelected": false,
            "result": valeu,
        }        
        profile.push(user)
        setProfile([...profile])
        saveListner()

    }

    const checked = (item) => {
        item.isSelected = !item.isSelected
        setProfile([...profile])
    }

    const removeListner = (item) => {
        const indx = profile.indexOf(item)
        const x = profile.splice(indx, 1)
        setProfile([...profile])
    }
    
    const editLlistner = (editval, index) => {
        setEdit("Save")
        setValeu(editval)
        setEditIndex(index)
    }

    const saveListner = () => {
        setEdit("Add")
        profile[editIndex].result = valeu
        setProfile([...profile])
        setEditIndex(-1)
    }
   
    return (

        <div>
            <div>TodoList</div>
            <input type="text" name='inp' value={valeu} onChange={handleInput} />
            <button onClick={() => {
                if (editIndex === -1) {
                    addValue()
                } else {
                    saveListner()
                }
            }}  >{edit}</button>
            <div>
                {profile.map((val, i) => {
                    return (
                        <div key={i} style={{ display: "flex" }}>
                            <input type="checkbox" onClick={() => {
                                checked(val)
                            }} />
                            <p style={{ color: val.isSelected ? "green" : "red" }}>{val.result}</p>
                            <button style={{ margin: "20px" }} onClick={() => {
                                removeListner(val)
                            }}>Delete</button>
                            <button style={{ margin: "20px" }} onClick={() => {
                                editLlistner(val.result, i)
                            }}>edit</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default TodoListCrud