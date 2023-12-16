import React from "react";
import { Box, Button, Typography, styled} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { ProductCard } from "./ProductCard";





const Container = styled(Box)(({theme})=>({
    width:"85%",
    //border:"0.2px solid grey",
    height:"280px",
    margin:"20px auto",
    gap:"10px",
    overflowX:"scroll",
    display:"grid",
    gridTemplateRows:"1fr",
    gridTemplateColumns: 'repeat(12, 1fr)',
    overflowY:"hidden"
    

}))

const List = styled("ul")(({theme})=>({
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
   
    gap:"0 100px"


}))




export const Home = ()=>{

    const navigate = useNavigate()


    const handleCart = ()=>{
        navigate("/cart")
    
    }
    return(
        <Box>
            <Box sx={{width:"100%", backgroundColor:"blue", color:"white", height:"70px", display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center", }}>
                <Typography sx={{padding:"20px 40px",fontSize:"20px"}}>MiniStore</Typography>
                <List>
                    <Typography>Home</Typography>
                    <Typography>Product</Typography>
                    <Typography>Contact us</Typography>
                </List>
                
                <Box sx={{pr:"20px"}}>
                    <Typography onClick={handleCart} sx={{cursor:"pointer"}}>Cart</Typography>
                </Box>
                

            </Box>
            <Box sx={{width:"90%", backgroundColor:"pink", height:"500px", margin:"20px auto", display:"flex", flexDirection:"row"}}>
            </Box>
            <Typography sx={{textAlign:"center", fontSize:"25px"}}>Latest Product</Typography>
            <Container>
                <ProductCard/>
                <ProductCard/> <ProductCard/> <ProductCard/> <ProductCard/> <ProductCard/> <ProductCard/> <ProductCard/> <ProductCard/>
              

            </Container>
         

            




        </Box>
        
        
        
    )
}