import { Grid, Icon, Typography } from '@mui/material'
import React from 'react'
import './Resume.css'
import resumeData from '../../components/Profile/resumeData'
import CustomTimeline, { CustomTimelineSeparator } from '../../components/Timeline/Timeline'
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import { Timeline } from '@mui/icons-material'
import { TimelineContent, TimelineItem } from '@mui/lab'

const Resume = () => {
  return (
    <>
    <Grid container className='section pb_45' >
        <Grid item className='section_title mb_30'>
            <span></span>
            <h6 className='section_title_text'>About Me</h6>
        </Grid>
        <Grid item xs={12}>
            <Typography variant='body2' className='aboutme_text'>{resumeData.about}</Typography>
        </Grid>
    </Grid>

    <Grid container className='section pb_45' >
    <Grid item className='section_title mb_30'>
            <span></span>
            <h6 className='section_title_text'>Resume</h6>
    </Grid>
    <Grid item xs={12}>
      <Grid container className='resume_timeline'>
        <Grid item sm={12} md={6}>
        <CustomTimeline title='Work History' icon={<WorkIcon />}>
          {resumeData.experiences.map((experience)=>(
            <TimelineItem>
              <CustomTimelineSeparator />
              <TimelineContent className='resume_content'>
                <Typography className='timeline_title'>
                  {experience.title}
                </Typography>
                <Typography variant='caption' className='timeline_date'>
                  {experience.date}
                </Typography>
                <Typography variant='body2' className='timeline_description'>
                  {experience.description}
                </Typography>
              </TimelineContent>
            </TimelineItem>
          ))}
          
        </CustomTimeline>
        </Grid>
        <Grid item sm={12} md={6}>
        <CustomTimeline title='Education History' icon={<SchoolIcon />}>
          {resumeData.education.map((education)=>(
            <TimelineItem>
              <CustomTimelineSeparator />
              <TimelineContent className='resume_content'>
                <Typography className='timeline_title'>
                  {education.title}
                </Typography>
                <Typography variant='caption' className='timeline_date'>
                  {education.date}
                </Typography>
                <Typography variant='body2' className='timeline_description'>
                  {education.description}
                </Typography>
              </TimelineContent>
            </TimelineItem>
          ))}
          
        </CustomTimeline>
        </Grid>
      </Grid>
    </Grid>
    </Grid>
    

    <Grid container className='section pb_45' >
      <Grid item className='section_title mb_30'>
        <span></span>
        <h6 className='section_title_text'>My Services</h6>
      </Grid>

      <Grid item xs={12}>
        <Grid container>
          {
            resumeData.services.map((service) => (
              <Grid item xs={12} sm={6} md={3}>
                <div className='service'>
                  <icon className='service_icon'>{service.icon}</icon>
                  <Typography className='service_title' variant='h6' style={{fontWeight:1000}}>
                    {service.title}
                  </Typography>
                  <Typography className='service_description' variant='body2'>
                    {service.description}
                  </Typography>
                </div>
                </Grid>
            ))
          }
        </Grid>
      </Grid>
    </Grid>

    <Grid container className='section' ></Grid>

    <Grid container className='section' ></Grid>
    </>
  )
}

export default Resume