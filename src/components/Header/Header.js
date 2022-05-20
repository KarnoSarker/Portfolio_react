import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import {Link, NavLink, withRouter} from 'react-router-dom'
import resumeData from '../Profile/resumeData';
import { keys } from '@mui/system';
import CustomButton from '../Buttons/CustomButton';

import './Header.css'


const Header = (props) => {

  const pathName = props?.location?.pathName;

  return (
    <Navbar expand='lg' sticky='top' className='header'>
      <Nav.Link as={NavLink} to='/' className='p-0 m-0'>
        <Navbar.Brand className='header_home'>
          <HomeRoundedIcon />
        </Navbar.Brand>
      </Nav.Link>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className='header_left'>
          <Nav.Link as={NavLink} to='/' className={pathName === '/' ? 'header_link_active' : 'header_link'} >
            Resume
          </Nav.Link>
          <Nav.Link as={NavLink} to='/portfolio' className={pathName === '/portfolio' ? 'header_link_active' : 'header_link'} >
            Portfolio
          </Nav.Link>
        </Nav>
        <div className='header_right'>
          {Object.keys(resumeData.socials).map((key)=> (
            <a href={resumeData.socials[key].link} target='_blank' rel="noreferrer">
              {resumeData.socials[key].icon}
              </a>
          ))}
          <CustomButton text={'Hire Me'} icon={<TelegramIcon />} />
        </div>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header;