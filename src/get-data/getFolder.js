import { useEffect } from "react";

function FetchFolderData() {
  useEffect(() => {
    async function getFolder(setData) {
      try {
        const response = await fetch(
          "https://bootcamp-api.codeit.kr/api/sample/folder"
        );
        const data = await response.json();
        console.log(response);
        setData(data);
      } catch (error) {
        console.error("에러 발생!!!!!", error);
      }
    }
    getFolder();
  }, []);
}

export default FetchFolderData;
