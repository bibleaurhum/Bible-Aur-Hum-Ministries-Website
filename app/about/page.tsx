export default function AboutPage() {
  return (
    <main>

      {/* Hero Banner */}
      <section
        className="relative h-[500px] bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/about-banner.jpg')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="text-center text-white px-6">

            <p className="uppercase tracking-[0.4em] text-yellow-300 font-semibold">
              About Us
            </p>

            <h1 className="mt-6 text-5xl md:text-7xl font-extrabold">
              Bible Aur Hum
              <br />
              Ministries Foundation
            </h1>

            <p className="mt-8 max-w-3xl mx-auto text-xl text-gray-200 leading-9">
              Teaching God's Word.
              Transforming Lives.
              Sharing the Gospel of Jesus Christ.
            </p>

          </div>
        </div>
      </section>
      {/* Who We Are */}
<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center">

      <p className="uppercase tracking-[0.3em] text-red-600 font-semibold">
        WHO WE ARE
      </p>

      <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
        Bible Aur Hum Ministries Foundation
      </h2>

      <div className="w-24 h-1 bg-red-600 mx-auto mt-6 rounded-full"></div>

    </div>

    <div className="mt-12 max-w-4xl mx-auto">

      <p className="text-lg leading-9 text-gray-700 text-center">
        Bible Aur Hum Ministries Foundation is a Christ-centered ministry
        dedicated to teaching the Holy Scriptures faithfully, equipping
        believers with biblical truth, strengthening the Church through
        sound doctrine, and proclaiming the Gospel of Jesus Christ with
        love, compassion, and integrity.
      </p>

      <p className="mt-8 text-lg leading-9 text-gray-700 text-center">
        Our desire is to help people know God more deeply through His Word,
        grow in their faith, and become faithful disciples who reflect the
        character of Jesus Christ in their homes, churches, workplaces,
        and communities.
      </p>

    </div>

  </div>
</section>
{/* Founder's Vision */}
<section className="py-24 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center">
      <p className="uppercase tracking-[0.3em] text-blue-700 font-semibold">
        FOUNDER'S VISION
      </p>

      <h2 className="mt-4 text-4xl md:text-5xl font-bold">
        A Calling to Teach God's Word
      </h2>

      <div className="w-24 h-1 bg-blue-700 mx-auto mt-6 rounded-full"></div>
    </div>

    <div className="mt-12 max-w-4xl mx-auto text-center">

      <p className="text-lg leading-9 text-gray-700">
        Bible Aur Hum Ministries Foundation was established with one clear
        purpose: to faithfully teach the Word of God, strengthen believers,
        answer difficult biblical questions, and proclaim the Gospel of
        Jesus Christ with truth, love, and compassion.
      </p>

      <p className="mt-8 text-lg leading-9 text-gray-700">
        This vision has been deeply shaped by the faithful life and ministry
        of Late Rev. Rafiq Masih, whose love for Christ, commitment to the
        Scriptures, and passion for serving people continue to inspire this
        ministry today.
      </p>

    </div>

  </div>
</section>
{/* Mission & Vision */}
<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">
      <p className="uppercase tracking-[0.3em] text-red-600 font-semibold">
        OUR MISSION & VISION
      </p>

      <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
        Living for the Glory of Christ
      </h2>

      <div className="w-24 h-1 bg-red-600 mx-auto mt-6 rounded-full"></div>
    </div>

    <div className="grid md:grid-cols-2 gap-12">

      {/* Mission */}
      <div className="bg-gray-50 rounded-2xl p-10 shadow-lg">
        <h3 className="text-3xl font-bold text-blue-700 mb-6">
          Our Mission
        </h3>

        <p className="text-gray-700 leading-9">
          To faithfully teach the Holy Scriptures, strengthen believers,
          proclaim the Gospel of Jesus Christ, answer difficult biblical
          questions with wisdom, and serve communities with Christ-like love,
          compassion, and integrity.
        </p>
      </div>

      {/* Vision */}
      <div className="bg-gray-50 rounded-2xl p-10 shadow-lg">
        <h3 className="text-3xl font-bold text-blue-700 mb-6">
          Our Vision
        </h3>

        <p className="text-gray-700 leading-9">
          Our vision is to see lives transformed through God's Word,
          disciples equipped for faithful service, churches strengthened,
          and, by God's grace, establish schools, hospitals, churches,
          and ministries that reflect the love of Jesus Christ and bring
          hope to future generations.
        </p>
      </div>

    </div>

  </div>
</section>
{/* Core Values */}
<section className="py-24 bg-gray-100">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">
      <p className="uppercase tracking-[0.3em] text-blue-700 font-semibold">
        OUR CORE VALUES
      </p>

      <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
        The Principles That Guide Our Ministry
      </h2>

      <div className="w-24 h-1 bg-blue-700 mx-auto mt-6 rounded-full"></div>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      <div className="bg-white p-8 rounded-2xl shadow-lg">
        <h3 className="text-2xl font-bold text-red-600 mb-4">
          Biblical Truth
        </h3>

        <p className="text-gray-700 leading-8">
          God's Word is our final authority for faith, doctrine, and daily living.
        </p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-lg">
        <h3 className="text-2xl font-bold text-red-600 mb-4">
          Christ-Centered
        </h3>

        <p className="text-gray-700 leading-8">
          Everything we teach and every ministry we undertake is centered on Jesus Christ.
        </p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-lg">
        <h3 className="text-2xl font-bold text-red-600 mb-4">
          Compassion
        </h3>

        <p className="text-gray-700 leading-8">
          We desire to serve people with love, mercy, humility, and practical care.
        </p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-lg">
        <h3 className="text-2xl font-bold text-red-600 mb-4">
          Integrity
        </h3>

        <p className="text-gray-700 leading-8">
          We seek to honor God through honesty, accountability, and faithful stewardship.
        </p>
      </div>

    </div>

  </div>
</section>
{/* Statement of Faith */}
<section className="py-24 bg-blue-900 text-white">
  <div className="max-w-6xl mx-auto px-6">

    <div className="text-center mb-16">

      <p className="uppercase tracking-[0.3em] text-yellow-300 font-semibold">
        STATEMENT OF FAITH
      </p>

      <h2 className="mt-4 text-4xl md:text-5xl font-bold">
        What We Believe
      </h2>

      <div className="w-24 h-1 bg-yellow-400 mx-auto mt-6 rounded-full"></div>

    </div>

    <div className="space-y-10 text-lg leading-9 text-gray-200">

      <div>
        <h3 className="text-2xl font-bold text-white mb-3">
          The Holy Scriptures
        </h3>

        <p>
          We believe that the Bible is the inspired, infallible, and authoritative
          Word of God, revealing His truth for faith and life.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-white mb-3">
          Jesus Christ
        </h3>

        <p>
          We believe that Jesus Christ is the eternal Son of God, fully God and
          fully man, who died for our sins, rose again, and alone is Lord and Savior.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-white mb-3">
          Salvation
        </h3>

        <p>
          We believe that salvation is by God's grace alone through faith in Jesus
          Christ alone and not by human works.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-white mb-3">
          The Church
        </h3>

        <p>
          We believe that the Church is the Body of Christ, called to worship God,
          make disciples, proclaim the Gospel, and serve the world in love.
        </p>
      </div>

    </div>

  </div>
</section>
    </main>
  );
}