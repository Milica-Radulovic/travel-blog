import { useEffect, useState } from "react";
import "./traveltips.css";

const ItemInput = ({ onAddItems }) => {
    const [inputValue, setInputValue] = useState("");
    const [selected, setSelected] = useState(1);
    const [inputClass, setInputClass] = useState(false);
    const [selectionClass, setSelectionClass] = useState(false);
    const inputLimit = 12;
    const handleInputFocus = () => {
        setInputClass(true);
    };
    const inputStyle = inputClass ? "inputFocus" : "formBox";
    const handleSelectionFocus = () => {
        setSelectionClass(true);
    };
    const selectionStyle = selectionClass ? "selectionFocus" : "selection";
    const handleInputChange = (e) => {
        if (inputValue.length < inputLimit) {
            setInputValue(e.target.value);
        } else {
            alert("You have reached the limit of 12 characters");
        }
    };
    const handleSelectChange = (e) => {
        setSelected(Number(e.target.value));
    };
    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!inputValue) return;
        onAddItems(inputValue, selected);
        setInputValue("");
        setSelected(1);
    };

    return (
        <div className="ItemInputContainer">
            <div className="listIntro">
                <i
                    className="fa-solid fa-suitcase-rolling"
                    style={{ fontSize: "3rem", padding: "0.1rem" }}
                ></i>
                <label style={{ padding: "1.5rem" }}>
                    Introducing our Packing List App - your ultimate travel
                    companion for stress-free packing!
                </label>
                <ul>
                    <span style={{ fontWeight: "bold" }}>
                        Our app lets you:
                    </span>
                    <li>Add unlimited items, from one to ten per type.</li>
                    <li>Easily mark items as packed or delete them.</li>
                    <li>Organize items into customizable categories.</li>
                    <li>
                        Receive smart suggestions based on your trip details.
                    </li>
                </ul>
                <p>
                    Streamline your packing process and travel with confidence
                    using our Packing List App. Start packing smarter today!
                </p>
            </div>
            <div>
                <form onSubmit={handleFormSubmit} className="formInput">
                    <div className="inputCont">
                        <input
                            onBlur={() => setInputClass(false)}
                            onFocus={handleInputFocus}
                            type="text"
                            placeholder="Add item to list*"
                            value={inputValue}
                            onChange={handleInputChange}
                            className={inputStyle}
                        />
                        <select
                            onFocus={handleSelectionFocus}
                            onBlur={() => setSelectionClass(false)}
                            onChange={handleSelectChange}
                            value={selected}
                            className={selectionStyle}
                        >
                            {[...Array(10)].map((_, i) => (
                                <option
                                    className="selectionOption"
                                    value={i + 1}
                                    key={i + 1}
                                >
                                    {i + 1}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button type="submit" className="buttonOne">
                        Add to List
                    </button>
                </form>
            </div>
        </div>
    );
};

const Item = ({ handleDone, handleUnDone, item, onDelete }) => {
    const linethrough = item.isDone ? "linethrough" : "";
    return (
        <div className="ItemContainer">
            <span className={linethrough}>
                <i className="listMark fa-solid fa-thumbtack"></i>
                {item.quantity} {item.name}
            </span>
            {!item.isDone && (
                <button className="BtnDone" onClick={() => handleDone(item.id)}>
                    <i
                        className="fa-solid fa-check"
                        style={{ padding: "0.3rem" }}
                    ></i>
                </button>
            )}
            {item.isDone && (
                <div>
                    <button
                        className="BtnDone"
                        onClick={() => handleUnDone(item.id)}
                    >
                        <i
                            className="fa-solid fa-arrow-left"
                            style={{ padding: "0.3rem" }}
                        ></i>
                    </button>
                    <button
                        className="BtnDone"
                        onClick={() => onDelete(item.id)}
                    >
                        {" "}
                        <i
                            className="fa-solid fa-trash"
                            style={{ padding: "0.3rem" }}
                        ></i>
                    </button>
                </div>
            )}
        </div>
    );
};

const ToDo = ({ handleDone, handleUnDone, toDo }) => {
    return (
        <div className="ItemList1">
            <h2 className="header2">
                <i
                    className="fa-solid fa-compass"
                    style={{ marginRight: "0.5em" }}
                ></i>
                To Do List
            </h2>
            <ul>
                {toDo.map((item) => (
                    <Item
                        handleUnDone={() => handleUnDone(item.id)}
                        handleDone={() => handleDone(item.id)}
                        item={item}
                        key={item.id}
                    />
                ))}
            </ul>
        </div>
    );
};

const Done = ({ handleDone, handleUnDone, onDelete, done }) => {
    return (
        <div className="ItemList2">
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
                        handleUnDone={() => handleUnDone(item.id)}
                        handleDone={() => handleDone(item.id)}
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
    const [items, setItems] = useState([]);
    useEffect(() => {
        const storedItems = JSON.parse(localStorage.getItem("listItems"));
        if (storedItems) {
            setItems(storedItems);
        }
    }, []);
    const saveItemsToLocalStorage = (items) => {
        localStorage.setItem("listItems", JSON.stringify(items));
    };
    const handleAddItems = (inputValue, selectedValue) => {
        const newItem = {
            id: items.length,
            name: inputValue,
            quantity: selectedValue,
            isDone: false,
        };
        setItems([...items, newItem]);
        saveItemsToLocalStorage([...items, newItem]);
    };
    const handleUnDoneItems = (id) => {
        const valueToEdit = items.map((el) =>
            el.id === id ? { ...el, isDone: false } : el
        );
        setItems((items) =>
            items.map((el) => (el.id === id ? { ...el, isDone: false } : el))
        );

        localStorage.setItem("listItems", JSON.stringify(valueToEdit));
    };
    const handleDoneItems = (id) => {
        const valueToEdit = items.map((el) =>
            el.id === id ? { ...el, isDone: true } : el
        );
        setItems((items) =>
            items.map((el) => (el.id === id ? { ...el, isDone: true } : el))
        );

        localStorage.setItem("listItems", JSON.stringify(valueToEdit));
    };
    const toDo = items.filter((item) => !item.isDone);
    const done = items.filter((item) => item.isDone);

    const handleDeleteItems = (id) => {
        const valueToRemove = items.filter((item) => item.id !== id);
        setItems(items.filter((item) => item.id !== id));
        localStorage.setItem("listItems", JSON.stringify(valueToRemove));
    };
    return (
        <div className="travelListBox">
            <ItemInput onAddItems={handleAddItems} />
            <div className="subTravelListBox">
                <ToDo
                    handleDone={handleDoneItems}
                    items={items}
                    toDo={toDo}
                    handleUnDone={handleUnDoneItems}
                />
                <span className="border"></span>
                <Done
                    handleUnDone={handleUnDoneItems}
                    handleDone={handleDoneItems}
                    items={items}
                    done={done}
                    onDelete={handleDeleteItems}
                />
            </div>
        </div>
    );
};

export default TravelList;
