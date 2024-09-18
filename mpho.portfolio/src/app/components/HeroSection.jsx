import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Head>
        <title>Mpho Portfolio</title>
        <meta name="description" content="Mpho Tsatsi's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Background Image */}
      <div className="absolute inset-0 z-0 w-900px">
        <Image
          src="/images/bg.jpg"
          layout="fill"
          objectFit="cover"
          alt="Background"
          className="opacity-70 "
        />
      </div>

      {/* Content */}
      <main className="relative z-10 text-center">
        <h1 className="text-5xl font-bold text-black">Mpho Tsatsi</h1>
      </main>
    </div>
  );
};

export default HeroSection;
