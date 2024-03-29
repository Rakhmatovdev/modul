import Not from "../404/404.gif.mp4"
const NotFound = () => {
  return (
    <div className="container">
    <h1 className="text-center text-secondary">
        OOOPS...
    </h1>
    <video src={Not} className="w-50" autoPlay/>
    <h2 className="text-center text-secondary">
        Page Not Found
    </h2>
    </div>
  )
}

export default NotFound