import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const BasicTextFields = () => {
    return (
        <div>
            <div className="heading__container">
                <h3>Login to your Account</h3>
            </div> 
            <Box
                component="form"
                sx={{
                    '& > :not(style)' : {m: 1, width: '25ch'},
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="outlined-basic" label="Enter your Email" variant="outlined" />
                <TextField id="password" label="Enter your password" variant="outlined" />
            </Box>
        </div>
    );
}
 
export default BasicTextFields;