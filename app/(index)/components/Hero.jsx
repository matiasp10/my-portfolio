import Image from 'next/image';
import myLogo from '../assets/makanaqui.png';
import Email from '../icons/Email';
import Github from '../icons/Github';
import LinkedIn from '../icons/LinkedIn';
import Twitter from '../icons/Twitter';
function Hero() {
  return (
    <div className="max-w-4x1 md:px-8 lg:px-14">
      <div className="flex flex-col gap-4 md:gap-6">
        <div className="relative flex h-20 w-20 flex-none cursor-pointer items-center justify-center rounded-full border border-zinc-700/10 bg-indigo-400/20 shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border-zinc-700/50 dark:bg-zinc-900/40 dark:ring-0 md:h-24 md:w-24">
          <Image
            src={myLogo}
            alt="logo"
            className="h-24 w-24 object-cover md:h-32 md:w-32"
          />
        </div>
        <h1 className="text-[32px] font-bold leading-10 tracking-tighter text-black dark:text-zinc-100 md:text-5xl md:leading-[54px]">
          I’m Matias Petenatti. <br /> Frontend developer.
        </h1>
        <p className="text-base font-normal leading-7 text-black dark:text-zinc-400 md:pr-10 md:text-lg">
          I am a frontend developer with 2+ years of experience. I am passionate
          about creating engaging and user-friendly web experiences, and
          I&apos;m always looking for new challenges and opportunities to grow
          my skills. You&apos;ll find examples of some of my best work, as well
          as information about my technical skills and experience. Whether
          you&apos;re a potential employer, a client, or just someone who is
          interested in the world of frontend development, I hope that
          you&apos;ll find something here that inspires you.
        </p>
        <p className="text-base font-normal leading-7 text-black dark:text-zinc-400 md:pr-10 md:text-lg">
          As a frontend developer, I am experienced in a wide range of
          technologies and tools, including HTML, CSS, JavaScript, React and
          more. I am also committed to staying up-to-date with the latest trends
          and best practices in the industry, so that I can deliver the best
          possible results for my clients and users. Thank you for taking the
          time to explore my portfolio, and I look forward to connecting with
          you soon!
        </p>
        <div className="mt-6 flex gap-6 text-zinc-400">
          <a
            href=""
            target="_blank"
            className="group -m-1 p-1"
            rel="noreferrer"
            aria-label="Go to my Twitter account"
          >
            <Twitter />
          </a>
          <a
            href=""
            target="_blank"
            className="group -m-1 p-1"
            rel="noreferrer"
            aria-label="Go to my Twitter account"
          >
            <Github />
          </a>
          <a
            href=""
            target="_blank"
            className="group -m-1 p-1"
            rel="noreferrer"
            aria-label="Go to my Twitter account"
          >
            <Email />
          </a>
          <a
            href=""
            target="_blank"
            className="group -m-1 p-1"
            rel="noreferrer"
            aria-label="Go to my Twitter account"
          >
            <LinkedIn />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
