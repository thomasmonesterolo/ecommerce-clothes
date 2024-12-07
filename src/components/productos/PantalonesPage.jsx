import "./PantalonesPage.css";
import ClotheItem from '../clotheItem/ClotheItem';
import { clothesData } from '../clothes/Clothes';

const PantalonesPage= () => {

  return (
    <div className="main">
      <div
        className="main"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "25px",
          flexWrap: "wrap",
          margin: 15,
        }}
      >
        {clothesData
          .filter((item) => item.categoria === "Pantalón")
          .map((item, i) => (
            <ClotheItem key={i} item={item} />
          ))}
      </div>
    </div>
  );
};

export default PantalonesPage;