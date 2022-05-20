import { Grid, Typography } from '@mui/material'
import React from 'react'
import './Resume.css'
import resumeData from '../../components/Profile/resumeData'
import CustomTimeline, { CustomTimelineSeparator } from '../../components/Timeline/Timeline'
import WorkIcon from '@mui/icons-material/Work';
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

    <Grid container className='section' >
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
      </Grid>
    </Grid>
    </Grid>
    

    <Grid container className='section' ></Grid>

    <Grid container className='section' ></Grid>

    <Grid container className='section' ></Grid>
    </>
  )
}

export default Resume