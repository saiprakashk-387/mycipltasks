import React, { useState, useEffect } from "react";

function CheckboxSF() {
    const [checkedAll, setCheckedAll] = useState(false);
    const [checked, setChecked] = useState({ nr1: false, nr2: false, nr3: false });
    const [tagA, seTtagA] = useState(false)
    const [tagB, seTtagB] = useState(false)
    const [tagC, seTtagC] = useState(false)

    const toggleCheck = (inputName) => {
        setChecked((prevState) => {
            const newState = { ...prevState };
            newState[inputName] = !prevState[inputName];
            return newState;
        });
    };
    const selectAll = (value) => {
        setCheckedAll(value);
        setChecked((prevState) => {
            const newState = { ...prevState };
            for (const inputName in newState) {
                newState[inputName] = value;
            }
            return newState;
        });
    };

    useEffect(() => {
        let allChecked = true;
        for (const inputName in checked) {
            if (checked[inputName] === false) {
                allChecked = false;
            }
        }
        if (allChecked) {
            setCheckedAll(true);
        } else {
            setCheckedAll(false);
        }
    }, [checked]);

    return (
        <div className="App">
            <div>
                <form action="">
                    <label>All</label>
                    <input
                        type="checkbox"
                        onChange={(event) => selectAll(event.target.checked)}
                        checked={checkedAll}
                    /> <br />
                    <label>A</label>
                    <input
                        type="checkbox"
                        name="nr1"
                        onChange={() => toggleCheck("nr1")}
                        checked={checked["nr1"]}
                    /> <br />
                    <label>B</label>
                    <input
                        type="checkbox"
                        name="nr2"
                        onChange={() => toggleCheck("nr2")}
                        checked={checked["nr2"]}
                    /> <br />
                    <label>C</label>
                    <input
                        type="checkbox"
                        name="nr3"
                        onChange={() => toggleCheck("nr3")}
                        checked={checked["nr3"]}
                    />
                </form>
            </div>
            <div>
                {checkedAll && checkedAll == true || checked && checked.nr1 == true ? <button onClick={() => { seTtagA(!tagA) }} > +Tag A</button> : null}
                {checkedAll && checkedAll == true || checked && checked.nr2 == true ? <button onClick={() => { seTtagB(!tagB) }}> +Tag B</button> : null}
                {checkedAll && checkedAll == true || checked && checked.nr3 == true ? <button onClick={() => { seTtagC(!tagC) }}> +Tag C</button> : null}
            </div>
            <div>
                {tagA && checked && checked.nr1 == true ? <textarea rows="4" cols="50" /> : null}  <br />
                {tagB && checked && checked.nr2 == true ? <textarea rows="4" cols="50" /> : null}  <br />
                {tagC && checked && checked.nr3 == true ? <textarea rows="4" cols="50" /> : null}  <br />
            </div>
        </div>
    );
}

export default CheckboxSF;

