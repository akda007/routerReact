import { Box, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <>
            <Stack bgcolor="lightblue" sx={{
                height: "80px"
            }} justifyContent="space-between" gap={10} direction="row" alignItems="center" paddingLeft={5} paddingRight={5}>
                <Typography>
                    Sitezinho...
                </Typography>
                <Box>
                    <Link to="/">Contatos</Link>
                </Box>
            </Stack>
        </>
    )
}