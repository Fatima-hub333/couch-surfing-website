const reviewTotalDisplay = document.querySelector('#reviews')

const reviews: {
  name: string;
  stars: number;
  loyaltyUser: boolean;
  date: string;
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

// Solution
function showReviewTotal (value : number) {
  reviewTotalDisplay.innerHTML = 'review total ' + value.toString()
}

showReviewTotal(reviews.length)

const you: {
    userName: string;
    isReturning: boolean;
    age: number;
    stayedAt: string[];
} = {
    userName: 'Boby',
    isReturning: true,
    age: 25,
    stayedAt: ['Islamabad', 'E-11', Pakistan]
}