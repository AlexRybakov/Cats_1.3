export function getCookie() {
  return document.cookie.split(';').reduce((acc,item) => {
      const [name,value] = item.split('=')

      return {...acc, [name]: value}
  },{})
}

export function deleteCookie(key) {
  document.cookie = `${key}=;expires=${new Date(0)}`
}


export const printNumerals = (number, titles) => {
  number = Math.abs(number);;
  if (Number.isInteger(number)) {
      const cases = [2,0,1,1,1,2];
      const text = titles[
          number % 100 > 4 && number % 100 <20
          ? 2
          :cases[number % 10 < 5 ? number % 10 : 5]
      ];
      return `${text}`;
  }
  return `${titles[1]}`;
};


export function generateRating(rate) {
  const rateElements = [];
  for (let index = 0; index < 10; index++) {
      if(index < rate && rate % 1 === 0) {
          rateElements.push('<i class="fa-solid fa-star"></i>');
      } else if(index < Math.floor(rate) && rate % 1 !== 0) {
           rateElements.push('<i class="fa-solid fa-star"></i>');
      } else if(index === Math.floor(rate) && rate % 1 !== 0) {
           rateElements.push('<i class="fa-solid fa-star-half-stroke"></i>');
      } else {
          rateElements.push('<i class="fa-regular fa-star"></i>');
      }
  }
  return rateElements.join('');
}