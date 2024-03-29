const Account = () => {
  const handleBtn=(e)=>{
e.preventDefault()
  }
  return (
    <div className="container">
    <h1>This is Account page</h1>
      <h2>ToDoList</h2>
      <form >
      <label >

        <input type="text" className="form-control" />
        </label>
        <label >
          <button className="btn btn-primary " onClick={handleBtn}>Add</button>
        </label>
      </form>
    </div>
  )
}

export default Account
