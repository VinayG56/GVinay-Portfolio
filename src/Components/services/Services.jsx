import React, { useState } from 'react'
import './services.css'

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index)=>{
        setToggleState(index);
    }
  return (
    <section className='services section' id='services'>
        <h2 className="section_title">Services</h2>
        <span className="section_subtitle">What I Can Do</span>

        <div className="services_container container grid">
            <div className="services_content">
                <div>
                    <i className="uil uil-web-grid services_icon"></i>
                    <h3 className="services_title">Web <br /> Developer</h3>
                </div>
                <span className="services_button" onClick={()=> toggleTab(1)}>View More <i className="uil uil-arrow-right services_button-icon"></i></span>

                <div className={toggleState===1 ? "services_modal active_modal" : "services_modal"}>
                    <div className="services_modal-content">
                        <i onClick={()=> toggleTab(0)} className="uil uil-times services_modal-close"></i>
                        <h3 className="services_modal-title">Web Developer</h3>
                        <p className="services_modal-description">Experience of doing Projects on variety of Ideas. I ensure to provide quality work to companies by using my skills.</p>
                        <ul className="services_modal-services grid">
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    I develop the User Interface.
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    Frontend Web page development.
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    Creating designed websites using CSS.
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    I will specify your company interests.
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    Capable of designing Full Stack Websites for companies.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services_content">
                <div>
                    <i className="uil uil-arrow services_icon"></i>
                    <h3 className="services_title">UI/UX <br /> Designer</h3>
                </div>
                <span onClick={()=> toggleTab(2)}  className="services_button">View More <i className="uil uil-arrow-right services_button-icon"></i></span>

                <div className={toggleState===2 ? "services_modal active_modal" : "services_modal"}>
                    <div className="services_modal-content">
                        <i onClick={()=> toggleTab(0)} className="uil uil-times services_modal-close"></i>
                        <h3 className="services_modal-title">UI/UX Designer</h3>
                        <p className="services_modal-description">Experience of doing Projects on variety of Ideas. I ensure to provide quality work to companies by using my skills.</p>
                        <ul className="services_modal-services grid">
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                Strong understanding of human interaction principles.
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                Proven ability to create engaging user experiences.
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                Designing user-friendly interfaces for mobile apps.
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                Ensures that a product is understandable to the user.
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                I can improve user experience through my functional designs.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services_content">
                <div>
                    <i className="uil uil-brackets-curly services_icon"></i>
                    <h3 className="services_title">Competitive <br /> Programmer</h3>
                </div>
                <span onClick={()=> toggleTab(3)} className="services_button">View More <i className="uil uil-arrow-right services_button-icon"></i></span>

                <div className={toggleState===3 ? "services_modal active_modal" : "services_modal"}>
                    <div className="services_modal-content">
                        <i onClick={()=> toggleTab(0)} className="uil uil-times services_modal-close"></i>
                        <h3 className="services_modal-title">Competitive Programmer</h3>
                        <p className="services_modal-description">Experience of doing Projects on variety of Ideas. I ensure to provide quality work to companies by using my skills.</p>
                        <ul className="services_modal-services grid">
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    I develop the User Interface.
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    Frontend Web page development.
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    Creating designed websites using CSS.
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    I will specify your company interests.
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    Capable of designing Full Stack Websites for companies.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services
