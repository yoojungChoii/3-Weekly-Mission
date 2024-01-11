import { useEffect, useState } from 'react';

function FetchFolderData() {
  const [folderData, setfolderData] = useState(null);

  useEffect(() => {
    async function getFolder() {
      try {
        const response = await fetch(
          'https://bootcamp-api.codeit.kr/api/sample/folder',
        );
        const result = await response.json();
        console.log(result);

        setfolderData(result);
      } catch (error) {
        console.error('에러 발생!!!!!', error);
      }
    }
    getFolder();
  }, []);

  if (folderData === null) {
    //  userData가 null이면 로딩 중을 표시
    return <div>Loading...</div>;
  }

  // 로딩이 완료되면 실제 데이터를 반환
  return folderData;
}

export default FetchFolderData;
