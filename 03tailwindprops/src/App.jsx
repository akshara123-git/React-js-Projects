
import './App.css'
import Card from './components/Card'

function App() {
  //const [count, setCount] = useState(0)
  //let myObj={
    //username: "Akshara",
    //age: 22
  //}
  //let newArr=[1,2,3,4,5]
  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
    <Card username="React code" btnText="Click me"/>

    </>
  )
}

export default App
