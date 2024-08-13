import { Grid, Stack, Typography } from "@mui/material";
import { Content } from "../../shared/components/Content";
import Navbar from "../../shared/components/Navbar";
import Footer from "../../shared/components/Footer";
import { useEffect, useState } from "react";
import Card from "./components/Card";

export default function Produtos() {
    const [products, setProducts] = useState([])
    
    useEffect(() => {
        (async () => {
            const res = await fetch("https://dummyjson.com/products");
            const value = await res.json();

            setProducts(value.products)
        })();
    }, []);

    return (
        <>
            <Navbar />

            <Content sx={{backgroundColor: "#F2F2F2"}}>
                <Typography variant="h2">
                    Lista de produtos
                </Typography>


                <Grid container justifyContent="center" marginTop={2} marginBottom={5} spacing={5} maxWidth="1400px" marginLeft="auto" marginRight="auto">
                    { products.map( x => (
                        <Grid key={crypto.randomUUID()} item>
                            <Card product={x}/>
                        </Grid>

                    ))}
                </Grid>
            </Content>

            <Footer />
        </>
    )
}