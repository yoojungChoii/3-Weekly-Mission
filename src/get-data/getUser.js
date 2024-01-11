import { useEffect } from "react";

function FetchUserData() {
  useEffect(() => {
    async function getUser(setData) {
      try {
        const response = await fetch(
          "https://bootcamp-api.codeit.kr/api/sample/user"
        );
        const data = await response.json();
        console.log(response);
        setData(data);
      } catch (error) {
        console.error("에러 발생!!!!!", error);
      }
    }
    getUser();
  }, []);
}

export default FetchUserData;
