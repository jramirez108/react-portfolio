import React from 'react'
import '../css/about.css'
import { Container, Row } from 'reactstrap';
import linkedin from '../img/linkedinIcon.svg'
import github from '../img/githubIcon.svg'
import resumeIcon from '../img/resumeIcon.svg'
import SkillContainer from './SkillContainer'
import EmploymentEntry from './EmploymentEntry';

export default function About() {
    var mainspringDescription = ['Developed a specialized data migration tool to seamlessly transfer sensitive medical records from an outdated SQLite database to a revamped version with significant schema changes. Employing C#, .NET 7, Entity Framework, and Log4Net, I engineered a secure solution ensuring data integrity and confidentiality during the transition.',
        'Developed a live chat function into our Electronic Health Record (EHR) system, enabling real-time messaging among users.',
        'Continuously enhanced ASP.NET Core-built REST API by developing and updating controllers to accommodate new functionalities. Additionally, created comprehensive unit tests for these endpoints, ensuring the API\'s stability and reliability.'];
    var belcanDescription = ['Led the development and maintenance of both internal and external support websites utilizing PHP, HTML, CSS, JavaScript, and MySQL.',
        'Successfully addressed around 120 work items in one year, encompassing bug fixes and new feature requests aimed at optimizing Support Center operations. ',
        'Played an integral role in the development of a web-based license tracking software system, utilizing Bootstrap, JavaScript, and PHP. This versatile solution was designed for seamless integration across multiple programs.']
    var locDescription = ['Led a project to migrate financial system files to GitHub, streamlining accessibility and collaboration for the team.',
        'Developed three financial interfaces using Python, cx_Oracle, and SQL queries, collaborating closely with the Financial Systems Division to optimize Python classes.'];
    var fcpsDescription = ['Orchestrated workstation setup and configuration for employees, managing a dedicated team of eight to provide exemplary technology support to multiple schools.',
        'Administered Active Directory user and group operations, resolving hardware, software, and network issues across different devices and models efficiently.'];
    return (
        <div className="about">
            <Container>
                <h1>Jose Ramirez Anleu</h1>
                <h2>Full-Stack Developer based out of Baltimore, MD. </h2>
                <h4>Throughout the last three years, my tenure as a defense contractor has encompassed involvement in a range of projects. Notably,
                    I contributed significantly to the development of a customized support center website,
                    integrating specialized tools and a ticketing system for the Mission Command Support Center (MCSC).
                    Additionally, I played a crucial role in the creation of an advanced Electronic Health Record system for the MC4 program.
                </h4>
                <div className="social">
                    <a href="https://www.linkedin.com/in/jose-a-ramirez/" target="__blank"><img src={linkedin} alt="linkedin" /></a>
                    <a href="https://github.com/jramirez108" target="__blank"><img src={github} alt="github" /></a>
                    <a href="https://drive.google.com/file/d/1VwfgJA6R4_u7ERfRMZs3xJpkYV5ATVhY/view?usp=sharing" target="__blank"><img src={resumeIcon} alt="resume" /></a>
                </div>
                <div className='skills-container'>
                    <h1 className="skills">Skills</h1>
                    <Row>
                        <SkillContainer icon="c-sharp.png" content="C#" />
                        <SkillContainer icon="net-icon.svg" content=".NET Framework" />
                        <SkillContainer icon="ef8.png" content="Entity Framework" />
                        <SkillContainer icon="xunit.png" content="xUnit" />
                    </Row>
                    <Row>
                        <SkillContainer icon="php.svg" content="PHP" />
                        <SkillContainer icon="html5.png" content="HTML5" />
                        <SkillContainer icon="css3.svg" content="CSS3" />
                        <SkillContainer icon="js.png" content="Javascript" />
                    </Row>
                    <Row>
                        <SkillContainer icon="node.png" content="Node.js" />
                        <SkillContainer icon="react.svg" content="React.js" />
                        <SkillContainer icon="vuejs.png" content="Vue.js" />
                        <SkillContainer icon="gitlab.png" content="Gitlab" />
                    </Row>
                    <Row>
                        <SkillContainer icon="azuredevops.png" content="Azure DevOps" />
                        <SkillContainer icon="sqlite.png" content="SQLite" />
                        <SkillContainer icon="sqlserver.svg" content="Microsoft SQL Server" />
                        <SkillContainer icon="mysql.png" content="MySQL" />
                    </Row>
                </div>

                <div className='resume'>
                    <h1>Employment</h1>
                    <EmploymentEntry companyName="Mainspring, Inc"
                        date="April 2022 - Current"
                        location="Aberdeen Proving Grounds, MD (Remote)"
                        role="Applications Developer"
                        description={mainspringDescription} />
                    <EmploymentEntry companyName="Belcan"
                        date="January 2021 - April 2022"
                        location="Frederick, MD (Remote)"
                        role="Full-Stack Web Developer"
                        description={belcanDescription} />
                    <EmploymentEntry companyName="Library Of Congress"
                        date="May 2020 - July 2020"
                        location="Washington, DC"
                        role="Financial System Analyst Intern"
                        description={locDescription} />
                    <EmploymentEntry companyName="Frederick County Public Schools"
                        date="August 2019 - January 2021"
                        location="Frederick, MD"
                        role="Technology Support Specialist"
                        description={fcpsDescription} />
                </div>
            </Container>
        </div>
    )
}
