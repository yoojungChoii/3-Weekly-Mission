import { useEffect, useState } from 'react';

interface UserData {
  email: string;
}

function FetchUserData(): UserData | null {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    async function getUser() {
      try {
        const response = await fetch(
          'https://bootcamp-api.codeit.kr/api/sample/user',
        );
        const result = await response.json();
        console.log(result);

        setUserData(result);
      } catch (error) {
        console.error('에러 발생!!!!!', error);
      }
    }
    getUser();
  }, []);

  // if (userData === null) {
  //   //  userData가 null이면 로딩 중을 표시
  //   return <div>Loading...</div>;
  // }
  // 로딩이 완료되면 실제 데이터를 반환
  return userData;
}

export default FetchUserData;
