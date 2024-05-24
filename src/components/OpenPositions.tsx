import { Container, Text, Title, Card, Group, Image, Space, Badge, Box, Grid, SimpleGrid, Skeleton, rem, Flex, Button, List } from '@mantine/core';
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
const Openposs = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const changeSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <> <Box style={{ position: 'relative', paddingTop: '32px', backgroundColor: '#F0F4F8', overflow: 'hidden' }}>
      <Container className={classes.margin} style={{ pos: 'relative', zIndex: 10, marginTop: '32px' }}>
        <Title order={3} className={classes.spangradient} style={{ fontSize: '108px', fontWeight: 500, lineHeight: 1.1, marginBottom: '40px', textAlign: 'center' }}>
          Flipr Careers
        </Title>
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl">
          <Container style={{ zIndex: 10, marginTop: '32px' }}>
            <Text className={classes.fontfamily} size="sm" color="indigo" fw={700} tt="uppercase" mb={6}>
              Join with us
            </Text>

            <Title className={classes.fontfamily} order={4} style={{ fontSize: '38px', fontWeight: 600, lineHeight: 1.1, marginBottom: '20px' }}>
              Join Our Innovative Team
            </Title>
            <Text className={classes.fontfamily} color="gray" style={{ fontSize: '16px', fontWeight: 500, marginBottom: '20px', maxWidth: '400px' }}>
              Welcome to the Flipr careers page! We're excited to find talented individuals passionate about technology and eager to grow their careers. Whether you're a student looking for an internship or a recent graduate seeking a full-time position, we have opportunities that will challenge and inspire you.
            </Text>
          </Container>
          <Grid gutter="sm" className={classes.margin}>
            <Grid.Col>
              <Image src={`https://res.cloudinary.com/dasdutgf6/image/upload/v1716550403/rittokceawwwszu5p6t2.png`} alt='image-1' height={`300`} radius={`xl`} />
            </Grid.Col>
          </Grid>
        </SimpleGrid>
      </Container>
      <Container className={classes.third}>
        <Container size="xl" mx="auto" ta="center" mb={32}>
          <Title  order={1} className={classes.spangradient} size="xl" mt={24} mb={12} style={{ fontSize: '40px', fontWeight: 500, lineHeight: 1.1, marginBottom: '20px', textAlign: 'center' }}>
            Why Join <span style={{ fontStyle: 'italic' }}>Flipr.ai</span>
          </Title>
        </Container>
        <Grid
          gutter="lg"
          style={{ marginTop: '60px', justifyContent: 'auto' }}
        >
          <div style={{ paddingLeft: '1rem', paddingRight: '1rem', marginRight: '50px' }}>
            <div style={{ maxWidth: '23rem', margin: '0 auto' }}>
              <div style={{ paddingBottom: '1.5rem', marginBottom: '1.5rem', borderBottom: '1px solid #E4E7EB' }}>
                <div>
                  <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#9CA3AF' }}>Cutting-Edge Projects: Work on innovative projects that make a difference.
                  </span>
                </div>
              </div>
              <div style={{ paddingBottom: '1.5rem', marginBottom: '1.5rem', borderBottom: '1px solid #E4E7EB' }}>
                <div>
                  <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#9CA3AF' }}>Cutting-Edge Projects: Work on innovative projects that make a difference.
                  </span>
                </div>
              </div>
              <div style={{ paddingBottom: '1.5rem', marginBottom: '1.5rem', borderBottom: '1px solid #E4E7EB' }}>
                <div>
                  <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#9CA3AF' }}>Cutting-Edge Projects: Work on innovative projects that make a difference.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div style={{ paddingLeft: '1rem', paddingRight: '1rem' }}>
            <div style={{ maxWidth: '23rem', margin: '0 auto' }}>
              <div style={{ paddingBottom: '1.5rem', marginBottom: '1.5rem', borderBottom: '1px solid #E4E7EB' }}>
                <div>
                  <span style={{ fontSize: '0.875rem', color: '#9CA3AF' }}>Cutting-Edge Projects: Work on innovative projects that make a difference.</span>
                </div>
              </div>
              <div style={{ paddingBottom: '1.5rem', marginBottom: '1.5rem', borderBottom: '1px solid #E4E7EB' }}>
                <div>
                  <span style={{ fontSize: '0.875rem', color: '#9CA3AF' }}>Cutting-Edge Projects: Work on innovative projects that make a difference.</span>
                </div>
              </div>
              <div style={{ paddingBottom: '1.5rem', marginBottom: '1.5rem', borderBottom: '1px solid #E4E7EB' }}>
                <div>
                  <span style={{ fontSize: '0.875rem', color: '#9CA3AF' }}>Cutting-Edge Projects: Work on innovative projects that make a difference.</span>
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </Container>
      <Container className={classes.third}>
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl">
          <Grid gutter="md">
            <Grid.Col>
              <Title order={3} className={classes.spangradient} style={{ fontSize: '60px', fontWeight: 500, lineHeight: 1.1, marginBottom: '20px' }}>
                Why Flipr.ai
              </Title>

            </Grid.Col>
            <Grid.Col>
              <Grid.Col span={12} px={8} py={8}>
                <Grid gutter="md" align="center">
                  <Grid.Col span={11}>
                    <Text className={classes.fontfamily} size="xl" fw={700} mb={2}>
                      {slides[currentSlide].header}
                    </Text>
                    <Text className={classes.fontfamily} color="gray" fw={500} lh="relaxed">
                      {slides[currentSlide].content}
                    </Text>
                  </Grid.Col>
                </Grid>
              </Grid.Col>
            </Grid.Col>
          </Grid>
          <Image src={`${slides[currentSlide].imgurl}`} alt='image-tag' />
        </SimpleGrid>
        <Group className={classes.centerbuttons}>
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
        </Group>
      </Container>

      {/* fourth */}
      <Container className={classes.fourth} style={{ pos: 'relative', zIndex: 10, }}>
        <Title order={3} className={classes.spangradient} style={{ fontSize: '70px', fontWeight: 500, lineHeight: 1.1, marginBottom: '20px', textAlign: 'center' }}>
          Internships and Placements
        </Title>
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl">
          <Container style={{ zIndex: 10, marginTop: '32px' }}>
            <Title className={classes.fontfamily} order={4} style={{ fontSize: '38px', fontWeight: 600, lineHeight: 1.1, marginBottom: '20px' }}>
              Our Commitment
            </Title>
            <Text className={classes.fontfamily} color="gray" style={{ fontSize: '16px', fontWeight: 500, marginBottom: '20px', maxWidth: '400px' }}>
              At Flipr, we are committed to nurturing the next generation of tech talent. Our Internship & Placement Program is designed to provide hands-on experience and career advancement opportunities for students and recent graduates.
            </Text>
          </Container>
          <Container style={{ zIndex: 10, marginTop: '32px' }}>
            <Title className={classes.fontfamily} order={4} style={{ fontSize: '38px', fontWeight: 600, lineHeight: 1.1, marginBottom: '20px' }}>
              Monthly Internship & Placement Drives
            </Title>
            <Text className={classes.fontfamily} color="gray" style={{ fontSize: '16px', fontWeight: 500, marginBottom: '20px', maxWidth: '400px' }}>
              We conduct monthly drives to identify and recruit the best talent from colleges. These drives include assessments, interviews, and selection processes to match candidates with the right opportunities within our company.
              Next Drive Date: [Date]
              Application Deadline: [Date]

            </Text>
          </Container>
        </SimpleGrid>
      </Container>


         <img
          style={{ position: 'absolute', left: '50%', bottom: '0', transform: 'translateX(-50%)' }}
          src="https://shuffle.dev/flaro-assets/images/career/gradient2.svg"
          alt=""
        />
        <Container className={classes.third} size="lg" style={{ position: 'relative', zIndex: 10 }}>
          <Text className={classes.fontfamily} size="sm" color="indigo" w={700} style={{ textTransform: 'uppercase', marginBottom: '6px' }}>
            Join with us
          </Text>
          <Title order={2} style={{ marginBottom: '5px', fontSize: '48px', fontWeight: 900, letterSpacing: '-1px', lineHeight: 1.1 }}>
            <span className={classes.spangradient}>Open Positions</span>
          </Title>
          <Text className={classes.fontfamily} size="md" color="gray" w={500} style={{ marginBottom: '20px', maxWidth: '400px' }}>
            We have great open positions for every programming enthusiasts.
          </Text>
          <Group className={classes.cardstyles} style={{ marginBottom: '1.5rem' }}>
            <Card shadow="sm" padding="lg" style={{ maxWidth: '320px', flexShrink: 0 }}>
              <Card.Section>
                <Box p="8px">
                  <Title className={classes.fontfamily} order={3} style={{ marginBottom: '16px', fontSize: '24px', fontWeight: 700 }}>
                    Software Engineering Intern
                  </Title>
                  <Text size="sm" color="gray">
                    <List className={classes.listtext}>
                      <List.Item className={classes.fontfamily} >Duration: 6 months</List.Item>
                      <List.Item className={classes.fontfamily} >Location: Indore</List.Item>
                      <List.Item className={classes.fontfamily}>Requirements: Enrolled in a Computer Science or related degree program, knowledge of programming languages like Java, Python, or C++.</List.Item>
                    </List>
                  </Text>
                </Box>
              </Card.Section>
              <Group style={{ marginTop: '16px' }}>
                <Group >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.2426 12.4926C12.6185 13.1168 11.3891 14.3462 10.4137 15.3216C9.63264 16.1026 8.36745 16.1027 7.5864 15.3217C6.62886 14.3641 5.42126 13.1565 4.75736 12.4926C2.41421 10.1495 2.41421 6.35051 4.75736 4.00736C7.10051 1.66421 10.8995 1.66421 13.2426 4.00736C15.5858 6.35051 15.5858 10.1495 13.2426 12.4926Z" stroke="#A1A1AA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M11.25 8.25C11.25 9.49264 10.2426 10.5 9 10.5C7.75736 10.5 6.75 9.49264 6.75 8.25C6.75 7.00736 7.75736 6 9 6C10.2426 6 11.25 7.00736 11.25 8.25Z" stroke="#A1A1AA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <Text size="sm" className={classes.fontfamily}>Indore, India</Text>
                </Group>
                <Group>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.2426 12.4926C12.6185 13.1168 11.3891 14.3462 10.4137 15.3216C9.63264 16.1026 8.36745 16.1027 7.5864 15.3217C6.62886 14.3641 5.42126 13.1565 4.75736 12.4926C2.41421 10.1495 2.41421 6.35051 4.75736 4.00736C7.10051 1.66421 10.8995 1.66421 13.2426 4.00736C15.5858 6.35051 15.5858 10.1495 13.2426 12.4926Z" stroke="#A1A1AA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M11.25 8.25C11.25 9.49264 10.2426 10.5 9 10.5C7.75736 10.5 6.75 9.49264 6.75 8.25C6.75 7.00736 7.75736 6 9 6C10.2426 6 11.25 7.00736 11.25 8.25Z" stroke="#A1A1AA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <Text size="sm">Full-time</Text>
                </Group>
                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.83333 3.33337L14.5 8.00004M14.5 8.00004L9.83333 12.6667M14.5 8.00004L2.5 8.00004" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Group>
            </Card>
            <Card shadow="sm" padding="lg" style={{ maxWidth: '320px', flexShrink: 0 }}>
              <Card.Section>
                <Box p="8px">
                  <Title className={classes.fontfamily} order={3} style={{ marginBottom: '16px', fontSize: '24px', fontWeight: 700 }}>
                    Software Engineering Intern
                  </Title>
                  <Text size="sm" color="gray">
                    <List className={classes.listtext}>
                      <List.Item className={classes.fontfamily} >Duration: 6 months</List.Item>
                      <List.Item className={classes.fontfamily}>Location: Indore</List.Item>
                      <List.Item className={classes.fontfamily}>Requirements: Enrolled in a Computer Science or related degree program, knowledge of programming languages like Java, Python, or C++.</List.Item>
                    </List>
                  </Text>
                </Box>
              </Card.Section>
              <Group style={{ marginTop: '16px' }}>
                <Group >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.2426 12.4926C12.6185 13.1168 11.3891 14.3462 10.4137 15.3216C9.63264 16.1026 8.36745 16.1027 7.5864 15.3217C6.62886 14.3641 5.42126 13.1565 4.75736 12.4926C2.41421 10.1495 2.41421 6.35051 4.75736 4.00736C7.10051 1.66421 10.8995 1.66421 13.2426 4.00736C15.5858 6.35051 15.5858 10.1495 13.2426 12.4926Z" stroke="#A1A1AA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M11.25 8.25C11.25 9.49264 10.2426 10.5 9 10.5C7.75736 10.5 6.75 9.49264 6.75 8.25C6.75 7.00736 7.75736 6 9 6C10.2426 6 11.25 7.00736 11.25 8.25Z" stroke="#A1A1AA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <Text size="sm" className={classes.fontfamily}>Indore, India</Text>
                </Group>
                <Group>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.2426 12.4926C12.6185 13.1168 11.3891 14.3462 10.4137 15.3216C9.63264 16.1026 8.36745 16.1027 7.5864 15.3217C6.62886 14.3641 5.42126 13.1565 4.75736 12.4926C2.41421 10.1495 2.41421 6.35051 4.75736 4.00736C7.10051 1.66421 10.8995 1.66421 13.2426 4.00736C15.5858 6.35051 15.5858 10.1495 13.2426 12.4926Z" stroke="#A1A1AA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M11.25 8.25C11.25 9.49264 10.2426 10.5 9 10.5C7.75736 10.5 6.75 9.49264 6.75 8.25C6.75 7.00736 7.75736 6 9 6C10.2426 6 11.25 7.00736 11.25 8.25Z" stroke="#A1A1AA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <Text size="sm" className={classes.fontfamily}>Full-time</Text>
                </Group>
                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.83333 3.33337L14.5 8.00004M14.5 8.00004L9.83333 12.6667M14.5 8.00004L2.5 8.00004" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Group>
            </Card>
            <Card shadow="sm" padding="lg" style={{ maxWidth: '320px', flexShrink: 0 }}>
              <Card.Section>
                <Box p="8px">
                  <Title order={3} className={classes.listtext} style={{ marginBottom: '16px', fontSize: '24px', fontWeight: 700 }}>
                    Software Engineering Intern
                  </Title>
                  <Text size="sm" color="gray">
                    <List className={classes.listtext}>
                      <List.Item className={classes.fontfamily}>Duration: 6 months</List.Item>
                      <List.Item className={classes.fontfamily}>Location: Indore</List.Item>
                      <List.Item className={classes.fontfamily}>Requirements: Enrolled in a Computer Science or related degree program, knowledge of programming languages like Java, Python, or C++.</List.Item>
                    </List>
                  </Text>
                </Box>
              </Card.Section>
              <Group style={{ marginTop: '16px' }}>
                <Group >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.2426 12.4926C12.6185 13.1168 11.3891 14.3462 10.4137 15.3216C9.63264 16.1026 8.36745 16.1027 7.5864 15.3217C6.62886 14.3641 5.42126 13.1565 4.75736 12.4926C2.41421 10.1495 2.41421 6.35051 4.75736 4.00736C7.10051 1.66421 10.8995 1.66421 13.2426 4.00736C15.5858 6.35051 15.5858 10.1495 13.2426 12.4926Z" stroke="#A1A1AA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M11.25 8.25C11.25 9.49264 10.2426 10.5 9 10.5C7.75736 10.5 6.75 9.49264 6.75 8.25C6.75 7.00736 7.75736 6 9 6C10.2426 6 11.25 7.00736 11.25 8.25Z" stroke="#A1A1AA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <Text size="sm">Indore, India</Text>
                </Group>
                <Group>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.2426 12.4926C12.6185 13.1168 11.3891 14.3462 10.4137 15.3216C9.63264 16.1026 8.36745 16.1027 7.5864 15.3217C6.62886 14.3641 5.42126 13.1565 4.75736 12.4926C2.41421 10.1495 2.41421 6.35051 4.75736 4.00736C7.10051 1.66421 10.8995 1.66421 13.2426 4.00736C15.5858 6.35051 15.5858 10.1495 13.2426 12.4926Z" stroke="#A1A1AA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M11.25 8.25C11.25 9.49264 10.2426 10.5 9 10.5C7.75736 10.5 6.75 9.49264 6.75 8.25C6.75 7.00736 7.75736 6 9 6C10.2426 6 11.25 7.00736 11.25 8.25Z" stroke="#A1A1AA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <Text size="sm">Full-time</Text>
                </Group>
                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.83333 3.33337L14.5 8.00004M14.5 8.00004L9.83333 12.6667M14.5 8.00004L2.5 8.00004" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Group>
            </Card>
            
      <Container className={classes.third} size="lg" style={{ position: 'relative', zIndex: 10 }}>
        <Box style={{ textAlign: 'center', marginBottom: '96px' }}>
          <Title order={1} style={{ fontSize: '3rem', fontWeight: 900, marginTop: '16px', marginBottom: '24px' }}>
            <span className={classes.spangradient}>Life at Flipr</span>
          </Title>
        </Box>
        <Group className={classes.cardstyles2} style={{ flexWrap: 'wrap', marginBottom: '-32px' }}>
          {[...Array(4)].map((_, index) => (
            <Box key={index} style={{ width: '100%', maxWidth: '400px', padding: '16px', boxSizing: 'border-box' }}>
              <Card shadow="sm" padding="lg" radius="xl" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Title order={4} style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '16px' }}>
                  {/* You can change the titles and contents as needed */}
                  {index === 0 && 'Team Culture:'}
                  {index === 1 && 'Learning & Development:'}
                  {index === 2 && 'Fun & Engagement:'}
                  {index === 3 && 'Innovative Work Environment:'}
                </Title>
                <Text className={classes.fontfamily} style={{ color: '#6B7280', marginBottom: '16px' }}>
                  Pretium ac auctor quis urna orci feugiat. Vulputate tellus velit tellus orci auctor vel nulla facilisi ut.
                </Text>
                <Text className={classes.fontfamily} component="a" href="#" style={{ marginTop: 'auto', color: '#19dc49', fontWeight: 600 }}>
                  Read More
                </Text>
              </Card>
            </Box>
          ))}
        </Group>
      </Container>
          </Group>
        </Container>
     </Box>


    </>



  );
};

const poss = [
  {
    title: 'Front-end Developer',
    description: 'Lorem ipsum dolor sit amet, consectrtur adipiscing elit. Volutpat tempor vitae.',
    location: 'New York, USA',
    type: 'Full-time'
  },
  {
    title: 'Senior Digital Marketer',
    description: 'Lorem ipsum dolor sit amet, consectrtur adipiscing elit. Volutpat tempor vitae.',
    location: 'New York, USA',
    type: 'Full-time'
  },
  {
    title: 'Product Designer',
    description: 'Lorem ipsum dolor sit amet, consectrtur adipiscing elit. Volutpat tempor vitae.',
    location: 'New York, USA',
    type: 'Full-time'
  },
  {
    title: 'JS Developer',
    description: 'Lorem ipsum dolor sit amet, consectrtur adipiscing elit. Volutpat tempor vitae.',
    location: 'New York, USA',
    type: 'Full-time'
  }
];

export default Openposs;
