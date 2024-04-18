import { Box, Heading, Text, List, ListItem, ListIcon, Container, Image } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.md" py={10}>
      <Heading as="h1" mb={4} textAlign="center">
        דרכים להרוויח כסף מהאינטרנט באמצעות הטלפון
      </Heading>
      <Image src="https://images.unsplash.com/photo-1612197527762-8cfb55b618d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwbW9uZXklMjBtYWtpbmd8ZW58MHx8fHwxNzEzNDU0MTI1fDA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" mb={6} />
      <Text fontSize="lg" mb={4}>
        בעידן הדיגיטלי, ישנן מגוון דרכים להרוויח כסף באינטרנט דרך הטלפון שלך. כאן תמצא מספר אפשרויות שיכולות לעזור לך להתחיל:
      </Text>
      <List spacing={3}>
        <ListItem>
          <ListIcon as={FaCheckCircle} color="green.500" />
          משחקים ואפליקציות שמשלמות - התקן אפליקציות שמציעות תשלום עבור משימות פשוטות או שחק במשחקים שמציעים פרסים.
        </ListItem>
        <ListItem>
          <ListIcon as={FaCheckCircle} color="green.500" />
          סקרים מקוונים - השתתף בסקרים מקוונים וקבל תשלום עבור זמנך.
        </ListItem>
        <ListItem>
          <ListIcon as={FaCheckCircle} color="green.500" />
          שיווק בשותפות - הצטרף לתוכניות שיווק בשותפות והרוויח עמלות על מכירות שנעשו דרך הקישורים שלך.
        </ListItem>
        <ListItem>
          <ListIcon as={FaCheckCircle} color="green.500" />
          מכירת תמונות - אם אתה צלם חובב, מכור את תמונותיך באתרים כמו Shutterstock או Getty Images.
        </ListItem>
        <ListItem>
          <ListIcon as={FaCheckCircle} color="green.500" />
          ייעוץ והדרכה - הצע שירותי ייעוץ או הדרכה בתחום שלך דרך פלטפורמות כמו Zoom או Skype.
        </ListItem>
      </List>
    </Container>
  );
};

export default Index;
