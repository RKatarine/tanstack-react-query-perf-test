import Head from "next/head";
import {NextPageContext} from "next";
import {ProjectList} from "@/src/entities/project/ProjectList";
import commonGetServerSideProps from "@/src/app/pages-lib/commonGetServerSideProps";
import {getInfiniteProjectsOptions} from "@/src/entities/project/hooks/getInfinityProjectsQueryOptions";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${styles.page}`}
      >
        <main className={styles.main}>
          <ProjectList/>
        </main>
      </div>
    </>
  );
}

export const getServerSideProps = async (ctx: NextPageContext) => commonGetServerSideProps(
    ctx,
    async (ctx: NextPageContext, reactQueryServerService) => {
      // const {cursor} = ctx.query;

      await reactQueryServerService.prefetchInfiniteQuery(getInfiniteProjectsOptions());

      return {props: {}};
    }
)