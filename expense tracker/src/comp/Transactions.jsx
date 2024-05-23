import { useState } from 'react';
import { Typography, List, Divider, styled, Box, TextField } from '@mui/material';
import Transaction from './Transaction';

const Component = styled(Box)`
    & > h5 {
        margin-bottom: 10px;
    }
`;

const Transactions = ({ transactions }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredTransactions = transactions.filter(transaction =>
        transaction.text.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <Component>
            <Typography variant="h5">Transaction History</Typography>
            <TextField 
                label="Search Transactions" 
                value={searchQuery} 
                onChange={handleSearchChange} 
                fullWidth 
                margin="normal"
            />
            <Divider style={{width: '100%', margin: '20px 0'}} />
            <List>
                {
                    filteredTransactions.map((transaction) => (
                        <Transaction key={transaction.id} transaction={transaction} />
                    ))
                }
            </List>
        </Component>
    );
};

export default Transactions;
