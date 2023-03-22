import SemiCircleCard from './SemiCircleChart'
import {cardProps} from "../src/interfaces";


export default function AnalysisCard(props: cardProps) {
    const {attribute, confidence, explanation, score, url_list} = props
    return (
        <div className="gap-4 flex m-auto flex-col items-center justify-start bg-m-grey rounded-3xl max-w-xs h-auto border-l-grey border-2 animate-[fade-in-up_500ms_ease-in-out]">
            <div className='bg-l-grey flex w-full rounded-b-none rounded-t-[20px] items-center flex-col pb-8'>
                <SemiCircleCard number={score} /> 
                <div className='-mt-16 flex w-full bottom-0 h-fit text-2xl justify-center text-m-blue font-bold'>{score}</div>
                <div className='mt-4 text-2xl font-bold text-m-blue'>{attribute}</div>  
            </div>

            <div className='px-4 flex flex-col items-center text-center justify-around h-full'>
                <div className='text-lg max-h-half overflow-y-scroll text-l-grey' style={{overflow: 'overlay'}}>{explanation}</div>
                <div className='mt-4 text-xl text-l-grey'>{confidence} Confidence</div>
            </div>    
        </div>
    )
}