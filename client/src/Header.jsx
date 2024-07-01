import './Header.css'

 function Header() {
    return(
        <>
        <header className="main-header">
            <div className="header-title">
                <h1>G Counselling Services</h1>
            </div>
            <div className="header-menu">  
                <ul className="navbar">
                    <li>Home</li>
                    <li>Services</li>
                    <li>Counsellors</li>
                    <li>Contact Us</li>
                    <li>Log Out</li>
                </ul>
            </div>
        </header>
        </>
    )
}

export default Header;
