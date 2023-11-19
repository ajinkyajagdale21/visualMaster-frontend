export const calculateSum=(data)=> {
    const sumObject = {};

    data.forEach(item => {
      Object.keys(item).forEach(key => {
        if (!isNaN(parseInt(item[key], 10)) && !["Day", "Age", "Gender"].includes(key)) {
          sumObject[key] = (sumObject[key] || 0) + parseInt(item[key], 10);
        }
      });
    });
  
    return [sumObject];
  
  }
