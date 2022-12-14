// Object Types Challenge
// Based on what we discussed we need to make up our Property Objects and array,
// can you create that array, making sure to assign the correct Types?

import { showReviewTotal, populateUser } from './utils'
let isOpen: boolean

// Reviews
const reviews : { 
    name: string; 
    stars: number; 
    loyaltyUser: boolean; 
    date: string
    }[] = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: true,
        date: '01-04-2021'
    },
    {
      name: 'Andrzej',
      stars: 3,
      loyaltyUser: false,
      date: '28-03-2021'
    },
    {
      name: 'Omar',
      stars: 4,
      loyaltyUser: true,
      date: '27-03-2021'
    },
]

// User
const you: {
    firstName: string;
    lastName: string;
    isReturning: boolean;
    age: number;
    stayedAt: string[]
} = {
    firstName: 'Bobby',
    lastName: 'Brown',
    isReturning: true,
    age: 35,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
}

//Properties
const properties : {
    image: string;
    title: string;
    price: number;
    location: {
        firstLine: string;
        city: string;
        code: number;
        country: string;
    };
    contact:[number, string];
    isAvailable: boolean;
}[] = [
    {
        image: '',
        title: 'Colombian Shack',
        price: 45,
        location: {
            firstLine: 'shack 37',
            city: 'Bogota',
            code: 45632,
            country: 'Colombia'
        },
        contact: [ +9676877987080, 'marywinkle@gmail.com'],
        isAvailable: true  
    },
        {
        image: '',
        title: 'Polish Cottage',
        price: 34,
        location: {
            firstLine: 'no 23',
            city: 'Gdansk',
            code: 76632,
            country: 'Poland'
        },
        contact: [ +9676877987080, 'marywinkle@gmail.com'],
        isAvailable: false
    },
      {
      image: '',
      title: 'London Flat',
      price: 23,
      location: {
        firstLine: 'flat 15',
        city: 'London',
        code: 35433,
        country: 'United Kingdom',
      },
      contact: [ +9676877987080, 'marywinkle@gmail.com'],
      isAvailable: true
  }
]

// Functions
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)

populateUser(you.isReturning, you.firstName)

//Add the properties
for (let i = 0; i < properties.length; i++) {
  const card = document.createElement('div')
  card.classList.add('card')
  card.innerHTML = properties[i].title
  const image = document.createElement('img')
  image.setAttribute('src', properties[i].image)
  card.appendChild(image)
  propertyContainer.appendChild(card)
}

//Tuple: allow you to express an array with a fixed number of elements whose types are known.

//Enum as in languages like C#, an enum is a way of giving more friendly names to sets of numeric values.