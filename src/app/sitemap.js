const axios = require("axios");

async function blogList() {
  try {
    const response = await axios.get(`https://makenewfantasy.com/api/blogs`);
    return response.data.res;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export default async function sitemap() {
  const blogs = await blogList();
  const blogsEntries = blogs?.map((item) => {
    return {
      url: `https://makenewfantasy.com/api/blogs/${item?.slug}`,
      lastModified: new Date(item?.time?.seconds * 1000),
    };
  });

  return [
    {
      url: `https://makenewfantasy.com`,
      lastModified: "2023-11-30T18:30:00.000Z",
    },
    {
      url: `https://makenewfantasy.com/about`,
      lastModified: "2023-11-30T18:30:00.000Z",
    },
    {
      url: `https://makenewfantasy.com/services`,
      lastModified: "2023-11-30T18:30:00.000Z",
    },
    {
      url: `https://makenewfantasy.com/price`,
      lastModified: "2023-11-30T18:30:00.000Z",
    },
    {
      url: `https://makenewfantasy.com/blog`,
      lastModified: "2023-11-30T18:30:00.000Z",
    },
    ...blogsEntries,
  ];
}
