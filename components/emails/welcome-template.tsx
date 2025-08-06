import { Link, Tailwind } from "@react-email/components";
// import Image from 'next/image';

export default function WelcomeTemplate({ name }: { name: string }) {
  return (
    <Tailwind
      config={{
        theme: {
          extend: {
            colors: {
              brand: "#6A3D9B",
            },
          },
        },
      }}
    >
      <div className="max-w-xl text-gray-900">
        {/* Consider including a short, dynamic GIF or video snippet previewing the course UI or a "countdown" timer animation here */}
        {/* <Img
          src="/course-preview.gif"
          alt="RAG Course Preview"
          className="mb-6 rounded-md shadow-md"
          width={400}
          height={225}
        /> */}

        <p className="mb-4 text-lg font-semibold">Hey {name},</p>

        <p className="mb-6 text-brand font-bold text-xl">
          You’re officially in the Crash Course{" "}
          <span className="uppercase">Beta</span> — exclusive access starts now!
        </p>

        <p className="mb-6">
          This is your front-row seat to every milestone, update, and early
          lesson — before anyone else gets in.
        </p>

        <p className="mb-6">
          Don’t miss out on the chance to build your{" "}
          <span className="font-semibold">RAG chatbot skills</span> alongside
          me, the course is rolling out fast, and spots are limited.
        </p>

        <p className="mb-6">
          While you wait, jumpstart your learning with this{" "}
          <span className="font-semibold">free</span> Tailwind CSS crash course
          I handpicked just for you:
        </p>

        <Link
          href="https://youtube.com/playlist?list=PLp073J8GLC8YMV_aw4GOrxXCkIi5W9kRL&si=GARVP8Yk2yPRun1A"
          className="inline-block bg-brand text-white px-5 py-3 rounded-md font-semibold transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          Watch now
        </Link>

        <p className="mt-8">
          Can’t wait to see you inside, <br />
          Jonatan
        </p>
      </div>
    </Tailwind>
  );
}
