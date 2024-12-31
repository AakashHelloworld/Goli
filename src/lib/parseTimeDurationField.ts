export const parseTimeDurationField=(timestamp: string): string =>{
    if (!timestamp) {
          return "" ;
    }


      // Convert to Date object
      const date = new Date(timestamp);

      // Format the date
      const options : Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric', year: 'numeric' };
      let formattedDate = date.toLocaleDateString('en-US', options);

      // Add suffix for the day
      const day = date.getDate();
      const suffix = (day % 10 === 1 && day !== 11) ? 'st' :
                    (day % 10 === 2 && day !== 12) ? 'nd' :
                    (day % 10 === 3 && day !== 13) ? 'rd' : 'th';

      // Construct final format
      formattedDate = formattedDate.replace(`${day}`, `${day}${suffix}`);
      return formattedDate;

  }