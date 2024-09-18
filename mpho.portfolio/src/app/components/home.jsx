import Head from 'next/head';
import Image from 'next/image';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center relative">
      <Head>
        <title>Mpho portfolio</title>
        <meta name="mpho potfolio" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="images/bg.jpg"
          layout="fill"
          objectFit="cover"
          alt="Background"
          className="opacity-70"
        />
      </div>

      {/* Content */}
      <main className="relative z-10 text-center">
        <h1 className="text-5xl font-bold text-black">mpho tsatsi</h1>
      </main>
    </div>
  );
};

export default Home;
