import { firestore } from "./server";

export async function saveBetaUser(data: { name: string; email: string }) {
  await firestore.collection("betaUsers").add({
    ...data,
    createdAt: new Date(),
  });
}
