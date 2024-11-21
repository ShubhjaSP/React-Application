import backGround from '../../Images/backGroundImg.png'
import about from '../../Images/about.png'
import backImage1 from '../../Images/backImage1.png'
import { Box, Container} from "@mui/material";


export const About=()=>{

    return(
        <>
      
       
   

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
        src={about}
        loading="lazy"
        alt="ArtGallery"
        style={{
          width: '100vw', // Set width to 100% of viewport width
          height: '100vh', // Set height to 100% of viewport height
          objectFit: 'cover', // Ensure the image covers the entire space
        }}
      />
   
    </Box>
      
    
        </>
    )
}