import { Stack, Typography } from "@mui/material";
import { NavbarItem } from "./styles";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <Stack flexDirection="row" justifyContent="space-between" alignItems="center" sx={{
            backgroundColor: "#3399ff",
            height: "80px",
            padding: "10px"
        }}>
            <Typography>Site</Typography>
            <Stack flexDirection="row" gap={5} alignItems="center" justifyContent="center">
                <NavbarItem>
                    <Link to="/">Home</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link to="contato">Contato</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link to="produtos">Produtos</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link to="sobre">Sobre</Link>
                </NavbarItem>
            </Stack>
        </Stack>
    )
}