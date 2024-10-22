
import * as React from 'react';
import { Container, Grid2 } from '@mui/material'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Button from '@mui/material/Button';

function App() {
  

  return (
    <>
      <Container maxWidth="lg">
         <Grid2 container sx={{justifyContent:'center', alignItems:'center'}} spacing={{ xs: 2, md: 4 }} columns={{ xs: 1, sm: 1, md: 2 }}>
              <Card sx={{bgcolor:'transparent', boxShadow:'none',position:'relative',textAlign:'center'}}>
                  <CardMedia
                    sx={{ height: '230px', width:'250px', borderRadius:'8px' }}
                    image="/assets/image-waffle-desktop.jpg"
                    title="green iguana"
                  />
                <CardActions display="flex" sx={{ justifyContent:'center', alignItems:'center ',marginTop:"-30px"}}>    
                       <Button variant="outlined"
                        sx={{borderRadius:'50px',
                              bgcolor:'#fff', 
                              border:'1px solid black',
                              padding:'8px 35px', 
                              textTransform:'none',
                              fontSize:'14px',
                              fontWeight:'600',
                              color:'#000'}}>
                       <ShoppingCartOutlinedIcon sx={{paddingRight:'8px',color:'#c73b0f', fontSize:'30px'}}></ShoppingCartOutlinedIcon>
                        Add Cart</Button>
                </CardActions>
                
                    <CardContent sx={{display:'flex', flexDirection:'column', gap:'4px', padding:'20px 0px 0px 0px' }}>
                      <Typography gutterBottom variant="subtitle" sx={{textAlign:"left", margin:'0px', fontSize:'14px', color:'#87635A'}}>
                        Lizard
                      </Typography>
                      <Typography gutterBottom variant="subtitle"  sx={{textAlign:"left", margin:'0px', fontSize:'16px', fontWeight:'700'}}>
                          Waffle with Berries
                      </Typography>
                      <Typography gutterBottom variant="subtitle"  sx={{textAlign:"left", margin:'0px', color:'#C73B0F', fontSize:'16px', fontWeight:'700'}}>
                        $6.50
                      </Typography>
                    </CardContent>
             </Card>
             
             <Card sx={{bgcolor:'transparent', boxShadow:'none',position:'relative',textAlign:'center'}}>
                  <CardMedia
                    sx={{ height: '230px', width:'250px', borderRadius:'8px' }}
                    image="/assets/image-creme-brulee-desktop.jpg"
                    title="green iguana"
                  />
                <CardActions display="flex" sx={{ justifyContent:'center', alignItems:'center ',marginTop:"-30px"}}>    
                       <Button variant="outlined"
                        sx={{borderRadius:'50px',
                              bgcolor:'#fff', 
                              border:'1px solid black',
                              padding:'8px 35px', 
                              textTransform:'none',
                              fontSize:'14px',
                              fontWeight:'600',
                              color:'#000'}}>
                       <ShoppingCartOutlinedIcon sx={{paddingRight:'8px',color:'#c73b0f', fontSize:'30px'}}></ShoppingCartOutlinedIcon>
                        Add Cart</Button>
                </CardActions>
                
                    <CardContent sx={{display:'flex', flexDirection:'column', gap:'4px', padding:'20px 0px 0px 0px' }}>
                      <Typography gutterBottom variant="subtitle" sx={{textAlign:"left", margin:'0px', fontSize:'14px', color:'#87635A'}}>
                        Lizard
                      </Typography>
                      <Typography gutterBottom variant="subtitle"  sx={{textAlign:"left", margin:'0px', fontSize:'16px', fontWeight:'700'}}>
                          Waffle with Berries
                      </Typography>
                      <Typography gutterBottom variant="subtitle"  sx={{textAlign:"left", margin:'0px', color:'#C73B0F', fontSize:'16px', fontWeight:'700'}}>
                        $6.50
                      </Typography>
                    </CardContent>
             </Card>


             <Card sx={{bgcolor:'transparent', boxShadow:'none',position:'relative',textAlign:'center'}}>
                  <CardMedia
                    sx={{ height: '230px', width:'250px', borderRadius:'8px' }}
                    image="/assets/ice.jpg"
                    title="green iguana"
                  />
                <CardActions display="flex" sx={{ justifyContent:'center', alignItems:'center ',marginTop:"-30px"}}>    
                       <Button variant="outlined"
                        sx={{borderRadius:'50px',
                              bgcolor:'#fff', 
                              border:'1px solid black',
                              padding:'8px 35px', 
                              textTransform:'none',
                              fontSize:'14px',
                              fontWeight:'600',
                              color:'#000'}}>
                       <ShoppingCartOutlinedIcon sx={{paddingRight:'8px',color:'#c73b0f', fontSize:'30px'}}></ShoppingCartOutlinedIcon>
                        Add Cart</Button>
                </CardActions>
                
                    <CardContent sx={{display:'flex', flexDirection:'column', gap:'4px', padding:'20px 0px 0px 0px' }}>
                      <Typography gutterBottom variant="subtitle" sx={{textAlign:"left", margin:'0px', fontSize:'14px', color:'#87635A'}}>
                        Lizard
                      </Typography>
                      <Typography gutterBottom variant="subtitle"  sx={{textAlign:"left", margin:'0px', fontSize:'16px', fontWeight:'700'}}>
                          Waffle with Berries
                      </Typography>
                      <Typography gutterBottom variant="subtitle"  sx={{textAlign:"left", margin:'0px', color:'#C73B0F', fontSize:'16px', fontWeight:'700'}}>
                        $6.50
                      </Typography>
                    </CardContent>
             </Card>
          
         </Grid2>
      </Container>
    </>
  )
}

export default App
