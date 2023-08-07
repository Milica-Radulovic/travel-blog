import { useEffect, useState } from "react";
import "./traveltips.css";

// const ItemInput = ({ onAddItems }) => {
//   const [inputValue, setInputValue] = useState("");
//   const [selected, setSelected] = useState(1);

//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   const handleSelectChange = (e) => {
//     setSelected(Number(e.target.value));
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     if (!inputValue) return;
//     onAddItems(inputValue, selected);
//     setInputValue("");
//     setSelected(1);
//   };

//   return (
//     <div className="ItemInputContainer">
//       <i
//         className="fa-solid fa-plane-departure"
//         style={{ fontSize: "3rem" }}
//       ></i>
//       <label>
//         Plan your trip in advance and ensure you don't forget a thing!
//       </label>

//       <form onSubmit={handleFormSubmit} className="formInput">
//         <div className="inputCont">
//           <input
//             type="text"
//             placeholder="Add item to list*"
//             value={inputValue}
//             onChange={handleInputChange}
//           />
//           <select onChange={handleSelectChange} value={selected}>
//             {[...Array(10)].map((_, i) => (
//               <option value={i + 1} key={i + 1}>
//                 {i + 1}
//               </option>
//             ))}
//           </select>
//         </div>
//         <button onClick={()=>console.log('object')} type="submit" className="buttonOne">
//           Add to List
//         </button>
//       </form>
//     </div>
//   );
// };

const Item = ({ handleEdit, item, onDelete }) => {
  const linethrough = item.isDone ? "linethrough" : "";
  return (
    <div className="ItemContainer">
      <span className={linethrough}>
        {item.quantity}. {item.name}
      </span>
      <button className="BtnDone" onClick={() => handleEdit(item.id)}>
        {!item.isDone ? (
          <i className="fa-solid fa-check"></i>
        ) : (
          <i className="fa-solid fa-chevron-left"></i>
        )}
      </button>
      {item.isDone && (
        <button className="BtnDone" onClick={() => onDelete(item.id)}>
          <i className="fa-solid fa-trash"></i>
        </button>
      )}
    </div>
  );
};

const ToDo = ({ handleEdit, toDo }) => {
  return (
    <div className="ItemList">
      <h2 className="header2">
        <i className="fa-solid fa-compass" style={{ marginRight: "0.5em" }}></i>
        To Do List
      </h2>
      <ul>
        {toDo.map((item) => (
          <Item
            handleEdit={() => handleEdit(item.id)}
            item={item}
            key={item.id}
          />
        ))}
      </ul>
    </div>
  );
};

const Done = ({ handleEdit, onDelete, done }) => {
  return (
    <div className="ItemList">
      <h2 className="header2">
        <i
          className="fa-solid fa-suitcase-rolling"
          style={{ marginRight: "0.5em" }}
        ></i>
        Packed
      </h2>
      <ul>
        {done.map((item) => (
          <Item
            handleEdit={() => handleEdit(item.id)}
            item={item}
            key={item.id}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </div>
  );
};

const TravelList = () => {
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState(1);
  const [items, setItems] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSelectChange = (e) => {
    setSelected(Number(e.target.value));
  };

  const handleAddItems = (inputValue, selectedValue) => {
    const newItem = {
      id: items.length,
      name: inputValue,
      quantity: selectedValue,
      isDone: false,
    };
    setItems([...items, newItem]);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!inputValue) return;
    handleAddItems(inputValue, selected);
    setInputValue("");
    setSelected(1);
  };

  
  
  const saveItemsToLocalStorage =  (items) => {
      localStorage.setItem("listItems", JSON.stringify(items));
      console.log('saveItemsToLocalStorage');

};

useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("listItems"));
    setItems(storedItems);
   
  }, []);

  const handleEditItems = (id) => {
    setItems((items) =>
      items.map((el) => (el.id === id ? { ...el, isDone: !el.isDone } : el))
    );
  };
  const toDo = items.filter((item) => !item.isDone);
  const done = items.filter((item) => item.isDone);

  const handleDeleteItems = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="travelListBox">
      <div className="ItemInputContainer">
        <i
          className="fa-solid fa-plane-departure"
          style={{ fontSize: "3rem" }}
        ></i>
        <label>
          Plan your trip in advance and ensure you don't forget a thing!
        </label>

        <form onSubmit={handleFormSubmit} className="formInput">
          <div className="inputCont">
            <input
              type="text"
              placeholder="Add item to list*"
              value={inputValue}
              onChange={handleInputChange}
            />
            <select onChange={handleSelectChange} value={selected}>
              {[...Array(10)].map((_, i) => (
                <option value={i + 1} key={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>
          <button
            onClick={()=>saveItemsToLocalStorage(items)}
            type="submit"
            className="buttonOne"
          >
            Add to List
          </button>
        </form>
      </div>

      <div className="subTravelListBox">
        <ToDo handleEdit={handleEditItems} items={items} toDo={toDo} />
        <span className="border"></span>
        <Done
          handleEdit={handleEditItems}
          items={items}
          done={done}
          onDelete={handleDeleteItems}
        />
      </div>
    </div>
  );
};

export default TravelList;
