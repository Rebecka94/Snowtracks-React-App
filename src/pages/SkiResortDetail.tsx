import { useParams } from "react-router";
import { skidorter } from "../data";

export default function SkiResortDetail() {
  const { id } = useParams();
  const skiResort = skidorter.find((resort) => resort.id === Number(id));

  if (!skiResort) {
    return <h2>Skidorten finns inte</h2>;
  }

  return (
    <div>
      <h2>{skiResort.namn}</h2>
      <p>Land: {skiResort.land}</p>
      <p>Kontinent: {skiResort.kontinent}</p>
    </div>
  );
}
