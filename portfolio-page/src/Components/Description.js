import React from 'react'
import { SvgIcon, Typography } from '@mui/material'
import ReactLogo from '../React-icon.svg'
import Clogo from '../C-logo.svg'
import NodeLogo from '../node-logo.svg'

export default function Description() {
    return (
        <div>
            <div>
                <Typography variant='h4'>
                    Hey, I'm Sam!
                </Typography>
                <Typography variant='h3'>
                    Full-Stack Software Developer
                </Typography>
                <Typography variant='h4'>
                    in Cuyahoga Falls, OH
                </Typography>
            </div>

            <div>
                <Typography variant='subtitle1'>
                    I'm a software developer who loves learning and is excited about all aspects of modern web development! <br></br> I love pushing myself to work through a project!
                </Typography>
            </div>

            <div>
                <Typography variant='h4'>
                    <strong> Skills. </strong>
                </Typography>

                <div class="skills-list">
                    <div class="skills">
                        <Typography variant='subtitle1'> React </Typography>
                        <img
                            src={ReactLogo}
                            style={{ height: 20, width: 20 }}
                        />
                    </div>

                    <div class="skills">
                        <Typography variant='subtitle1'> C# </Typography>
                        <img
                            src={Clogo}
                            style={{ height: 20, width: 20 }}
                        />

                    </div>

                    <div class="skills">
                        <Typography variant='subtitle1'> Node.js </Typography>
                        <img
                            src={NodeLogo}
                            style={{ height: 20, width: 20 }}
                        />

                    </div>

                </div>
            </div>
        </div >

    )
}

