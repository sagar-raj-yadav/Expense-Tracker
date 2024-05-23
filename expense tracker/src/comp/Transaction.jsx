
import { ListItemText, ListItem, styled, ListItemIcon } from '@mui/material';

const List = styled(ListItem)`
    display: flex;
    margin-top: 10px;
    border: 1px solid #F6F6F6;
`;

const Transaction = ({transaction}) => {
    
   
    return (
        <>
            <ListItem>
                <ListItemText>{transaction.text}</ListItemText>
                <ListItemText>{transaction.amount}</ListItemText>

            </ListItem>
        </>
    )
}

export default Transaction;