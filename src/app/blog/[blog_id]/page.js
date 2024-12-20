import SingleBlog from "@/components/SingleBlog";
import { ENDPOINT } from "@/constant";
import axios from "axios";

export async function generateMetadata({ params }) {
  const { slug } = params;
  try {
    const response = await axios.get(`${ENDPOINT}/api/blogs/${slug}`);
    if (response.status !== 200) {
      throw new Error("Network response was not ok.");
    }
    const item = response.data.res;
    console.log(item);

    return {
      title: item[0]?.title,
      description: item[0]?.desc,
      keywords: [item[0]?.keyword.split(",")],
      icons: {
        icon: "/images/favicon.png",
        shortcut: "/images/favicon.png",
        apple: "/images/favicon.png",
      },
      openGraph: {
        title: item[0]?.title,
        description: item[0]?.desc,
        images: item[0]?.image,
      },
    };
  } catch (error) {
    console.error("Error fetching Data:", error);
    return [];
  }
}

// export async function generateStaticParams() {
//   try {
//     const response = await axios.get(`${ENDPOINT}/api/blogs`);
//     if (response.status !== 200) {
//       throw new Error("Network response was not ok.");
//     }
//     const data = response.data.res;
//     const myData = data.map((item) => ({
//       slug: item.slug,
//     }));
//     return myData;
//   } catch (error) {
//     console.error(
//       "Error fetching Data:",
//       error.response ? error.response.data : error.message
//     );
//     return [];
//   }
// }

const page = ({ params }) => {
  const { blog_id } = params;
  return <SingleBlog blog_id={blog_id} />;
};

export default page;
