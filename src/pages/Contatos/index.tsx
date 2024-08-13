import { Stack, Typography } from "@mui/material";
import Navbar from "../../shared/components/Navbar";
import Footer from "../../shared/components/Footer";
import { ContactValue } from "./styles";
import { Content } from "../../shared/components/Content";

export default function Contatos() {
    return (
        <>
            <Navbar />

            <Content>
                <Typography variant="h2">
                    Contatos
                </Typography>

                <Stack
                    flexDirection="row"
                    justifyContent="space-between"
                    paddingTop="50px"
                    maxWidth="800px"
                    marginLeft="auto"
                    marginRight="auto"
                    gap={5}
                    flexWrap="wrap"> 

                    <ContactValue label="Email" value="lojinha@gmail.com"/>

                    <ContactValue label="Phone" value="(41) 99966-1812"/>

                    <Typography sx={{flexBasis: "100%"}}>
                        Address: Rua naoseioquela da esquina, 512
                    </Typography>
                </Stack>
            </Content>

            <Footer/>
        </>
    )
}