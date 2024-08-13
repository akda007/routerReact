import { useParams } from "react-router-dom";
import { Content } from "../../shared/components/Content";
import Footer from "../../shared/components/Footer";
import Navbar from "../../shared/components/Navbar";
import { useEffect, useState } from "react";
import { Box, Button, CircularProgress, Stack, Typography, useMediaQuery } from "@mui/material";

export default function ProductView() {
    const { productId } = useParams();
    const [product, setProduct] = useState<any>(null);
    const matches = useMediaQuery('(max-width:600px)');

    useEffect(() => {
        (async () => {
            await new Promise(r => setTimeout(() => r(0), 1000));

            if (productId == null) {
                throw new Error("Null id");
            }

            const res = await fetch(`https://dummyjson.com/products/${productId}`);
            const prod = await res.json();

            setProduct(prod);
        })();
    }, [productId]);

    return (
        <>
            <Navbar />

            <Content bgcolor="#f2f2f2" position="relative" alignItems="center" justifyContent="center">
                <Stack flexDirection={matches ? "column" : "row"} padding={4} minHeight="450px" height="max-content" width="95%" maxWidth="750px" bgcolor={product && "white" || ""} borderRadius={5}>
                    {product && (
                        <>
                            <Stack maxWidth={"300px"} height={"450px"} sx={{objectFit: "cover"}} alignItems="center" justifyContent="center">
                                <img src={product.images[0]} alt="" style={{maxWidth: "100%", minWidth: "200px"}}/>
                            </Stack>
                            <Stack justifyContent="space-between">
                                <Box>
                                    <Typography variant="h4">
                                        {product.title}
                                    </Typography>

                                    <Box>
                                        <Typography fontSize={"1.1rem"} color={"gray"}>
                                            {product.description}
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box alignSelf  ={"flex-end"}>
                                    <Button variant="outlined" color="secondary">${product.price}</Button>
                                </Box>
                            </Stack>
                        </>
                    ) || (
                        <CircularProgress sx={{
                            position: "absolute",
                            top: "0", left: "0", right: "0", bottom: "0",
                            margin: "auto auto"
                        }}>
                        </CircularProgress>
                    )}
                </Stack>
            </Content>

            <Footer/>
        </>
    )
}