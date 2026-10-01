import { createPrayerRequest } from "@/app/prayer/actions";

export default function PrayerPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            Prayer Request
          </h1>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            We would be honored to pray with you. Share your prayer request
            below, and our ministry team will remember you in prayer.
          </p>
        </div>

        <form
          action={createPrayerRequest}
          className="rounded-2xl border bg-white p-8 shadow-sm"
        >
          <div className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block font-medium text-gray-900"
              >
                Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-600"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block font-medium text-gray-900"
              >
                Email <span className="text-gray-400">(optional)</span>
              </label>

              <input
                id="email"
                name="email"
                type="email"
                className="w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-600"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="request"
                className="mb-2 block font-medium text-gray-900"
              >
                Prayer Request
              </label>

              <textarea
                id="request"
                name="request"
                required
                rows={7}
                className="w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-600"
                placeholder="Please share your prayer request..."
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Submit Prayer Request
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}