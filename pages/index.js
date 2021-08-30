import Head from "next/head";
import { MainContent } from "../components/main.component";
import { Sidebar } from "../components/sidebar.component";

export default function Home() {
  return (
    <div className=" bg-gray-200">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="grid grid-cols-12 gap-2 min-h-screen">
        <div className="col-span-3">
          <Sidebar />
        </div>
        <div className="col-span-9 border-2 border-black">
          <MainContent />
        </div>
      </main>
    </div>
  );
}
