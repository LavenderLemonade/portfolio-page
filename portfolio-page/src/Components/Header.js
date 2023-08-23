import React from 'react'
import { Typography } from '@mui/material'

export default function Header() {
    return (
        <div class="header">
            <Typography variant="h5" component="h5"> Sam. </Typography>
            <div class="menu">
                <a href="https://www.linkedin.com/in/its-me-sam/"> <Typography variant="subtitle1"> LinkedIn  </Typography> </a>
                <a href="https://github.com/LavenderLemonade"> <Typography variant="subtitle1"> GitHub </Typography> </a>
                <a href="https://docs.google.com/document/d/15NCq9UeQyrlLmJep0fH-cc3YiK-NAXc8/edit?usp=sharing&ouid=100538970747879470462&rtpof=true&sd=true"> <Typography variant="subtitle1"> Resume </Typography>  </a>
            </div>
        </div>

    )
}


