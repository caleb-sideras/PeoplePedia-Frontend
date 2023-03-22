import {IntroProps} from "../src/interfaces";

export default function CardIntro(props: IntroProps) {
console.log(props)
const { photo, name, age, location, degree, graduation_year, institution } = props

  return (
    <div className="mb-4 w-full m-auto bg-m-grey rounded-3xl max-w-xl h-60 border-l-grey border-2 animate-[fade-in-up_500ms_ease-in-out] grid grid-cols-[2fr,3fr] gap-2.5">
      <div className="p-4 bg-l-grey flex h-full rounded-b-none rounded-l-[20px] justify-center items-center flex-col">
        <img 
        src={photo} alt={name} 
        className=" h-full w-full rounded-3xl object-cover" />
      </div>
      <div className="pr-4 overflow-hidden ml-4 h-full items-center">
        <h3 className="mt-4 text-3xl font-bold text-m-blue overflow-hidden">{name}</h3>
        <p className="text-xl text-l-grey">{age} years old</p>
        <p className="text-xl text-l-grey">{location}</p>

        <h3 className="mt-2 text-xl text-l-grey">{degree} - {institution} - {graduation_year}</h3>
      </div>
    </div>
  )
}