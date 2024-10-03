import CartWidget from './CartWidget.jsx'
function NavBar(p){
    return(
        <>
        <div className="nav-bar">
        <b>{p.label}</b>
        <CartWidget label='1'/>
        </div>
        </>
    )
}
export default NavBar