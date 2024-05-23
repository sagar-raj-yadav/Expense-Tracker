
import { Card, CardContent, styled, Typography, Box } from '@mui/material';

const Container = styled(Box)`
    display: flex;
    & > div {
        flex: 1;
        padding: 10px;
    }
`;

const ExpenseCard = ({ transactions }) => {
   const amounts = transactions.map(transaction => transaction.amount);
    const income = amounts.filter(item=>item>0).reduce((accumulator, item) => (accumulator + item), 0).toFixed(2);

    const expense = amounts.filter(item=>item<0).reduce((accumulator, item) => (accumulator + item), 0).toFixed(2);
    return (
        <Container>
            <Card>
                <CardContent>
                    <Typography>Income</Typography>
                    <Typography style={{ color: 'green' }}>${income}</Typography>
                </CardContent>
            </Card>
            <Card>
                <CardContent>
                    <Typography>Expense</Typography>
                    <Typography style={{ color: 'red' }}>${expense}</Typography>
                </CardContent>
            </Card>
        </Container>
    )
}

export default ExpenseCard;