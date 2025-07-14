import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="self-center place-self-center rounded-full"
          src="/info/FlashCashIntroPic.jpg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <h1 className="self-center text-4xl font-[family-name:var(--font-geist-mono)]">
          Mark Manley
        </h1>
        <h2 className="self-center text-2xl">Fullstack/Frontend WebApps</h2>
        <ul className="list-inside list-item text-sm/6 text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            13 years of experience in JavaScript.
            {/* Get started by editing{" "} */}
            {/* <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              src/app/page.tsx
            </code> */}
            {/* . */}
          </li>
          <li className="mb-2 tracking-[-.01em]">
            9 years of experience in TypeScript.
          </li>
          <li className="mb-2 tracking-[-.01em]">
            8 years of experience in React.
          </li>
          <li className="mb-2 tracking-[-.01em]">
            2 years of experience in Next.js.
          </li>
          <li className="tracking-[-.01em]">Have worked on the Backend in:</li>
          <li className="mb-2 tracking-[-.01em]">
            <ul className="list-outside">
              <li>&gt; JavaScript</li>
              <li>&gt; Java</li>
              <li>&gt; Elixir</li>
              <li>&gt; Go</li>
              <li>&gt; Ruby</li>
              <li>&gt; Python</li>
            </ul>
          </li>
          <li className="mb-2 tracking-[-.01em]">
            Taking advantage of AI to 10x my work!
          </li>
        </ul>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="mailto:d.alan.manley@gmail.com"
          >
            <Image
              className="dark"
              src="/info/globe.svg"
              alt="Globe icon"
              width={20}
              height={20}
            />
            Email me
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://mark-manley.tiiny.site"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="mr-2.5"
              src="/info/file.svg"
              alt="File icon"
              width={20}
              height={20}
            />
            Resume
          </a>
        </div>
        <ul className="list-inside list-item text-sm/6 text-left font-[family-name:var(--font-geist-mono)]">
          <li className="my-2 tracking-[-.01em]">Let&apos;s connect.</li>
          <li className="tracking-[-.01em]">
            ...especially if you&apos;re using one of:
            <ul>
              <li>&gt; React | Next.js</li>
              <li>&gt; Datastar</li>
              <li>&gt; Elixir</li>
              <li>&gt; Gleam</li>
              <li>&gt; Go</li>
              <li>
                &gt; Clojure (<i>or other lisp</i>)
              </li>
              <li>&gt; Zig</li>
            </ul>
          </li>
        </ul>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/Xs-and-10s"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/info/github.svg"
            alt="GitHub icon"
            width={16}
            height={16}
            className="dark:invert"
          />
          GitHub
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/alan-manley-549b1415/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/info/linkedin.svg"
            alt="LinkedIn icon"
            width={16}
            height={16}
            className="dark:invert"
          />
          LinkedIn
        </a>
      </footer>
    </div>
  );
}
