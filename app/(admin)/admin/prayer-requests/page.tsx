export const dynamic = "force-dynamic";
import { prisma } from "@/lib/prisma";
import { updatePrayerRequestStatus } from "@/app/prayer/actions";

export default async function PrayerRequestsPage() {
  const prayerRequests = await prisma.prayerRequest.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="max-w-6xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Prayer Requests
        </h1>

        <p className="mt-2 text-gray-500">
          Manage prayer requests submitted to Bible Aur Hum Ministries.
        </p>
      </div>

      <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
        {prayerRequests.length === 0 ? (
          <div className="p-10 text-center text-gray-500">
            No prayer requests found.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="border-b bg-gray-50">
                <tr>
                  <th className="px-6 py-4 font-semibold">Name</th>
                  <th className="px-6 py-4 font-semibold">Email</th>
                  <th className="px-6 py-4 font-semibold">Prayer Request</th>
                  <th className="px-6 py-4 font-semibold">Status</th>
                  <th className="px-6 py-4 font-semibold">Date</th>
                </tr>
              </thead>

              <tbody>
                {prayerRequests.map((prayerRequest) => (
                  <tr
                    key={prayerRequest.id}
                    className="border-b last:border-0"
                  >
                    <td className="px-6 py-4 font-medium text-gray-900">
                      {prayerRequest.name}
                    </td>

                    <td className="px-6 py-4 text-gray-600">
                      {prayerRequest.email || "—"}
                    </td>

                    <td className="max-w-md px-6 py-4 text-gray-600">
                      {prayerRequest.request}
                    </td>

                    <td className="px-6 py-4">
                      <form
                        action={async (formData) => {
                          "use server";

                          const status = String(
                            formData.get("status")
                          ) as
                            | "PENDING"
                            | "APPROVED"
                            | "ANSWERED"
                            | "ARCHIVED";

                          await updatePrayerRequestStatus(
                            prayerRequest.id,
                            status
                          );
                        }}
                      >
                        <select
                          name="status"
                          defaultValue={prayerRequest.status}
                          className="rounded-lg border px-3 py-2 text-sm outline-none focus:border-blue-600"
                        >
                          <option value="PENDING">Pending</option>
                          <option value="APPROVED">Approved</option>
                          <option value="ANSWERED">Answered</option>
                          <option value="ARCHIVED">Archived</option>
                        </select>

                        <button
                          type="submit"
                          className="ml-2 rounded-lg bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700"
                        >
                          Save
                        </button>
                      </form>
                    </td>

                    <td className="px-6 py-4 text-sm text-gray-500">
                      {prayerRequest.createdAt.toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}