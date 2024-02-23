import { useEffect, useState } from "react";

export interface Data {
  id: string;
  imageSource: string;
  description: string;
  createdAt: string;
}
export interface FolderData {
  folder: {
    owner: {
      profileImageSource: string;
      name: string;
    };
    name: string;
    links: Data[];
  };
}

function FetchSharedData(): FolderData | null {
  const [SharedData, setSharedData] = useState(null);

  useEffect(() => {
    async function getSharedData() {
      try {
        const response = await fetch(
          "https://bootcamp-api.codeit.kr/api/sample/folder"
          // "https://bootcamp-api.codeit.kr/api/users/8595/folders"
        );
        const result = await response.json();
        console.log(result);
        setSharedData(result);
      } catch (error) {
        console.error("에러 발생!!!!!", error);
      }
    }
    getSharedData();
  }, []);

  return SharedData;
}

export default FetchSharedData;
