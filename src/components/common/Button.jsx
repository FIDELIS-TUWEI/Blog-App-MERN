import Button from "@mui/material/Button";

const BasicButtons = ({title, handleAction}) => {
    return ( 
        <Button variant="contained" fullWidth onClick={handleAction}>
            {title}
        </Button>
    );
}
 
export default BasicButtons;