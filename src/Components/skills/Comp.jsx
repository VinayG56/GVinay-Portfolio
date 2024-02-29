import React from 'react'

const Comp = () => {
  return (
    <div className="skills_content">
        <h3 className="skills_title">Competive Programming</h3>
        <div className="skills_box">
            <div className="skills_group">
                <div className="skills_data">
                <i class='bx bxl-nodejs skills_icon' ></i>
                <div>
                    <h3 className="skills_name">C</h3>
                        <span className="skills_level">Advanced</span>
                </div>
                </div>
                <div className="skills_data">
                <i class='bx bxl-php skills_icon' ></i>
                <div>
                    <h3 className="skills_name">C++</h3>
                        <span className="skills_level">Advanced</span>
                </div>
                </div>
                <div className="skills_data">
                <i class='bx bx-badge-check skills_icon'></i>
                <div>
                    <h3 className="skills_name">Python</h3>
                        <span className="skills_level">Intermediate</span>
                </div>
                </div>
                <div className="skills_data">
                <i class='bx bxl-mongodb skills_icon'></i>
                <div>
                    <h3 className="skills_name">Java</h3>
                        <span className="skills_level">Basic</span>
                </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Comp
