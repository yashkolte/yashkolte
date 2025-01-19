const apiUrl = "https://opbento.edgexhq.tech/api/bento?n=Yash&g=yashkolte&x=yashkolte_&l=yashkolte&i=https%3A%2F%2Fraw.githubusercontent.com%2Fyashkolte%2Fyashkolte%2Frefs%2Fheads%2Fmaster%2Fprofile_pic.png&p=yashkolte.web.app&z=2fb49";
interface BentoResponse {
  url: string;
}

const fetchBentoUrl = async (apiUrl: string): Promise<string> => {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: BentoResponse = (await response.json()) as BentoResponse;
    return data.url;
  } catch (error) {
    console.error("Error fetching Bento URL:", error);
    throw error;
  }
};

// @ts-ignore
fetchBentoUrl(apiUrl);
