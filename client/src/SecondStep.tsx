import { styled } from "styled-components";
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import Country from "./Country";
import Steper from "./Stepper";
import {Button} from "@mui/material";
import Steper2 from "./Steper2";
import { useNavigate } from "react-router-dom";


const Container = styled.div`
  width: 100vw;
  background: #ededed;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 1.5rem;
`;

const Input = styled.input``;

const Select = styled.select``;
const Option = styled.option``;
const Item = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  padding: 5rem;
  .inputs {
    width: 40rem;
    height: 4rem;

    .input {
      width: 100%;
      height: 100%;
      font-size: 1.2rem;
      padding: 1rem 2rem;
      outline: none;
      border: none;
      border: 1px solid #34343457;
      border-radius: 0.5rem;
      cursor: pointer;
    }
  }
`;
const Div = styled.div``;

const SecondStep = () => {
const navigate=useNavigate();
const handleSubmit=()=>{
navigate("/datList")
}

  return (
    <Container>
      <Steper2 />
      <Div>
        <Typography variant="h3">Address Details</Typography>
      </Div>
      <Div className="main-box">
        <Item>
          <Label htmlFor="address">
           Address
            <Box className="inputs">
              <Input
                className="input"
                type="text"
                name="address"
                id="address"
              ></Input>
            </Box>
          </Label>
         

          <Label htmlFor="state">
          State
            <Box className="inputs">
              <Input
                className="input"
                type="text"
                name="state"
                id="state"
              ></Input>
            </Box>
          </Label>

          <Label htmlFor="city">
           City
            <Box className="inputs">
              <Input
                className="input"
                type="text"
                name="city"
                id="city"
              ></Input>
            </Box>
          </Label>
          
            <Country/>
            <Label htmlFor="pincode">
            Pincode
            <Box className="inputs">
              <Input
                className="input"
                type="number"
                name="pincode"
                id="pincode"
              ></Input>
            </Box>
          </Label>
        </Item>
        
      </Div>
      <Div>
        <Button variant="contained" sx={{fontSize:"1.5rem",width:"25rem"}} onClick={handleSubmit}>Submit</Button>
      </Div>
      
    </Container>
  );
};

export default SecondStep;
