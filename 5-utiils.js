// const _ =require('loadsh')
// const items=[1,[1,2,3,4]]
// const newItems=_.flattenDeep(items)
// console.log(newItems)


console.log("test")


// async function fetchData() {
//     try {
//       const response = await fetch('https://api.example.com/data');
//       if (!response.ok) {
//         throw new Error('Failed to fetch data');
//       }
      
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       console.error('Error:', error);
//       throw error;
//     }
//   }

const EventEmitter=require('events')

  
const customEmitter=new EventEmitter()
customEmitter.on('response')
