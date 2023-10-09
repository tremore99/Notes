import { IconButton } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Your Notes</h1>
            <div className="button">
                <IconButton aria-label="logout">
                    <LogoutIcon sx={{ color: "white" }}/>
                </IconButton>
            </div>
        </nav>
        
    );
}
 
export default Navbar;