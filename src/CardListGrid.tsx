import {cardListGrid, cardList} from "../src/interfaces";
import CardList from "./CardList";

export default function CardListGrid(props: cardListGrid) {
  const {cards} = props
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-auto-fit">
      {cards.map((card:cardList) => (
        <div key={card.category} style={{ gridTemplateColumns: "minmax(250px, 1fr)" }}>
          <CardList {...card} />
        </div>
      ))}
    </div>
  );
}