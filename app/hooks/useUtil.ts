import { differenceInYears } from 'date-fns';

export const useFormatDate = (date: string): string => {
    const parsedDate = new Date(date);
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
  
    return parsedDate.toLocaleString(undefined, options);
  };
  
  export const useFormatFullDate = (date: string): string => {
    const parsedDate = new Date(date);
    const hours = parsedDate.getHours().toString().padStart(2, '0');
    const minutes = parsedDate.getMinutes().toString().padStart(2, '0');
    const day = parsedDate.getDate().toString().padStart(2, '0');
    const month = (parsedDate.getMonth() + 1).toString().padStart(2, '0');
    const year = parsedDate.getFullYear();
    
    return `${hours}:${minutes} ${day}-${month}-${year}`;
  };
  
  export const getCountry = () => {
    return fetch('http://ip-api.com/json') 
      .then((response) => response.json())
      .then((data) => {
        const country = data.country;
        return country;
      })
      .catch((error) => {
        console.error('Error retrieving IP geolocation:', error);
      });
  };

  export const getAge = (dob: string) => {
    const now = new Date();
    const parsedDob = new Date(dob);
    const age = differenceInYears(now, parsedDob);
  
    return age;
  };