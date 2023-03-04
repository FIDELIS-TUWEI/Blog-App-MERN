import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from './Button'

const BasicTextFields = ({title, setEmail, setPassword, handleAction}) => {
    return (
        <div>
            <div className="heading__container">
                <h3>{title} Account</h3>
            </div> 
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
        </div>
    );
}
 
export default BasicTextFields;