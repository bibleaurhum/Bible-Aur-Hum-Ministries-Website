import Image from "next/image";

export const metadata = {
  title: "Yousaf Shahid | Founder | Bible Aur Hum Ministries",
  description:
    "Read the complete testimony, calling, vision, and ministry journey of Yousaf Shahid, founder of Bible Aur Hum Ministries.",
};

export default function FounderPage() {
  return (
    <main className="bg-white">

      {/* Hero Section */}

      <section className="bg-gradient-to-b from-blue-900 to-blue-700 text-white py-24">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <p className="uppercase tracking-[0.4em] text-yellow-300 font-semibold">
              Founder of Bible Aur Hum Ministries
            </p>

            <h1 className="text-5xl md:text-7xl font-extrabold mt-6 leading-tight">
              Yousaf Shahid
            </h1>

            <p className="mt-8 text-xl leading-9 text-blue-100">
              Teaching God's Word with truth, reason, and love—equipping
              believers to know Christ deeply, defend the Christian faith,
              and faithfully share the Gospel with the world.
            </p>

          </div>

          <div className="flex justify-center">

            <Image
              src="/images/founder.jpg"
              alt="Yousaf Shahid"
              width={550}
              height={700}
              className="rounded-3xl shadow-2xl"
              priority
            />

          </div>

        </div>
        {/* Testimony */}

<section className="py-24">

  <div className="max-w-5xl mx-auto px-6">

    <div className="mb-16">

      <p className="uppercase tracking-[0.4em] text-red-600 font-semibold">
        My Testimony
      </p>

      <h2 className="mt-4 text-5xl font-bold text-gray-900">
        From Childhood to Calling
      </h2>

      <div className="w-24 h-1 bg-red-600 rounded-full mt-6"></div>

    </div>

    <div className="space-y-8 text-lg leading-9 text-gray-700">

      <p>
        I was born into a Christian family where faith was not merely a tradition
        but a way of life. From my earliest years, the Bible was read, taught,
        and lived within our home. Those early experiences planted a deep love
        for God's Word that continues to shape every aspect of my life and ministry.
      </p>

      <p>
        My late father,
        <strong> Rev. Rafiq Masih</strong>,
        faithfully served the Lord for many years. His humility,
        dedication, prayer life, and commitment to biblical truth became one
        of the greatest influences on my spiritual journey.
      </p>

      <p>
        As I grew older, I developed a desire not only to read Scripture but
        to understand it deeply. Difficult questions about God, faith, truth,
        and the reliability of the Bible inspired me to study carefully rather
        than settle for shallow answers.
      </p>

      <p>
        Through years of studying Scripture alongside science, mathematics,
        philosophy, history, and comparative religion, God strengthened my
        conviction that Christianity stands upon historical truth, logical
        consistency, and the unchanging authority of His Word.
      </p>

    </div>

  </div>

</section>
      {/* Testimony */}

      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">

          <div className="mb-16">
            <p className="uppercase tracking-[0.4em] text-red-600 font-semibold">
              My Testimony
            </p>

            <h2 className="mt-4 text-5xl font-bold text-gray-900">
              From Childhood to Calling
            </h2>

            <div className="w-24 h-1 bg-red-600 rounded-full mt-6"></div>
          </div>

          <div className="space-y-8 text-lg leading-9 text-gray-700">

            <p>
              I was born into a Christian family where faith was not merely a
              tradition but a way of life. From my earliest years, the Bible
              was read, taught, and lived within our home. Those early
              experiences planted a deep love for God's Word that continues to
              shape every aspect of my life and ministry.
            </p>

            <p>
              My late father, <strong>Rev. Rafiq Masih</strong>, faithfully
              served the Lord for many years. His humility, dedication, prayer
              life, and commitment to biblical truth became one of the greatest
              influences on my spiritual journey.
            </p>

            <p>
              As I grew older, I developed a desire not only to read Scripture
              but to understand it deeply. Difficult questions about God,
              faith, truth, and the reliability of the Bible inspired me to
              study carefully rather than settle for shallow answers.
            </p>

            <p>
              Through years of studying Scripture alongside science,
              mathematics, philosophy, history, and comparative religion, God
              strengthened my conviction that Christianity stands upon
              historical truth, logical consistency, and the unchanging
              authority of His Word.
            </p>

          </div>

        </div>
      </section>
            {/* Calling & Vision */}

      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">

          <div className="mb-16">
            <p className="uppercase tracking-[0.4em] text-blue-700 font-semibold">
              God's Calling
            </p>

            <h2 className="mt-4 text-5xl font-bold text-gray-900">
              Why Bible Aur Hum Was Founded
            </h2>

            <div className="w-24 h-1 bg-blue-700 rounded-full mt-6"></div>
          </div>

          <div className="space-y-8 text-lg leading-9 text-gray-700">

            <p>
              Over the years, God placed a deep burden on my heart to teach His
              Word faithfully and answer the difficult questions that many
              believers and seekers struggle with.
            </p>

            <p>
              I realized that countless people were searching for biblical
              truth but were often left with incomplete answers, confusion, or
              misinformation. This burden eventually led to the birth of
              <strong> Bible Aur Hum Ministries</strong>.
            </p>

            <p>
              This ministry exists to teach Scripture verse by verse, defend
              the Christian faith through biblical apologetics, answer honest
              questions with truth and compassion, and help believers grow in
              their relationship with Jesus Christ.
            </p>

            <p>
              My prayer is that every article, every sermon, every Bible study,
              and every answer published through Bible Aur Hum will bring glory
              to God, strengthen His Church, and lead many people to know Jesus
              Christ personally.
            </p>

          </div>

        </div>
      </section>
            {/* Mission & Vision */}

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-16">

            <p className="uppercase tracking-[0.4em] text-red-600 font-semibold">
              Mission & Vision
            </p>

            <h2 className="mt-4 text-5xl font-bold text-gray-900">
              Building Lives Through God's Word
            </h2>

            <div className="w-24 h-1 bg-red-600 rounded-full mx-auto mt-6"></div>

          </div>

          <div className="grid md:grid-cols-2 gap-10">

            <div className="bg-white rounded-2xl shadow-lg p-8 border">

              <h3 className="text-3xl font-bold text-blue-800 mb-6">
                Our Mission
              </h3>

              <ul className="space-y-4 text-lg text-gray-700 leading-8 list-disc pl-6">
                <li>Teach God's Word accurately.</li>
                <li>Defend the Christian faith through biblical apologetics.</li>
                <li>Answer difficult biblical questions with truth and wisdom.</li>
                <li>Strengthen believers spiritually.</li>
                <li>Share the Gospel of Jesus Christ with the world.</li>
              </ul>

            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border">

              <h3 className="text-3xl font-bold text-blue-800 mb-6">
                Our Vision
              </h3>

              <ul className="space-y-4 text-lg text-gray-700 leading-8 list-disc pl-6">
                <li>Build a world-class biblical apologetics platform.</li>
                <li>Provide Bible teaching in Urdu and English.</li>
                <li>Develop Bible courses and learning resources.</li>
                <li>Create a future AI Bible assistant.</li>
                <li>Launch a global Bible Aur Hum mobile app.</li>
                <li>Reach millions with the Gospel of Jesus Christ.</li>
              </ul>

            </div>

          </div>

        </div>
      </section>
            {/* Closing */}

      <section className="py-24 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[0.4em] text-yellow-300 font-semibold">
            Life Verse
          </p>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold">
            "Your word is a lamp to my feet
            <br />
            and a light to my path."
          </h2>

          <p className="mt-6 text-2xl text-blue-200">
            — Psalm 119:105
          </p>

          <div className="mt-12 space-y-8 text-lg leading-9 text-blue-100">

            <p>
              My prayer is that every person who visits Bible Aur Hum Ministries
              will grow in the knowledge of God's Word, experience the love of
              Jesus Christ, and become equipped to live faithfully for His glory.
            </p>

            <p>
              Thank you for taking the time to read my story. I invite you to
              continue exploring the Bible with us, ask your questions, study
              God's Word deeply, and become part of this ministry through your
              prayers and support.
            </p>

          </div>

        </div>
      </section>

      </section>

    </main>
  );
}
