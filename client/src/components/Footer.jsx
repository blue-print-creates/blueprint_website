import React from "react";
import { Link, Container, Box } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ContactPageIcon from '@mui/icons-material/ContactPage';

const Footer = () => {
    return(
        <div className="footer" style={{marginTop: "100px"}}>
            <Box 
                py={{lg: 3, xs: 1, sm: 2}}
                style={{backgroundImage: "linear-gradient(to right, #f12711, #f5af19)"}}
            >
                <Container maxwifth="lg">
                    <Box container spacing= {5}>
                        <Box item xs={12} sm={4} style={{display: "flex", justifyContent: "center"}}>
                            <Box style={{padding: "20px"}}>
                                <Link href = "/" color="inherit">
                                    <ContactPageIcon/>
                                </Link>
                            </Box>
                            <Box style={{padding: "20px"}}>
                                <Link href = "/" color="inherit">
                                    <InstagramIcon/>
                                </Link>
                            </Box>
                            <Box style={{padding: "20px"}}>
                                <Link href = "/" color="inherit">
                                    <LinkedInIcon/>
                                </Link>
                            </Box>
                            <Box style={{padding: "20px"}}> 
                                <Link href = "/" color="inherit">
                                    <YouTubeIcon/>
                                </Link>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </div>
    )
}

export default Footer;