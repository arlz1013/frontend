const Header = () => {
    return (

<div className="Header">
    <div className="header">
        <div className="left-menu">
        <div className="logo"><a className="fa fa-wrench"></a><br/>
            <div>Ferreteria</div>
        </div>
        <div className="accordion">
            <div className="section">
                <input type="radio" name="accordion-1" id="section-1" value="toggle"/>
                <label htmlFor="section-1"><span>Inicio</span></label>
                <div className="content">
                    <ul>
                    <li><a className="fa fa-tasks" href="/"></a><span>Bandeja</span></li>
                    <li><a className="fa fa-calendar-o" href="/calendar"></a><span>Calendario</span></li>
                    <li><a className="fa fa-bell-o"></a><span>Notificaciones</span></li>
                    </ul>
                </div>
            </div>
            <div className="section">
                <input type="radio" name="accordion-1" id="section-2" value="toggle"/>
                <label htmlFor="section-2"> <span>Factura</span></label>
                <div className="content">
                    <ul>
                    <li><a className="fa fa-shopping-cart"></a><span>Nueva</span></li>
                    <li><a className="fa fa-folder"></a><span>Hitorial</span></li>
                    <li><a className="fa fa-money"></a><span>Caja</span></li>
                    
                    </ul>
            </div>
            </div>
            <div className="section">
                <input type="radio" name="accordion-1" id="section-3" value="toggle"/>
                <label htmlFor="section-3"> <span>Inventario</span></label>
                <div className="content">
                    <ul>
                        <li><a className="fa fa-rocket"></a><span>Productos</span></li>
                        <li><a className="fa fa-sort-amount-asc"></a><span>Cantidad</span></li>
                        <li><a className="fa fa-group"></a><span>Proovedores</span></li>
                    </ul>
            </div>
            </div>
        </div>
        </div>
    </div>
    
</div>

);
}

export default Header;