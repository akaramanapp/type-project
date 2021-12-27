import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';


const URL = "https://jsonplaceholder.typicode.com/todos";
interface Posts {
  userId: String;
  id: Number;
  title: String;
  complated: boolean;
}

function App() {
  const [postData, setPostData] = useState<Posts[]>([])
  useEffect(() => {
   async function getData(){
     const response = await axios.get<Posts[]>(URL)
     console.log(response.data)
     setPostData(response.data)
   }

   console.log(process.env.API_KEY);
   getData()
  }, [])


  return (
    <div className="App">
      <div>
      {
        postData.map(item => {
          return <p>{item.title}</p>
        })
      }
      </div>
    </div>
  );
}

export default App;
