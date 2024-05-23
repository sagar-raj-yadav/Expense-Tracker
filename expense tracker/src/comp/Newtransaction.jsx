import { useState } from 'react';
import {Typography, Box, TextField, Button, Radio, FormControl, FormControlLabel, FormLabel, RadioGroup, styled } from '@mui/material';

const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    & > h5, & > div, & > button {
        margin-top: 30px
    }
`;
const StyledButton = styled(Button)`
    background: #445A6F;
    color: #fff;
`;

const CustomRadio = styled(Radio)`
    color: #1976d2;

    &.Mui-checked {
        color: #1976d2;
    }
`;

const NewTransaction = ({ setTransactions }) => {
  const [text,settext]=useState('');
  const [amount,setamount]=useState();
  const [type, setType] = useState('expense');
  
  const addtransactiion=()=>{
    const transaction={
        id:Math.floor(Math.random()*1000000),
        text:text,
        amount:type === 'expense' ? -Math.abs(+amount) : Math.abs(+amount)
    };
    setTransactions(prevstate=>[transaction,...prevstate]);

  }


    return (
        <Container>
            <Typography variant="h5">New Transaction</Typography>
            <TextField label="Enter Expense"  onChange={(e)=>settext(e.target.value)}/>
            <TextField  label="Enter Amount"   onChange={(e)=>setamount(e.target.value) }/>
            
            <FormControl component="fieldset">
        <FormLabel component="legend">Type</FormLabel>
        <RadioGroup row aria-label="type" name="type" value={type} onChange={(e) => setType(e.target.value)}>
          <FormControlLabel value="expense" control={<CustomRadio />} label="Expense" />
          <FormControlLabel value="income" control={<CustomRadio />} label="Income" />
        </RadioGroup>
      </FormControl>
            
            <StyledButton variant="contained" onClick={addtransactiion} >Add Transaction</StyledButton>
        </Container>
    )
}

export default NewTransaction;