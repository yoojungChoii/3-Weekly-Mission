import styles from "./CardContent.module.css";
import FetchFolderData from "../../../get-data/FetchFolderData";

interface Data {
  id: string;
  imageSource: string;
  description: string;
  createdAt: string;
}

function CardContent() {
  try {
    const folderData = FetchFolderData();
    if (folderData === null) {
      return <div>Loading...</div>; // 또는 다른 로딩 상태를 나타내는 JSX
    }
    const dataArray = folderData.folder.links;
    // 배열에 접근해 데이터 중에서도 내용 소스만 뽑아냄
    return (
      <div className={styles["card-container"]}>
        {dataArray.map((data: Data, index: number) => (
          <div className={styles["card"]}>
            <div className={styles["card-image"]}>
              <img
                key={data.id}
                src={data.imageSource}
                alt={`카드이미지-${index}`}
              />
            </div>
            <div className={styles["card-content"]}>
              <div className={styles["card-uploaded-when"]}>dd</div>
              <div className={styles["card-description"]} key={data.id}>
                {data.description}
              </div>
              <div className={styles["card-createdAt"]} key={data.id}>
                {data.createdAt}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  } catch (error) {
    console.error("데이터 가져오다가 에러 났어용", error);
    return null;
  }
}

export default CardContent;
