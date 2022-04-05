import React, { useState } from 'react'

const NewList = () => {
    const [form, setForm] = useState({ name: "", email: "", place: "" });
    const [formData, setformData] = useState([])

    const handleInput = (e) => {
        e.preventDefault()
        let User = { ...form }
        User[e.target.name] = e.target.value
        setForm(User)
    }
    const add = () => {
       let array = [];
       array.push({...form});
       setformData(array)       
    }
// console.log(formData);
    return (
        <>
            <div>
                <form action="">
                     Name: <input type="text" name="name" value={form.name} onChange={(e) => { handleInput(e) }} /><br />
                    Email: <input type="text" name="email" value={form.email} onChange={(e) => { handleInput(e) }} /><br />
                    Place: <input type="text" name="place" value={form.place} onChange={(e) => { handleInput(e) }} /><br />
                    <button type='button' onClick={add}>Submit</button>
                </form>
            </div>
            {formData.length !== 0 ?
                <div>
                    <h1>Hello user</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Place</th>
                            </tr>
                        </thead>
                        <tbody>
                            {formData.map((val, i) => {
                                // console.log(val);
                                return (
                                    <tr key={i}>
                                        <td>{val.name}</td>
                                        <td>{val.email}</td>
                                        <td>{val.place}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div> : "No Data"}
        </>
    )
}
export default NewList;
