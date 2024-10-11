import { useEffect, useState } from 'react';
import 'animate.css';
import { NavLink } from 'react-router-dom';
const navLinks = [
    { path: "home", label: "Inicio", active: false },
    { path: "invoice/generate", label: "Facturar", active: false },
    { path: "invoices", label: "Ver Facturas", active: false }
];

export const Navbar = () => {
    const [visible, setVisible] = useState(window.innerWidth > 1200);
    const [navMethod, setNavMethod] = useState(false);

    // Función para alternar el estado del menú
    const toggleNav = () => {
        setNavMethod(!navMethod);
    };

    const handleNavLinkClick = () => {
        setNavMethod(false);
    };


    const handleResize = () => {
        setVisible(window.innerWidth > 1200);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
    }, [visible]);

    return (
        <header className={`header-navigation ${visible ? '' : 'breakpoint-on'}`}>
            <div className='flex justify-center  border-b-4 h-[70px] md:h-[90px]' style={{ boxShadow: '-2px 2px 4px #dfdcdc', borderBottom: '1px solid #ebebeb' }}>
                <div className='w-full mx-4 md:mx-8 flex items-center'>
                    <div className='max-w-[1200px] w-full h-full mx-auto flex items-center justify-between'>
                        <div className={`visible lg:hidden ${navMethod ? 'nav-toggeler-padre' : ''}`}>
                            <div className={`nav-toggler ${navMethod ? 'menu-opened' : ''}`} onClick={toggleNav} >
                                <span></span><span></span><span></span>
                            </div>
                        </div>
                        <div className={`site-nav-menu  ${navMethod ? 'menu-opened' : ''}`}>
                            <ul>
                                {navLinks.map((link, index) => (
                                    <li key={index}>
                                        <NavLink
                                            className={({ isActive }) => `px-4 py-2 hover:text-orange-600 ${isActive ? 'text-primary' : 'text-black'}`}
                                            to={link.path}
                                            onClick={handleNavLinkClick}
                                        >
                                            {link.label}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                            {/* <div className='visible lg:hidden'>
                                <p>Desarrollador por juanjodev</p><br />
                                <p>Version 1.0</p>
                            </div> */}
                        </div>

                        <div className='flex justify-end'>
                            <ul className='primary-menu flex items-center'>
                                {/* <li className='menu-item m-0 relative hidden md:block leading-8 md:mx-4'>
                            <a href="">Registrarse</a>
                        </li> */}
                                <li className='menu-item m-0 relative block leading-8 md:mx-4'>
                                    <a className='text-black ' href="">Ingresar</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};
