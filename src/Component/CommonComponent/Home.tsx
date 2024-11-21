import React from "react";
import backGround from '../../Images/backGround.png'
import backImage from '../../Images/backImage.png'
// import Box from "@mui/material/Box";
import Marquee from "react-fast-marquee";

import '../../index.css'
import { Box, Container} from "@mui/material";





export const StartPage=()=>{

 

  return(
    
      <>


{/* 

<Box
      sx={{
        backgroundColor: 'rgba(0, 8, 20, 1)',
    
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <img
        src="https://media.istockphoto.com/id/1492983873/photo/podium-made-with-white-marble-and-gold-beautiful-abstract-geometric-background.jpg?s=612x612&w=0&k=20&c=-Hj0Fwex5ClMTjaW599ttuLUjv2HErX2d49D2K8IFvw="
        loading="lazy"
        alt="ArtGallery"
        style={{
          width: '100vw', // Set width to 100% of viewport width
          height: '100vh', // Set height to 100% of viewport height
          objectFit: 'cover', // Ensure the image covers the entire space
        }}
      />
      <Container fixed className='text-on-image'>
        <h3 className="mt-15"> Welcome To Art Museum. </h3>
      </Container>
    </Box> */}

  <div className="relative overflow-hidden bg-white">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
             Welcome To Musuem Of Arts.
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              This year, our new Art collection will shelter you from the diiffrent arts of Collection.
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8 ">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100 ">
                        <img
                          src="https://media.istockphoto.com/id/1530808457/photo/young-latin-woman-artist-selling-her-art-at-outdoor-market.jpg?s=612x612&w=0&k=20&c=OeN2r4SVnmHqAqBSmCxLG80NbbExUKlFZfh02qltNXU="
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://media.istockphoto.com/id/544318804/photo/closeup-of-brushes-and-palette.jpg?s=612x612&w=0&k=20&c=_iFWe2WVpARRHuMIW6E7AQCOy7gia44W7nChWD6RmpI="
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://media.istockphoto.com/id/1816671934/video/hands-raised.jpg?s=640x640&k=20&c=GkMsglqRAPF9-5OxUPzLvU5sXahAWwsvi7VfBiG_z7M="
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1K_ou9G53t-o5r9mBOI4wehrE-23ae9zyYg&s"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaIgFulwI0owMQy25qQOlXAvKcfvcN8QNLbQ&s"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8  ">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://media.istockphoto.com/id/2148531383/photo/abstract-geometric-shapes-with-architectural-materials.jpg?s=612x612&w=0&k=20&c=gOfUYXAdphbH37ASHDTAVt2OvI9Lq69JkBzYtG_5PGA="
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg ">
                        <img
                          src="https://media.istockphoto.com/id/1219900430/photo/3d-render-female-mannequin-body-parts-inside-golden-triangular-frame-isolated-on-white.jpg?s=612x612&w=0&k=20&c=Cg5AOg04M10SRGzsT6ILzsTpSDmMYNOHXMSpc3_sPK0="
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

           
            </div>
          </div>
        </div>
      </div>
    </div>

   
      </>
  )
}