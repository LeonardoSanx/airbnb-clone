import Head from "next/head";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";

export default function Home({ exploreData, cardsData }) {
  return (
    <div className="">
      <Head>
        <title>Leo Airbnb</title>
        <link rel="icon" href="/favicon.icon" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1 viewport-fit=cover"
        />
      </Head>
      <Header />
      <Banner />
      <main className="w-full md:max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold sm:pb-2 md:pb-5">
            Explore as proximidades
          </h2>

          {/* data from server */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(({ img, distance, location }) => (
              <SmallCard
                key={img}
                img={img}
                distance={distance}
                location={location}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold pt-10 sm:pb-4 md:pb-6">
            Viva em qualquer lugar
          </h2>
          <div className="flex space-x-3 overflow-x-scroll scrollbar-hide p-3 -ml-3">
            {cardsData?.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>

        <LargeCard
          img="https://links.papareact.com/4cj"
          title="Dúvidas sobre como hospedar?"
          buttonText="Pergunte a um Superhost"
        />
      </main>

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  );

  const cardsData = await fetch("https://links.papareact.com/zp1").then((res) =>
    res.json()
  );

  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
