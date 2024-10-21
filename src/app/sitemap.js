const { ENDPOINT } = require("@/constant");

async function blogList() {
  try {
    const response = await fetch(`${ENDPOINT}/api/blogs`);

    // Check if the response is not okay (status not in the range 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json(); // Parse JSON response
    return data.res;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Rethrow the error after logging
  }
}

export default async function sitemap() {
  const blogs = await blogList();
  const blogsEntries = blogs.map((item) => {
    return {
      url: `${ENDPOINT}/blog/${item?.slug}`,
      lastModified: new Date(item.time?.seconds * 1000),
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
