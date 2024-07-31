const formatDateTime = (createdAt) => {
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
      timeZone: 'Asia/Kolkata'
    };
    return new Intl.DateTimeFormat('en-IN', options).format(new Date(createdAt));
  };
  export default formatDateTime