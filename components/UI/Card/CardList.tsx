import Card from "./Card";
import FetchSharedData, { Data } from "../../../get-data/FetchSharedData";

function CardList() {
  try {
    const folderData = FetchSharedData();
    if (folderData === null) {
      return <div>Loading...</div>; // 또는 다른 로딩 상태를 나타내는 JSX
    }
    const dataArray: Data[] = folderData.folder.links;
    // 배열에 접근해 데이터 중에서도 내용 소스만 뽑아냄
    return <Card dataArray={dataArray} />;
  } catch (error) {
    console.error("데이터 가져오다가 에러 났어용", error);
    return null;
  }
}

export default CardList;
