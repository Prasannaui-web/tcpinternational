import { Box, Grid, Typography } from "@mui/material";

// import Grid from '@mui/material/Unstable_Grid';
import EducateBG from "../assets/EducatedCustomer.webp";
import transformCommunication from "../assets/Transform Your Customer Communications.webp"
import MarketingOnlineImg from "../assets/MarketingElevate.webp"

import EducateBGIcon from "../assets/Educate Customer Icon.png";
import TransformCommunicationIcon from "../assets/Transform communicationIcon.png";
import MarketingOnlineIcon from "../assets/Marketing_Online.png";

const services = [
    {
        title: "Educate and Empower Customers",
        description:
            "People understand better when they see it. MotoVisuals simplifies complex automotive concepts with clear, engaging animations—helping professionals explain symptoms, show repairs, and build customer trust through visual clarity.",
        image: EducateBG,
        icon: EducateBGIcon,
    },
    {
        title: "Transform Your Customer Communications",
        description:
            "Enhance communication at every stage of service. Narrated or interactive visuals clearly explain issues, boosting customer confidence, approval rates, and trust. Animations are easily shareable via email or SMS and viewable on any device.",
        image: transformCommunication,
        icon: TransformCommunicationIcon,
    },
    {
        title: "Elevate engagement with powerful marketing capabilities",
        description:
            "MotoVisuals adds engaging content to your website, social media, or lobby TV—showcasing your services while educating customers. It helps them understand issues like unusual noises and seek help proactively.",
        image: MarketingOnlineImg,
        icon: MarketingOnlineIcon,
    },
];

const serviceCard = () => {
    return (
        <Box id='whatwilldo' component='div'>
            <Box className="bodyContainerWidth">
                <Grid container spacing={3} style={{ display: 'flex', gap: '24px' }}>
                    {services.map((service, index) => (
                        <Grid item xs={12} md={6} lg={4} key={index}>
                            <Box className='WhatWillDoCard' style={{ background: `url(${service.image})`, backgroundSize: 'cover', overflow: 'hidden' }} >
                                <Box sx={{ zIndex: 1, display: 'flex', flexDirection: 'column !important' }}>
                                    <img src={service.icon} alt="Educate Customers Image" className="whatwillDoIcon" />
                                    <Box className='whatwillDoContent' sx={{}}>
                                        <Typography variant="h3" className="whatwillDoTitle"
                                            sx={{
                                                color: "#fff",
                                                fontSize: "28px",
                                                lineHeight: "1.2",
                                                fontFamily: "Bebas Neue, sans-serif",
                                                mb: 1.0,
                                                pr: 3,
                                            }}
                                        >
                                            {service.title}
                                        </Typography>
                                        <Typography variant="h5" className="whatwillDoDesc"
                                            sx={{
                                                color: "#fff",
                                                fontSize: "15px",
                                                fontWeight: '500',
                                                lineHeight: "24px",
                                                fontFamily: "Manrope, sans-serif",
                                                mb: 1.5, display: 'none',
                                            }}
                                        >
                                            {service.description}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box >

    );
};

export default serviceCard;
