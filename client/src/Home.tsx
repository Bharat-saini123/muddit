import { styled } from "styled-components";
import { SyntheticEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Stack, Box, Typography } from "@mui/material";
import { useState } from "react";
import { addTable } from "./features/table/tableSlice";

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

const Input = styled.input`
  width: 100%;
  height: 100%;
  font-size: 1.2rem;
  padding: 1rem 2rem;
  outline: none;
  border: none;
  border: 1px solid #34343457;
  border-radius: 0.5rem;
  cursor: pointer;
`;

const Select = styled.select`
  width: 100%;
  height: 100%;
  font-size: 1.2rem;
  padding: 1rem 2rem;
  outline: none;
  border: none;
  border: 1px solid #34343457;
  border-radius: 0.5rem;
  cursor: pointer;
`;

const Home = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [mobile, setMobile] = useState("");
  const [govtid, setGovtid] = useState("");
  const [idnum, setIdnum] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [pincode, setPincode] = useState("");

  const dispatch = useDispatch();

  const [currentStep, setCurrentStep] = useState<number>(1);
  const navigate = useNavigate();

  const handleInput = (e: any) => {
    e.preventDefault();
    setGovtid(e.target.value);
  };
  const handlesexInput = (e: any) => {
    e.preventDefault();
    setSex(e.target.value);
  };

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleFinalSubmit = async (e: any) => {
    e.preventDefault();

    // Navigate to the next page
  };
  const data = useSelector((state: any) => {
    return state.table.tables[0].name;
  });
  console.log(data);
  return (
    <Container>
      <Stack spacing={2}>
        {currentStep === 1 && (
          <div>
            <Typography variant="h4">Personal Details</Typography>
            <Label htmlFor="username">Username</Label>
            <Input
              type="text"
              name="username"
              id="username"
              value={name}
              onChange={(e) => setName(e.target.value as string)}
            />

            <Label htmlFor="mobile">Mobile</Label>
            <Input
              type="text"
              name="mobile"
              id="mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value as string)}
            />

            <Label htmlFor="dob">Date of Birth or Age</Label>
            <Input
              type="text"
              name="dob"
              id="dob"
              value={age}
              onChange={(e) => setAge(e.target.value as string)}
            />

            <Label htmlFor="sex">Sex</Label>
            <Select id="sex" name="sex" onClick={handlesexInput}>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">Others</option>
            </Select>

            <Label htmlFor="govtId">Govt issued Id</Label>
            <Select id="govtId" name="govtId" onClick={handleInput}>
              <option value="adhaar">Adhaar</option>
              <option value="pan">Pan</option>
            </Select>
            {govtid === "adhaar" ? (
              <Input
                type="number"
                name="govtId"
                id="govtId"
                placeholder="Enter Adhaar Number"
                value={idnum}
                onChange={(e) => setIdnum(e.target.value as string)}
              />
            ) : (
              <Input
                type="text"
                name="govtId"
                id="govtId"
                placeholder="PAN"
                value={govtid}
                onChange={(e) => setGovtid(e.target.value as string)}
              />
            )}
            <Button variant="contained" onClick={handleNext}>
              Next
            </Button>
          </div>
        )}
        {currentStep === 2 && (
          <div>
            <Typography variant="h3">Address Details</Typography>
            <Label htmlFor="address">Address</Label>
            <Input
              type="text"
              name="address"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value as string)}
            />

            <Label htmlFor="state">State</Label>
            <Input
              type="text"
              name="state"
              id="state"
              value={state}
              onChange={(e) => setState(e.target.value as string)}
            />

            <Label htmlFor="city">
              City
              <Box className="inputs">
                <Input
                  className="input"
                  type="text"
                  name="city"
                  id="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value as string)}
                ></Input>
              </Box>
            </Label>
            {/* Include your Country component here */}

            <Label htmlFor="pincode">Pincode</Label>
            <Input
              type="number"
              name="pincode"
              id="pincode"
              value={pincode}
              onChange={(e) => setPincode(e.target.value as string)}
            />
            <Button variant="contained" onClick={handlePrevious}>
              Previous
            </Button>
            <Button variant="contained" onClick={handleFinalSubmit}>
              Submit
            </Button>
          </div>
        )}
      </Stack>
    </Container>
  );
};

export default Home;
