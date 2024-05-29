import React from 'react'
import '../css/about.css'
import { Container, Row } from 'reactstrap';
import linkedin from '../img/linkedinIcon.svg'
import github from '../img/githubIcon.svg'
import resumeIcon from '../img/resumeIcon.svg'
import SkillContainer from './SkillContainer'
import EmploymentEntry from './EmploymentEntry';

export default function About() {
    var mainspringDescription = ['Developed and maintained the Army’s light-weight Electronic Health Record system, HALO. Written in C# and WPF with the ability to use both SQLite and Microsoft SQL Server databases.',
        'Involved in the development of new features ranging from WPF XAML user interfaces to the backend API endpoints and unit tests using xUnit.',
        'Designed and developed the HALO Data Migration Utility (HDMU) to securely extract, transform, and load data from an outdated database to the latest HALO version with significant schema changes.',
        'Developed a live chat feature into the HALO Patient Encounter System utilizing SignalR, enabling real-time messaging among users.'];
    var belcanDescription = ['Led the development and maintenance of both internal and external support websites utilizing PHP, HTML, CSS, JavaScript, and MySQL.',
        'Successfully addressed around 120 work items in one year, encompassing bug fixes and new feature requests aimed at optimizing Support Center operations. ',
        'Played an integral role in the development of a web-based license tracking software system, utilizing Bootstrap, JavaScript, and PHP. This versatile solution was designed for seamless integration across multiple programs.']
    var locDescription = ['Led a project to migrate financial system files to GitHub, streamlining accessibility and collaboration for the team.',
        'Developed three financial interfaces using Python, cx_Oracle, and SQL queries, collaborating closely with the Financial Systems Division to optimize Python classes.'];
    var fcpsDescription = ['Orchestrated workstation setup and configuration for employees, managing a dedicated team of eight to provide exemplary technology support to multiple schools.',
        'Administered Active Directory user and group operations, resolving hardware, software, and network issues across different devices and models efficiently.'];
    var caciDescription = ["Spearheaded the implementation of Agile methodologies, including initiating daily status meetings, to significantly enhance project prioritization and team performance.", "Led the complete overhaul of the SFLC Web Application Portal, built using ASP.NET MVC, by: Strategically removing unused applications. Upgrading and enhancing outdated applications. Successfully migrating simpler applications to the USCG SharePoint site using Microsoft Power Platform.",
        "Orchestrated a comprehensive testing phase for all applications, introducing: Detailed test plans. Multiple rounds of rigorous testing. A structured test result review process, establishing a new standard for quality assurance.",
        "Collaborated effectively with cross-functional teams to ensure smooth and seamless integration of new methodologies and application updates."
    ]
    return (
        <div className="about pt-5">
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
                    <a href="https://1drv.ms/b/s!At8bl5p1Y075iZMTIYPadgrnxjRPnw?e=hm3e0F" target="__blank"><img src={resumeIcon} alt="resume" /></a>
                </div>
                <div className='skills-container'>
                    <h1 className="skills">Skills</h1>
                    <Row>
                        <SkillContainer icon="c-sharp.png" content="C#" />
                        <SkillContainer icon="net-icon.svg" content=".NET Framework" />
                        <SkillContainer icon="typescript.png" content="TypeScript" />
                        <SkillContainer icon="ef8.png" content="Entity Framework" />
                    </Row>
                    <Row>
                        <SkillContainer icon="php.svg" content="PHP" />
                        <SkillContainer icon="react.png" content="React.js" />
                        <SkillContainer icon="html5.png" content="HTML5" />
                        <SkillContainer icon="css3.svg" content="CSS3" />

                    </Row>
                    <Row>
                        <SkillContainer icon="node.png" content="Node.js" />
                        <SkillContainer icon="xunit.png" content="xUnit" />
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
                    <EmploymentEntry companyName="CACI International, Inc"
                        subRole={"Contractor for USCG Surface Forces Logistics Center (SFLC)"}
                        date="January 2024 - Current"
                        location="Curtis Bay, MD (On-site)"
                        role=".NET Developer"
                        description={caciDescription} />
                    <EmploymentEntry companyName="Mainspring, Inc"
                        subRole={"Contractor for Army's PM MC4"}
                        date="April 2022 - January 2024"
                        location="Frederick, MD (Remote)"
                        role="Applications Developer"
                        description={mainspringDescription} />
                    <EmploymentEntry companyName="Belcan"
                        subRole={"Contractor for Army's PM Mission Command (PM MC)"}
                        date="January 2021 - April 2022"
                        location="Aberdeen Proving Grounds, MD (Remote)"
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
