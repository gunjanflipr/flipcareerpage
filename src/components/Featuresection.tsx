import { Container, Grid, SimpleGrid, Skeleton, rem, Text, Title, Space, Image, Box, Flex, Button } from '@mantine/core';
import classes from "./herobullets.module.css";
import { useState } from 'react';


const slides = [
    {
        id: 1,
        header: 'Slide 1',
        content: 'Slide 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore atque pariatur voluptatibus nihil reiciendis cumque ipsam quaerat laboriosam',
        imgurl: 'https://flipr.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffashion-e-commerce-dashboard-1.f9dc36b1.png&w=3840&q=75'
    },

    {
        id: 2,
        header: 'Slide 2',
        content: 'Slide 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore atque pariatur voluptatibus nihil reiciendis cumque ipsam quaerat laboriosam',
        imgurl: 'https://flipr.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flargest-e-commerce-dashboard-1.6a0bd1df.png&w=3840&q=75'
    },
    {
        id: 3,
        header: 'Slide 3',
        content: 'Slide 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore atque pariatur voluptatibus nihil reiciendis cumque ipsam quaerat laboriosam',
        imgurl: 'https://flipr.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffashion-e-commerce-dashboard-1.f9dc36b1.png&w=3840&q=75'
    },
    {
        id: 4,
        header: 'Slide 4',
        content: 'Slide 4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore atque pariatur voluptatibus nihil reiciendis cumque ipsam quaerat laboriosam',
        imgurl: 'https://flipr.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flargest-e-commerce-dashboard-1.6a0bd1df.png&w=3840&q=75'

    },
];

function FeatureSection() {




    const [currentSlide, setCurrentSlide] = useState(0);
    const changeSlide = (index: number) => {
        setCurrentSlide(index);
    };


    return (

        <>
            <Box className={classes.margin}>
                <Container>
                    <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl">
                        <Grid gutter="md">
                            <Grid.Col>
                                <Title order={3} style={{ fontSize: '60px', fontWeight: 500, lineHeight: 1.1, marginBottom: '20px' }}>
                                    Why Flipr.ai
                                </Title>
                                <Container className={classes.buttoncontainer}>

                                    {slides.map((slide, index) => (
                                        <Button
                                            key={slide.id}
                                            onClick={() => changeSlide(index)}
                                            variant={index === currentSlide ? 'filled' : 'outline'}
                                            color="indigo"
                                            className={classes.button}
                                        >
                                            {slide.header}
                                        </Button>
                                    ))}

                                </Container>
                            </Grid.Col>
                            <Grid.Col>
                                <Grid.Col span={12} px={8} py={8}>
                                    <Grid gutter="md" align="center">
                                        <Grid.Col span={11}>
                                            <Text size="xl" fw={700} mb={2}>
                                                {slides[currentSlide].header}
                                            </Text>
                                            <Text color="gray" fw={500} lh="relaxed">
                                                {slides[currentSlide].content}
                                            </Text>
                                        </Grid.Col>
                                    </Grid>
                                </Grid.Col>
                            </Grid.Col>
                        </Grid>
                        <Image src={`${slides[currentSlide].imgurl}`} alt='image-tag' />
                    </SimpleGrid>
                </Container>
            </Box>
        </>
    );
}

export default FeatureSection;
