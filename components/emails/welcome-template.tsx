import { Link, Tailwind } from "@react-email/components";

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
        <p className="mb-4 text-lg font-semibold">Hey {name},</p>

        <p className="mb-4 text-brand font-bold text-xl">
          Thanks so much for signing up for the RAG crash course BETA!
        </p>

        <p className="mb-4">
          The demand for Retrieval-Augmented Generation (RAG) is exploding,
          expected to grow 30x in the next 5–10 years. Some studies even suggest
          a 60x jump.
        </p>

        <p className="mb-4">
          Any company handling lots of data, internal knowledge, or complex
          customer interactions can benefit from RAG systems, regardless of
          size. Industries like Customer Service, Education, Healthcare, E-com,
          and Financial Services are already seeing big impact.
        </p>

        <p className="mb-4">
          With RAG skills under your belt, you&apos;ll be well-positioned as
          engineering becomes increasingly tied to prompting and fine-tuning AI
          systems.
        </p>

        <p className="mb-4">
          In this crash course, I’ll first give you the mental models behind
          RAG, then walk you through building your own RAG chatbot.
        </p>

        <p className="mb-4">
          I’m <span className="font-semibold text-brand">Jonatan</span>, a UI/AI
          engineer with 10+ years of experience across startups and clients like
          Lufthansa. I love breaking down complex topics into simple, actionable
          steps. It’s never been a better time to be an engineer.
        </p>

        <p className="mb-4">I can’t wait to bring you this crash course.</p>

        <p className="mb-6">
          Meanwhile, check out my free{" "}
          <Link
            href="https://youtube.com/playlist?list=PLp073J8GLC8YMV_aw4GOrxXCkIi5W9kRL&si=GARVP8Yk2yPRun1A"
            className="text-brand font-semibold underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            TailwindCSS mini crash course (8 min)
          </Link>
          , another essential tool for modern interface builders (recorded in
          2023; fundamentals still hold up).
        </p>

        <p className="mb-4">
          Expect a few more of these before launch. I’ll keep them as
          informative and useful as possible. Happy coding until next time!
        </p>
        <p>
          Best,
          <br />
          Jonatan
        </p>
      </div>
    </Tailwind>
  );
}
