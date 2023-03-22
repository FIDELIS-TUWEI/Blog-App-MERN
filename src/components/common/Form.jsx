import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from './Button'

import { createTheme, ThemeProvider } from "@mui/material/styles";

const BasicTextFields = ({title, setEmail, setPassword, handleAction}) => {
    // theme
    const theme = createTheme()
    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{height: '100vh'}}>
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
        </ThemeProvider>
    );
}
 
export default BasicTextFields;