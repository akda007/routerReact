import { Button, Stack, Typography } from "@mui/material";
import { NavbarItem } from "./styles";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <Stack flexDirection="row" justifyContent="space-between" alignItems="center" sx={{
            backgroundColor: "#3399ff",
            height: "80px",
            padding: "10px",
            position: 'fixed',
            width: "100vw",
            top: 0,
            zIndex: 9999
        }}>
            <Typography>Site</Typography>
            <Stack flexDirection="row" gap={5} alignItems="center" justifyContent="center">
                <NavbarItem>
                    <Link to="/">
                        <Button variant="outlined">
                            <span className="material-symbols-outlined" style={{color: "white"}}>home</span>
                        </Button>
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link to="/contato">
                    <Button variant="outlined">
                            <span className="material-symbols-outlined" style={{color: "white"}}>contact_page</span>
                        </Button></Link>
                </NavbarItem>
                <NavbarItem>
                    <Link to="/produtos">
                    <Button variant="outlined">
                            <span className="material-symbols-outlined" style={{color: "white"}}>shopping_bag</span>
                        </Button></Link>
                </NavbarItem>
                <NavbarItem>
                    <Link to="/sobre">
                    <Button variant="outlined">
                            <span className="material-symbols-outlined" style={{color: "white"}}>info</span>
                        </Button></Link>
                </NavbarItem>
            </Stack>
        </Stack>
    )
}