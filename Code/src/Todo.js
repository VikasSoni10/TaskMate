import React, { useState } from 'react';

function Todo() {

  const [item, setItem] = useState("");
  const [data, setData] = useState([]);
  const [itemIndex, setItemIndex] = useState(null);


  function inputData(e) {
    setItem(e.target.value);

  }


  function addData() {
    if (itemIndex == null)
      setData(current => [item, ...current]);
    else {
      data[itemIndex] = item;
      setData([...data]);
      setItemIndex(null);
    }
    // console.log(data);
    setItem("");
  }

  function deleteData(ind) {
    data.splice(ind, 1);
    setData([...data])
  }
  function editData(ind) {
    setItem(data[ind]);
    setItemIndex(ind);
  }


  return (
    <>
      <div className="main">
        <h1>TaskMate</h1>
        <div className="Box">
          <input type="text" placeholder='Add task . . .' value={item} onChange={inputData} id="Input" />
          <img src="plus.ico" id='plus' onClick={item !== "" ? addData : null} alt="button" />
          <div className='box2'>
            <ul>
              {data.map((item, ind) =>
                <div className='databox'>
                  <li key={ind}>{item}</li>
                  <img className='deed' src='delete.png' onClick={() => deleteData(ind)} alt='delete img' />
                  <img className='deed' src='edit.png' onClick={() => editData(ind)} alt='edit img' />
                </div>
              )}

            </ul>
          </div>

        </div>
      </div>
    </>
  );
}

export default Todo;
