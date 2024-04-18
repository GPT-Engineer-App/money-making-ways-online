import { Box, Heading, Text, List, ListItem, ListIcon, Container, Image } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.md" py={10}>
      <Heading as="h1" mb={4} textAlign="center">
        Ways to Make Money Online Using Your Phone
      </Heading>
      <Image src="https://images.unsplash.com/photo-1612197527762-8cfb55b618d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwbW9uZXklMjBtYWtpbmd8ZW58MHx8fHwxNzEzNDU0MTI1fDA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" mb={6} />
      <Text fontSize="lg" mb={4}>
        In the digital age, there are various ways to make money online through your phone. Here you will find several options to get started:
      </Text>
      <List spacing={3}>
        <ListItem>
          <ListIcon as={FaCheckCircle} color="green.500" />
          Paid games and apps - Install apps that offer payment for simple tasks or play games that offer prizes.
        </ListItem>
        <ListItem>
          <ListIcon as={FaCheckCircle} color="green.500" />
          Online surveys - Participate in online surveys and get paid for your time.
        </ListItem>
        <ListItem>
          <ListIcon as={FaCheckCircle} color="green.500" />
          Affiliate marketing - Join affiliate marketing programs and earn commissions on sales made through your links.
        </ListItem>
        <ListItem>
          <ListIcon as={FaCheckCircle} color="green.500" />
          Selling photos - If you are an amateur photographer, sell your photos on sites like Shutterstock or Getty Images.
        </ListItem>
        <ListItem>
          <ListIcon as={FaCheckCircle} color="green.500" />
          Consulting and coaching - Offer consulting or coaching services in your field through platforms like Zoom or Skype.
        </ListItem>
      </List>
    </Container>
  );
};

export default Index;
