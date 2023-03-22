import {useState } from 'react'
import CardGrid from './CardGrid'
import CardIntro from './CardIntro'
import {cardProps, IntroProps, cardList, TDProps } from "../src/interfaces";
import SearchBar from './SearchBar'
import TDCard from './TDCard'
import CardListGrid from './CardListGrid'

type Props = {}


export default function Home(props: Props) {
  const [data, setData] = useState<string | null>(null);
  const [dv, setDV] = useState<cardProps[] | null>(null);
  const [skills, setSkills] = useState<cardList[] | null>(null);
  const [intro, setIntro] = useState<IntroProps | null>(null);
  const [td, setTD] = useState<TDProps | null>(null);


  const handleDataChange = (newData: string) => {
    let values: any;
    try {
      values = JSON.parse(newData);
      console.log(values) 
    } catch (error) {
      console.error(error); 
    }
    setIntro({
      photo : values.query.photo,
      age: values.query.age,
      name: values.query.name,
      location: values.query.location,
      institution: values.query.education.institution,
      degree: values.query.education.degree,
      graduation_year: values.query.education.graduation_year
    })
    setDV(values.query.analysis)
    setSkills(values.query.msc)
    setData(newData);
    setTD({
      title: values.query.occupation,
      description: values.query.conclusion,
    })
  };

    return (
      <div className='bg-center p-3 px-6 w-full justify-center text-cente h-full'>
        <div
          className='mb-4 p-14 rounded-3xl justify-center flex'
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/kkr2TmO3u_FfBakRK1ZO-dpxKpxvX84TsZksqJNtfAjqBpCzdUairFKYnAhUj9Xz8tWkTXwYI9QjykmCmswAlsmLfIIXBFjxYabcsnuPizy5OHVYjMW2=w2400-rj')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}>
          <div className='flex-col items-center text-white m-4 flex max-w-5xl text-center justify-center min-h-full'>
            <h1 className="font-extrabold mb-6 tracking-wide md:text-9xl text-6xl">
              Find Anyone
            </h1>
            <div className='md:text-xl text-lg max-w-3xl mb-4'>
              AI powered search that finds and summerizes information for anyone on the internet. Enter a name below!
            </div>
            <SearchBar data={data} onDataChange={handleDataChange}/>
          </div>
        </div>
        <div className='max-w-6xl m-auto'>
          <div className=' px-0 lg:px-7 grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-auto-fit'>
            {intro && <CardIntro {...intro} />}
            {td && <TDCard {...td}/>}
          </div>
          {dv && <CardGrid cards={dv} />}
          {skills && <CardListGrid cards={skills}/>}
        </div>
      </div>
    )
}