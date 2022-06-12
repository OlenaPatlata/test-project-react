import { AppBar, Toolbar, Typography  } from '@material-ui/core';

const Nav = () => {
    return (
        <AppBar color='primary' position='static'>
            <Toolbar>
                <Typography variant='h6'>News</Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Nav;
