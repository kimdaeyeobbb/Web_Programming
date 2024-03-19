 import "./Header.css";

const  Header = () =>{
    return (
        <div className="Header">
            <h1>{new Date().toDateString()}</h1>
        </div>
    );
}
 export default Header;