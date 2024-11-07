import "./Person.css";

type PersonProps = {
  imageUrl: string;
  name: string;
  age: number;
};

export default function Person({ imageUrl, name, age }: PersonProps) {
  return (
    <div className="person">
      <img src={imageUrl} alt={`${name}'s image`} />
      <div className="details">
        <h2>{name}</h2>
        <p>{age}</p>
      </div>
    </div>
  );
}
