import { Container, Grid, SimpleGrid, Skeleton, rem, Text, Title, Space, Image, Box } from '@mantine/core';
const PRIMARY_COL_HEIGHT = rem(300);


const Herosection = () => {
    const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;

    return (
        <div>
            <Box style={{ position: 'relative', paddingTop: '32px', paddingBottom: '36px', backgroundColor: '#F0F4F8', overflow: 'hidden' }}>
        <Image
          src="flaro-assets/images/career/gradient2.svg"
          alt=""
          style={{
            pos: 'absolute',
            left: '50%',
            bottom: 0,
            transform: 'translateX(-50%)'
          }}
        />
        <Container style={{ pos: 'relative', zIndex: 10, marginTop:'32px' }}>
        <Title order={3} style={{ fontSize: '108px', fontWeight: 500, lineHeight: 1.1, marginBottom: '20px', textAlign:'center'}}>
                  Flipr Careers
              </Title>
              <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl">
                  <Container style={{ zIndex: 10, marginTop: '32px' }}>
                      <Text size="sm" color="indigo" fw={700} tt="uppercase" mb={6}>
                          Join with us
                      </Text>
  
                      <Title order={4} style={{ fontSize: '38px', fontWeight: 600, lineHeight: 1.1, marginBottom: '20px' }}>
                          Join Our Innovative Team
                      </Title>
                      <Text color="gray" style={{ fontSize: '16px', fontWeight: 500, marginBottom: '20px', maxWidth: '400px' }}>
                          Welcome to the Flipr careers page! We're excited to find talented individuals passionate about technology and eager to grow their careers. Whether you're a student looking for an internship or a recent graduate seeking a full-time position, we have opportunities that will challenge and inspire you.
                      </Text>
                  </Container>
                  <Grid gutter="sm">
                      <Grid.Col>
                          <Skeleton height={`calc(${300} / 2 - var(--mantine-spacing-md) / 2)`} radius="md" animate={false} />
                      </Grid.Col>
                      <Grid.Col span={6}>
                          <Skeleton height={`calc(${300} / 2 - var(--mantine-spacing-md) / 2)`} radius="md" animate={false} />
                      </Grid.Col>
                      <Grid.Col span={6}>
                          <Skeleton height={`calc(${300} / 2 - var(--mantine-spacing-md) / 2)`} radius="md" animate={false} />
                      </Grid.Col>
                  </Grid>
              </SimpleGrid>
          </Container>
          </Box></div>
    )
}

export default Herosection