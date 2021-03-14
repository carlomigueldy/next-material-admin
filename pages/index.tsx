import {
  Button,
  Container,
  createStyles,
  Drawer,
  makeStyles,
  Theme,
} from "@material-ui/core";
import Head from "next/head";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    drawer: {
      flexShrink: 0,
    },
    main: {
      flexGrow: 1,
    },
  })
);

export default function Home() {
  const classes = useStyles();

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>

      <div className={classes.root}>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          anchor="left"
          open={true}
        >
          <Container>
            <Button variant="outlined" color="primary">
              <span style={{ fontSize: 24 }}>Awesome Button</span>
            </Button>
          </Container>
        </Drawer>

        <main className={classes.main}>
          <Button variant="outlined" color="primary">
            <span style={{ fontSize: 24 }}>Awesome Button</span>
          </Button>
        </main>
      </div>
    </>
  );
}
