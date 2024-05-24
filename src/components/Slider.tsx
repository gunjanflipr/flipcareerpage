import { useState, useRef } from 'react';
import { Container, Grid, SimpleGrid, Skeleton, rem, Text, Title, Space, Image, Box, Flex, Button } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import classes from "./herobullets.module.css";



const slides = [
    {
        id: 1,
        header: 'Slide 1',
        content: 'Content for slide 1',
    },
    {
        id: 2,
        header: 'Slide 2',
        content: 'Content for slide 2',
    },
    {
        id: 3,
        header: 'Slide 3',
        content: 'Content for slide 3',
    },
    {
        id: 4,
        header: 'Slide 4',
        content: 'Content for slide 4',
    },
];

function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const changeSlide = (index: number) => {
        setCurrentSlide(index);
    };

    return (
        // <Container size="xl">
        //   <Grid>
        //     <Grid.Col span={12}>
        //       <div style={{ maxWidth: '6xl', padding: '0 8px', margin: '0 auto', boxSizing: 'border-box' }}>
        //         <Grid>
        //           <Grid.Col span={12} md={6}>
        //             <div style={{ width: '100%', height: 'auto', overflow: 'hidden', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
        //               <Image src="https://dummyimage.com/600x400" alt="dummyImage" />
        //             </div>
        //           </Grid.Col>
        //           <Grid.Col span={12} md={6} mt={{ md: 8 }}>
        //             <div style={{ width: '100%', paddingBottom: '24px', marginBottom: '24px', maxWidth: 'md', marginRight: 'auto', paddingRight: '20px', paddingLeft: '0' }}>
        //               <Text style={{ fontSize: '2.25rem', fontWeight: '800', lineHeight: '1.2', color: '#374151' }}>
        //                 <span style={{ display: 'block', whiteSpace: 'nowrap' }}>Lorem, ipsum dolor.</span>
        //               </Text>
        //               <Text style={{ fontSize: '1rem', color: '#6B7280', maxWidth: '3xl', overflow: 'hidden' }}>{slides[currentSlide].content}</Text>
        //               <div style={{ position: 'relative', justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column', marginTop: '1rem' }}>
        //                 <div style={{ display: 'flex', gap: '0.75rem' }}>
        //                   {slides.map((slide, index) => (
        //                     <Button
        //                       key={slide.id}
        //                       onClick={() => changeSlide(index)}
        //                       variant={index === currentSlide ? 'filled' : 'outline'}
        //                       color="indigo"
        //                       style={{ padding: '0.75rem 1.5rem', fontSize: '1rem', borderRadius: '0.375rem' }}
        //                     >
        //                       {slide.header}
        //                     </Button>
        //                   ))}
        //                 </div>
        //               </div>
        //             </div>
        //           </Grid.Col>
        //         </Grid>
        //       </div>
        //     </Grid.Col>
        //   </Grid>
        // </Container>

        <>
            
            <section className="text-gray-600 body-font">
                <Container px={5} py={24} mx="auto" display="flex">
                    <Grid gutter="md">
                        <div className="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
                            <Title order={3} style={{ fontSize: '60px', fontWeight: 500, lineHeight: 1.1, marginBottom: '20px', textAlign: 'center' }}>
                                Flipr Careers
                            </Title>

                             
                        </div>
                        <div className="flex md:ml-auto md:mr-0 mx-auto items-center space-x-4">

                        </div>
                    </Grid>
                </Container>
            </section >

            <Box style={{ position: 'relative', paddingTop: '32px', paddingBottom: '36px', backgroundColor: '#F0F4F8', overflow: 'hidden' }}>
                <Container style={{ zIndex: 10, marginTop: '32px' }}>
                    <Title order={3} style={{ fontSize: '60px', fontWeight: 500, lineHeight: 1.1, marginBottom: '20px', textAlign: 'center' }}>
                        Flipr Careers
                    </Title>
                     
                        <Container className={classes.buttoncontainer}>
                <Button className={classes.button}>Button 1</Button>
                <Button className={classes.button}>Button 1</Button>
                <Button className={classes.button}>Button 1</Button>
                <Button className={classes.button}>Button 1</Button>
            </Container>
 
                    <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl">
                        <Image src={`https://dummyimage.com/100`} radius={10} />
                        <Grid gutter="sm">
                            <Grid.Col>
                                <Skeleton height={`calc(${rem(300)} / 2 - var(--mantine-spacing-md) / 2)`} radius="md" animate={false} />
                            </Grid.Col>
                            <Grid.Col span={6}>
                                <Image src={`https://dummyimage.com/100`} radius={10} />

                            </Grid.Col>
                            <Grid.Col span={6}>
                                <Skeleton height={`calc(${rem(300)} / 2 - var(--mantine-spacing-md) / 2)`} radius="md" animate={false} />
                            </Grid.Col>
                        </Grid>
                    </SimpleGrid>
                </Container>
            </Box>

        </>


    );
}

export default Slider;
