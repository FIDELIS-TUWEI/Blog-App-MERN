import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import LockOutlinedIcon from '@mui/material/LockOutlined'


// Theme
const theme = createTheme()
const Form = ({title, setEmail, setPassword, handleAction}) => {
    return ( 
        <ThemeProvider theme={theme}>
            <Grid
                container
                component="main"
                sx={{
                    height: '100vh'
                }}
            >
                <CssBaseline />

                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: 'url(https://source.unsplash.com/random)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50]: t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />

                <Grid
                    item
                    xs={12}
                    sm={8}
                    md={5}
                    component={Paper}
                    elevation={6}
                    square
                >
                    <Box></Box>
                </Grid>
            </Grid>
        </ThemeProvider>
     );
}
 
export default Form;