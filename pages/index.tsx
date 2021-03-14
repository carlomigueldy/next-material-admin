import { Button } from "@material-ui/core";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>

      <main>Hello World</main>

      <Button variant="outlined" color="primary">
        <span style={{fontSize: 24}}>Awesome Button</span>
      </Button>
    </>
  );
}
