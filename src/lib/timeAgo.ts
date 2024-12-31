export const  timeAgo=(dateString : string)=>{
    const date = new Date(dateString);
    const now = new Date();
  
    let years = now.getFullYear() - date.getFullYear();
    let months = now.getMonth() - date.getMonth();
    let days = now.getDate() - date.getDate();
  
    if (days < 0) {
      months--;
      days += new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    }
  
    if (months < 0) {
      years--;
      months += 12;
    }
  
    let message = '';
    if (years > 0) message += `${years} year${years > 1 ? 's' : ''} `;
    if (months > 0) message += `${months} month${months > 1 ? 's' : ''} `;
    if (days > 0) message += `${days} day${days > 1 ? 's' : ''} `;
    else{
        message = 'Today';
    }
    if(message != 'Today')  message += 'ago';
  
    return message.trim();
  }