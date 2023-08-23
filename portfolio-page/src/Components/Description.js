import React from 'react'
import { SvgIcon, Typography } from '@mui/material'

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

                <div>
                    <div>
                        <Typography variant='subtitle1'> React </Typography>
                        <SvgIcon>
                            <svg
                                xmlns='https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg'
                                height="1em"
                                width="1em"
                            ></svg>
                        </SvgIcon>

                    </div>

                </div>
            </div>


        </div>

    )
}

