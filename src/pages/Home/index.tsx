import { Typography } from "@mui/material";
import Navbar from "../../shared/components/Navbar";
import Footer from "../../shared/components/Footer";
import { Content } from "../../shared/components/Content";

export default function Home() {
    return (
        <>
            <Navbar />

            <Content>
                <Typography variant="h2">
                    Lojinha muito boa
                </Typography>
            </Content>

            <Footer/>
        </>
    )
}