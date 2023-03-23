import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from './Button'

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material/CssBaseline";

const BasicTextFields = ({title, setEmail, setPassword, handleAction}) => {
    // theme
    const theme = createTheme()
    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{height: '100vh'}}>
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
                            t.palette.mode = 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        ackgroundPosition: 'center',
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
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)' : {m: 1, width: '25ch'},
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField 
                            id="outlined-basic" 
                            label="Enter your Email" 
                            variant="outlined"
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                        <TextField 
                            id="password" 
                            label="Enter your password" 
                            variant="outlined" 
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Box>
                    <Button title={title} handleAction={handleAction}/>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}
 
export default BasicTextFields;