import React from 'react';

const Menu = () => {
    return (
        <div className='row navigation-container mb-4'>
            <div className='col'>
                <div className='nav-bg-image'>
                    <div className='image-details white-clr text-center shadow-1-strong rounded'>
                        <h6 className='mb-3 section-heading'>A clean and happy home.</h6>
                        <p className='description'>
                            Enjoy special pricing when you leave the cleaning to our local community pros.
                        </p>
                        <button className='rounded-pill white-clr btn btn-outline btn-cleaning'>See Cleaning</button>
                    </div>

                </div>
            </div>
            <nav>
                <div
                    role='menuitem'
                    className='menu-item active'
                >
                    Home
                </div>
                <div
                    role='menuitem'
                    className='menu-item'
                >
                    Agenda
                </div>
                <div
                    role='menuitem'
                    className='menu-item'
                >
                    Settings
                </div>
            </nav>
        </div>
    );
}

export default Menu;