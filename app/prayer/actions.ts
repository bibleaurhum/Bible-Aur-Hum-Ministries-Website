"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function createPrayerRequest(formData: FormData) {
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const request = String(formData.get("request") || "").trim();

  if (!name) {
    throw new Error("Name is required.");
  }

  if (!request) {
    throw new Error("Prayer request is required.");
  }

  await prisma.prayerRequest.create({
    data: {
      name,
      email: email || null,
      request,
    },
  });

  redirect("/prayer?success=1");
}

export async function updatePrayerRequestStatus(
  id: number,
  status: "PENDING" | "APPROVED" | "ANSWERED" | "ARCHIVED"
) {
  await prisma.prayerRequest.update({
    where: {
      id,
    },
    data: {
      status,
    },
  });

  redirect("/admin/prayer-requests");
}