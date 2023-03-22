import {cardList} from "../src/interfaces";

export default function CardList(props: cardList) {
    const {category, details} = props
  return (
    <div className="bg-m-grey shadow-md rounded-3xl max-w-xs m-auto">
        <h2 className="text-3xl p-4 font-bold text-m-blue bg-l-grey h-2/5 rounded-t-[20px] align-middle text-start">{category}</h2>
        {details.map((option) => (
          <div key={option} className="flex items-center border-t-2 border-l-grey">
              <p className="text-l-grey text-lg p-4 ">{option}</p>
          </div>
        ))}
    </div>
  )
}