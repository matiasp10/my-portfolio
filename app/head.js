export default function Head() {
  return (
    <>
      <title>Matias Petenatti Portfolio</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta
        name="description"
        content="Matias Petenatti website. I’m Matias Petenatti. Software developer."
      />
      <meta name="author" content="Matias Petenatti" />
      {/* TODO: cambiar el OG y el favicon*/}
      <meta
        property="og:image"
        content="https://fabioalcocer.vercel.app/api/og"
      />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
