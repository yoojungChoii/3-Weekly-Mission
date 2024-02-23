import { FolderData } from "./FetchSharedData";
import { useEffect, useState } from "react";

function FetchFolderData(): FolderData | null {
  const [folderData, setfolderData] = useState(null);

  useEffect(() => {
    async function getFolder() {
      try {
        const response = await fetch(
          "https://bootcamp-api.codeit.kr/api/sample/folder"
          // "https://bootcamp-api.codeit.kr/api/users/8595/folders"
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
