import { FC } from "react";
import Link from "next/link";
import { Header, Container, createStyles } from "@mantine/core";
import { ColorSchemaToggle } from "src/component/Button";
import { IconBrandReact } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
  },
}));

/** @package */
export const HeaderMenu: FC = () => {
  const { classes } = useStyles();
  return (
    <Header height={60} className="sticky top-0 z-50 w-full px-0">
      <Container size="2xl" px={20} className={classes.header}>
        <Link href="/" passHref>
          <div className="flex cursor-pointer items-center gap-2">
            <IconBrandReact color="cyan" />
            <span className="block text-xl font-semibold">
              おたきのITブログ
            </span>
          </div>
        </Link>
        <ColorSchemaToggle />
      </Container>
    </Header>
  );
};
