import init from "@/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";

export async function getServerSideProps({ query }) {
  try {
    const slug = query.slug;
    const colref = collection(init.db, "blog");
    const q = query(colref, where("slug", "==", slug));
    const querySnapshot = await getDocs(q);

    const res = querySnapshot.docs.map((doc) => ({
      slug: doc.data()?.slug,
      title: doc.data()?.title,
      image: doc.data()?.image,
      desc: doc.data()?.meta_description,
      keyword: doc.data()?.keyword,
      time: doc.data()?.createdAt,
    }));
    // console.log(res)
    return {
      props: { res },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { error: "Failed to load data", db: init.db },
    };
  }
}
export async function GET(req) {
  // console.log('req',req)
  const slug = req.url.split("blogs/")[1];
  // console.log('slug',slug)
  try {
    const colref = collection(init.db, "blog");
    let q = query(colref, where("slug", "==", slug));
    const querySnapshot = await getDocs(q);
    const res = await Promise.all(
      querySnapshot.docs.map(async (doc) => ({
        slug: doc.data().slug,
        title: doc.data().title,
        image: doc.data().image,
        desc: doc.data().meta_description,
        keyword: doc.data().keyword,
        time: doc.data().createdAt,
      }))
    );
    return NextResponse.json({ res });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ error: "failed to load data", db: init.db });
  }
}
