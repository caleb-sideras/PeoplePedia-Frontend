import AnalysisCard from "./AnalysisCard";
import { UsersListProps, cardProps } from "../src/interfaces";

export default function CardGrid(props: UsersListProps) {
  const {cards} = props
  return (
    <div className="mb-4 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-auto-fit">
      {cards.map((card:cardProps) => (
        <div key={card.attribute} style={{ gridTemplateColumns: "minmax(250px, 1fr)" }}>
          <AnalysisCard {...card} />
        </div>
      ))}
    </div>
  );
};