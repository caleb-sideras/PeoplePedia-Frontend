import {TDProps} from "../src/interfaces";

export default function TDCard(props: TDProps) {
const { title, description } = props

  return (
    <div className="mb-4 flex m-auto flex-col items-center justify-start bg-m-grey rounded-3xl w-full h-60 border-l-grey border-2 animate-[fade-in-up_500ms_ease-in-out]">
        <div className="pl-4 pt-4 justify-center bg-l-grey flex w-full h-2/5 rounded-t-[20px] align-middle text-start flex-col">
            <h3 className="text-3xl font-bold text-m-blue overflow-y-scroll" style={{overflow: 'overlay'}}>{title}</h3>
        </div>
        <p className="p-4 text-xl text-l-grey overflow-y-scroll" style={{overflow: 'overlay'}}>{description}</p>
    </div>
  )
}