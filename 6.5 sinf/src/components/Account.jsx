function Account({handleLogout,name}) {
  return (
    <form onSubmit={handleLogout}>Welcome! {name}<br/> <button>logOut</button></form>
  )
}

export default Account