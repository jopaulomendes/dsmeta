import './styles.css'

function Header() {
    return (
        <header>
            <div className="logo-container">
            <img src="/src/assets/img/logo.svg" alt="Logo DSMeta"/>
                <h1>DSMeta</h1>
                <p>
                    Desenvolvido por  
                    <a href="https://www.linkedin.com/in/jo%C3%A3opaulo-damatamendes/?originalSubdomain=br"> 
                        @jopaulomendes
                    </a>
                </p>
            </div>
        </header>
    )
}

export default Header
