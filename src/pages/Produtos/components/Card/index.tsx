import { Box, Button,  Stack, Typography } from "@mui/material";
import { CardContainer } from "./styles";
import { Link } from "react-router-dom";




export default function Card({product}: {product: any}) {

    
    return (
        <>
            <CardContainer sx={{
                backgroundColor: "white",
                width: "300px",
                height: "450px"
            }}>
                <Box sx={{
                    objectFit: "cover",
                    height: "60%",
                    display: "flex",
                    justifyContent: "center"
                }}>
                    <img src={product.images[0]} alt="" style={{maxHeight: "100%", maxWidth: "100%"}}/>
                </Box>

                <Stack padding={4} height={"100%"} justifyContent={"space-between"}>
                    <Typography variant="h6">
                        {product.title}
                    </Typography>

                    <Typography sx={{alignSelf: "flex-end"}}>
                        <Link to={`${product.id}`}>
                            <Button variant="outlined" color="success">
                                ${product.price}
                            </Button>
                        </Link>
                    </Typography>
                </Stack>
            </CardContainer>
        </>
    )
}