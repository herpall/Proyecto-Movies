import React from "react";
import { Button, Container } from "@mui/material";
import { useContext } from "react";
import { DataContext } from "../Context/dataContext";

const data2 = {
    nombre: "Facundo",
    edad: 23
}

export const ButtonChangeData = () => {

    const { setData2 } = useContext<any>( DataContext )
    return(
        <Container sx={{background: 'black'}}>    
            <Button 
                variant='contained' 
                color='primary'
                onClick= {()=> setData2( data2 )}>
                Change Data
            </Button>
        </Container>   
    )
}