import "./Mansory.css";

export default function MyMansonry(props) {
  const { imageUrls, columnCount, gap } = props;
  console.log(imageUrls);

  return (
    <div style={{ columns: columnCount, columnGap: 10 }} className="imgcolumn">
      {imageUrls.map((img, idx) => (
        <div key={idx}>
          <img src={img} alt="" className="myimg" />
        </div>
      ))}
    </div>
  );
}
