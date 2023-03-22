export interface UsersListProps {
    cards: cardProps[]
  }

export type cardProps = {
    attribute: string
    score: number
    explanation : string
    url_list: [],
    confidence: string
}

export interface cardListGrid{
    cards: cardList[]
}

export type cardList =  {
    category: string
    details: []
}
  

export interface IntroProps {
    photo: string 
    name: string 
    age: string
    location: string
    degree: string
    graduation_year: string
    institution: string
}

export interface TDProps {
    title: string
    description: string
}