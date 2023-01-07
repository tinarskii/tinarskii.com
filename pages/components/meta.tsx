import Head from "next/head";

const Meta = ({ title, description, image }: any) => {
  return (
    <Head>
      <title>Website of Tinarskii</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.webp" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:site" content="@tinarskii" />
      <meta name="twitter:image" content={image} />
      <meta property="og:title" content={title} name="title" />
      <meta
        property="og:description"
        content={description}
        name="description"
      />
      <meta property="og:image" content={image} name="image" />
      <meta property="og:site_name" content="Website of Tinarskii" />
      <meta property="og:url" content="https://www.tinarskii.com" />
      <meta property="og:type" content="website" />
      <meta
        name="keywords"
        content="nuxtjs,nuxt,vue,tinarskii,tinnaphat,ติณณภัทร์,ทินนาร์สกี้"
      />
    </Head>
  );
};

export default Meta;

Meta.defaultProps = {
  title: "Website of Tinarskii",
  description:
    "I'm a student at Assumption Samutprakarn School. I love learning and teaching others. I enjoy math and science, but also love to code. I've been programming since I was 12 years old, and have been developing websites since then. I started contributing to open-source communities and have made some of the most popular sites on the web such as Wrong-Lang. My goal is to make programming accessible to everyone — not just those who are already good at it!",
  image: "https://www.tinarskii.com/banner.jpg",
};
