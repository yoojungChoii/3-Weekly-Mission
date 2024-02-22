import { useEffect, useState } from "react";

interface FolderData {
  folder: {
    owner: {
      profileImageSource: string;
      name: string;
    };
    name: string;
    links: [];
  };
}

function FetchFolderData(): FolderData | null {
  const [folderData, setfolderData] = useState(null);

  useEffect(() => {
    async function getFolder() {
      try {
        const response = await fetch(
          "https://bootcamp-api.codeit.kr/api/sample/folder"
        );
        const result = await response.json();
        console.log(result);

        setfolderData(result);
      } catch (error) {
        console.error("에러 발생!!!!!", error);
      }
    }
    getFolder();
  }, []);

  return folderData;
}

export default FetchFolderData;
