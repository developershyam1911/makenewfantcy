const { ENDPOINT } = require("@/constant");
const axios = require("axios");

async function blogList() {
  try {
    const response = await axios.get(`${ENDPOINT}/api/blogs`);
    return response?.data?.res;
  } catch (error) {
    console.error("Error fetching datassss:", error);
    throw error;
  }
}

export default async function sitemap() {
  const blogs = await blogList();
  const blogsEntries = blogs?.map((item) => {
    return {
      url: `${ENDPOINT}/blog/${item?.slug}`,
      lastModified: new Date(item?.time?.seconds * 1000),
    };
  });

  return [
    {
      url: `${ENDPOINT}`,
      lastModified: "2023-11-30T18:30:00.000Z",
    },
    {
      url: `${ENDPOINT}/about`,
      lastModified: "2023-11-30T18:30:00.000Z",
    },
    {
      url: `${ENDPOINT}/services`,
      lastModified: "2023-11-30T18:30:00.000Z",
    },
    {
      url: `${ENDPOINT}/price`,
      lastModified: "2023-11-30T18:30:00.000Z",
    },
    {
      url: `${ENDPOINT}/blog`,
      lastModified: "2023-11-30T18:30:00.000Z",
    },
    ...blogsEntries,
  ];
}
