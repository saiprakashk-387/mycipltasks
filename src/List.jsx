import React, { useEffect, useState } from 'react'
import Trail from './Trail';

const List = () => {
    const [select, setSelect] = useState();
    const [index, setIndex] = useState(null)
    const [sftIndex, setSftIndex] = useState(null)

    const getSelected = (e, i, val) => {
        let contrlIndex = { ...index }
        contrlIndex = i
        setIndex(contrlIndex);
        if (e.ctrlKey === true) {
            setSelect(val)
        } else if (e.shiftKey === true) {
            let shiftIndex = { ...sftIndex }
            shiftIndex = i
            setSftIndex(shiftIndex)
        }
    }
    console.log("ctrlindex", index);
    console.log("sftIndex", sftIndex);
    const subjects = [
        "React Js", "Java Script", "Python", "Java", "CCNA", "My Sql", "React Native", "Php", "Node Js"
    ]

    return (
        <div> <h3>Control-index</h3>
            {/* <Trail/> */}
            <div>
                <ul style={{ "listStyle": "none" }}>
                    {subjects.map((val, i) => {
                        if (select == val || index == i) {
                            // console.log("index matched ", i);
                            return (
                                <li style={{ "backgroundColor": "grey" }} key={i} value={val} onClick={(e) => { getSelected(e, i, val) }} >{val}</li>
                            )
                        }
                        else {
                            return <li key={i} value={val} onClick={(e) => { getSelected(e, i, val) }} >{val}</li>
                        }
                    })}
                </ul>
            </div>
        </div>
    )
}
export default List;

{/* <li  > Js</li>
                    <li >React Js</li>
                    <li>Python</li>
                    <li>Java</li>
                    <li>React native</li>
                    <li>PHP</li>
                    <li>Node Js</li>
                    <li>Swift</li>
                    <li>CCNA</li>
                    <li>My Sql</li> */}