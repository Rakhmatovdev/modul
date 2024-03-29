import React, { useState } from "react";

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
  const [frinds, setFriends] = useState(initialFriends);
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);
  console.log(selectedFriend);
  
  const addUser = (res) => {
    setFriends((prev) => {
      return {...prev, res}
    })
  setSelectedFriend(null)
  }
  const handleShowAddForm = () => {
    setShowAddForm((prew) => !prew);
  };

  const handleAddFriend = (newFriend) => {
    setFriends((prew) => [...prew, newFriend]);
    handleShowAddForm();
  };

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friend={frinds}
          selectedFriend={selectedFriend}
          setSelectedFriend={setSelectedFriend}
        />
        {showAddForm && <AddFrendForm onAddFriend={handleAddFriend} />}
        <Button onClick={handleShowAddForm}>
          {showAddForm ? "Close" : "Show Form"}
        </Button>
      </div>
      <FormSplitBill selectedFriend={selectedFriend} addUser={addUser} />
    </div>
  );
}

export default App;

const FriendList = ({ friend, selectedFriend, setSelectedFriend }) => {
  return (
    <>
      {friend.map((friend) => {
        return (
          <Friend
            friend={friend}
            key={friend.id}
            selectedFriend={selectedFriend}
            setSelectedFriend={setSelectedFriend}
          />
        );
      })}
    </>
  );
};

const Friend = ({ friend, selectedFriend, setSelectedFriend }) => {
  let isSelected = selectedFriend?.id == friend.id;

  return (
    <li className={isSelected ? "select" : ""}>
      <img src={friend.image} alt={`my friend ${friend.name}`} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}$
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes You {Math.abs(friend.balance)}$
        </p>
      )}
      {friend.balance === 0 && <p>{friend.name} and You are even $</p>}
      {/* <button className="button">Select</button> */}

      <Button onClick={() => setSelectedFriend(friend)}>select</Button>
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

const AddFrendForm = ({ onAddFriend }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !image) {
      alert("Ma'lumot kiritilmadi!!!");
    }
    const newFriend = {
      id: Date.now(),
      name,
      image,
      balance: 0,
    };
    onAddFriend(newFriend);
  };

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button>ADD</Button>
    </form>
  );
};

const FormSplitBill = ({ selectedFriend,addUser }) => {
  const [count,setCount]=useState({
"bill":0,
"your":0,
"friend":0,
"select":""
  })

  
 

  const handleSubmit = (e) => {
    e.preventDefault()
   let result=count.bill-(count.select=="you"?count.your:count.friend);
  
    addUser(result);
  }

  return (<>
   {selectedFriend && <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend?.name}</h2>
      <label>Bill value</label>
      <input type="number"   onChange={(e) => setCount((prev) => {
                  return {...prev, bill: e.target.value}
                })} 
                required/> 

      <label>Your expense</label>
      <input type="number" onChange={(e) => setCount((prev) => {
                  return {...prev, your: e.target.value}
                })} 
                required/>

      <label>{selectedFriend?.name} expense</label>
      <input type="number" onChange={(e) => setCount((prev) => {
                  return {...prev, friend: e.target.value}
                })} 
                required/>

      <label>Who is paying the bill </label>
      <select  onChange={(e) => setCount((prev) => {
                  return {...prev, select: e.target.value}
                })} 
                required>
        <option value="you">You</option>
        <option value={selectedFriend?.name}>{selectedFriend?.name}</option>
      </select>
      <Button>Split bill</Button>
    </form>}
  </>);
};
