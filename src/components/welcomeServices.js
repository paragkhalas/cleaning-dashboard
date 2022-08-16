import React from 'react';
import profile from '../assets/images/userprofile.png';

const WelcomeService = ({ services }) => {
    return (
        <>
            <div className='row d-flex justify-content-center'>
                <div className='col-md-7'>
                    <div className='p-3 py-4 user-profile'>
                        <div className='text-center'>
                            <img src={profile} width='100' className='rounded-circle' alt='profile' />
                        </div>
                        <div className='text-center mt-3'>
                            <h5 className='mt-2 mb-0'>Good morning, Kaylie</h5>
                            <div className='px-4 mt-1'>
                                <p className='small-fonts'>What can Gables Columbus Center + Amenify do for you today?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row services'>
                <h6 className='service-heading'>Browse your services</h6>
                <div className='w-100'></div>
                {services.length &&
                    services.map((service, index) => {
                        return <div className='col' key={index}>
                            <div className='service-item'>
                                <div className='image-container'>
                                    <img src={service.path} alt={service.title} />
                                </div>
                                <h6 className='mt-2 mb-0'>{service.title}</h6>
                                <span className='price'>Starting at {service.price}</span>
                            </div>
                        </div>
                    })
                }
            </div>
        </>
    )
}

export default WelcomeService;