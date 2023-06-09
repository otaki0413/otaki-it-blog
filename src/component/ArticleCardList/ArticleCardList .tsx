import { FC } from "react";
import Link from "next/link";
import {
  createStyles,
  SimpleGrid,
  Card,
  Image,
  Text,
  Container,
  AspectRatio,
  Badge,
} from "@mantine/core";
import dayjs from "dayjs";
import { Blog } from "src/pages-component/index/page";

const useStyles = createStyles((theme) => ({
  card: {
    transition: "transform 150ms ease, box-shadow 150ms ease",

    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: theme.shadows.md,
    },
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],

    border: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    cursor: "pointer",
  },
}));

type Props = {
  articles: Blog[];
};

/** @package */
export const ArticleCardList: FC<Props> = (props) => {
  const { classes } = useStyles();

  const cards = props.articles.map((article) => (
    <Link key={article.title} href={`/blog/${article.id}`} passHref>
      <Card p="lg" radius="md" className={classes.card} miw={280}>
        <AspectRatio ratio={1920 / 1080}>
          <Image src={article.image.url} alt="article_image" />
        </AspectRatio>
        <Text color="dimmed" size="xs" weight={700} mt="md">
          {dayjs(article.publishedAt).format("YYYY年MM月DD日")}
        </Text>
        <Badge color="cyan" variant="dot">
          {article.category.name}
        </Badge>
        <Text className="font-bold" mt={5}>
          {article.title}
        </Text>
      </Card>
    </Link>
  ));

  return (
    <Container py="xl" className="w-full">
      <SimpleGrid
        cols={3}
        spacing="lg"
        breakpoints={[
          { maxWidth: "xs", cols: 1 },
          { maxWidth: "sm", cols: 2 },
        ]}
      >
        {cards}
      </SimpleGrid>
    </Container>
  );
};
