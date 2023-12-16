import React from "react";
import { Box, Button, Typography, styled} from '@mui/material'
import { useNavigate } from 'react-router-dom'







const Card = styled(Box)(({theme})=>({
    border:"0.2px solid blue",
    width:"200px",
    height:"90%",
    margin:"12px 5px",
    borderRadius:"5px"
    

}))



export const ProductCard = ()=>{
    return(
                <Card>
                    
                    <Box sx={{width:"100%", height:"50%"}}>
                    <img src="https://wallpapercave.com/wp/wp13267387.jpg" style={{width:"100%", borderRadius:" 5px 5px 0 0"}} />
                    </Box>
                    <Box sx={{padding:"1px 10px"}}>

                        <Typography sx={{fontSize:"15px"}}>Sugar</Typography>

                        <Box sx={{display:'flex', flexDirection:"row", justifyContent:"space-between", margin:"5px"}}>
                            <Typography  sx={{fontSize:"15px"}}>Rs 48/- </Typography>
                            <select>
                                <option>Select Qty</option>
                                <option>1kg</option>
                                <option>5kg</option>
                                <option>10Kg</option>
                            </select>
                        </Box>
                    
                        <Box sx={{display:"flex", flexDirection:"row", justifyContent:"space-between", margin:"15px 10px", }}>
                            <button style={{backgroundColor:"blue", color:"white", border:"none", padding:"5px 20px"}}>Add</button>
                            <button style={{backgroundColor:"blue", color:"white", border:"none", padding:"5px 20px"}}>Detail</button>
                        </Box>
                    </Box>

                   
                </Card>
    )
}