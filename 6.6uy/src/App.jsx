import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [freinds, setFreinds] = useState(initialFriends);
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectFreind, setSelectFreind] = useState(null);

  const handleShowAddForm = () => {
    setShowAddForm((prev) => !prev);
  };
  const handleAddFreind = (newFreind) => {
    setFreinds((prev) => [...prev, newFreind]);
    handleShowAddForm();
  };
  const handleSplitBill = (value) => {
    for (let i = 0; i < freinds.length; i++) {
      if (freinds[i].id === selectFreind.id) {
        freinds[i].balance = freinds[i].balance + value;
        setFreinds([...freinds]);
      }
    }
    setSelectFreind(false);
  };
  return (
    <div className="app">
      <div className="sidebar">
        <FreindsList setSelectFreind={setSelectFreind} selectFreind={selectFreind} freinds={freinds} />
        {showAddForm && <AddFreind onAddFreind={handleAddFreind} />}
        <Button onClick={handleShowAddForm}>{showAddForm ? "Close" : "Show form"}</Button>
      </div>
      {selectFreind && <FormSplitBill selectFreind={selectFreind} onSplitBill={handleSplitBill} />}
    </div>
  );
}
export default App;

const FreindsList = ({ freinds, selectFreind, setSelectFreind }) => {
  const sortedFriends = [...freinds].sort((a, b) => b.balance - a.balance);

  return (
    <ul>
      {sortedFriends.map((freind) => {
        return <Freind selectFreind={selectFreind} setSelectFreind={setSelectFreind} key={freind.id} freind={freind} />;
      })}
    </ul>
  );
};

const Freind = ({ freind, setSelectFreind, selectFreind }) => {
  const isSelected = selectFreind?.id == freind.id;
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={freind.image} alt={`my frend ${freind.name}`} />
      <h3>{freind.name}</h3>
      {freind.balance < 0 && (
        <p className="red">
          You owe {freind.name} {Math.abs(freind.balance)}$
        </p>
      )}
      {freind.balance > 0 && (
        <p className="green">
          {freind.name} owes you {Math.abs(freind.balance)}$
        </p>
      )}
      {freind.balance === 0 && <p> {freind.name} and You are even</p>}
      <Button className="button" onClick={() => setSelectFreind(freind)}>
        Select
      </Button>
    </li>
  );
};

const Button = ({ children, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
};

const AddFreind = ({ onAddFreind }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48?u=118836");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !image) {
      alert("Malumot kiriting");
      return;
    }
    const newFreind = {
      id: Date.now(),
      name,
      image,
      balance: 0,
    };
    onAddFreind(newFreind);
    setName("");
    setImage("https://i.pravatar.cc/48?u=118836");
  };
  return (
    <form className="form-add-friend " onSubmit={handleSubmit}>
      <label>Freind Name</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

      <label>Image URl</label>
      <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />

      <Button>Add</Button>
    </form>
  );
};

const FormSplitBill = ({ selectFreind, onSplitBill }) => {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("user");
  const paidByFreind = bill ? bill - paidByUser : "";
  const handleSubmit = (e) => {
    e.preventDefault();
    onSplitBill(whoIsPaying == "user" ? paidByFreind : -paidByUser);
  };
  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Hisobni {selectFreind?.name} bilan</h2>
      <label>💴 Chek qiymati</label>
      <input type="text" onChange={(e) => setBill(e.target.value)} value={bill} />

      <label> 🧍🏻‍♀️ Sizning Hisobingiz</label>
      <input type="text" onChange={(e) => setPaidByUser(Number(e.target.value))} value={paidByUser} />

      <label> 👯‍♂️ {selectFreind?.name} Hisobi </label>
      <input type="text" disabled value={paidByFreind} />

      <label> 🤑 Chekni kim To'laydi</label>
      <select onChange={(e) => setWhoIsPaying(e.target.value)} value={whoIsPaying}>
        <option value="user">Men</option>
        <option value="freind">{selectFreind?.name}</option>
      </select>
      <Button>Hisob to'landi</Button>
    </form>
  );
};
