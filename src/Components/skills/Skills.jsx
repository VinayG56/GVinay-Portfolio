import React from 'react'
import './skills.css'
import Front from './Front'
import Back from './Back'
import Comp from './Comp'
import Design from './Design'

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section_title">Skills</h2>
        <span className="section_subtitle">My Technical Level</span>

        <div className="skills_container container grid">
            <Comp/>
            <Front/>
            <Back/>
            <Design/>
        </div>
    </section>
  )
}

export default Skills
