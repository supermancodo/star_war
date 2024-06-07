import { Button, Card } from '@mui/material';
import { styled } from '@mui/system';

export const StyledButton = styled(Button)(({ theme }) => ({
  transition: 'background-color 0.3s, border-color 0.3s, box-shadow 0.3s, color 0.3s',
  cursor: 'pointer',
  backgroundColor: 'transparent',
  borderColor: 'green',
  color: 'green',
  border: '1px solid green',
  '&:hover': {
    backgroundColor: 'white',
    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)',
    border: 'none',
    color: 'green'
  },
}));


export const StyledCard = styled(Card)(({ theme }) => ({
  width: 300,
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  margin: theme.spacing(2),
  transition: 'box-shadow 0.3s ease-in-out',
  '&:hover': {
    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.3)',
  },
}));