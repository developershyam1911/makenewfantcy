import init from "@/firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const querySnapshot = await getDocs(collection(init.db, "blog"));
    const res = await Promise.all(
      querySnapshot.docs.map(async (doc) => ({
        title: doc?.data()?.title,
        slug: doc?.data()?.slug,
        time: doc?.data()?.createdAt,
      }))
    );
    return NextResponse.json({ res });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ error: "failed to load data", db: init.db });
  }
}
