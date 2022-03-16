import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button'; import { StyledToolbar } from './styled';
import { goToRecipesList, goToLogin } from '../../routes/coordinator';
import { useNavigate } from "react-router-dom";

const Header = () => {
  let navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <StyledToolbar>
          <Button onclick={() => goToRecipesList()} color="inherit">Cookenu</Button>
          <Button onclick={() => { navigate(goToLogin(navigate)) }} color="inherit">Login</Button>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}

export default Header