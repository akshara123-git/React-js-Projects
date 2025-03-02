import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return (
        <div>
            <h1>Custom App!</h1>
        </div>
    )
}

//const reactElement={
//    type: 'a',
//    props: {
//        href: 'https://google.com',
//        target: '_blank'
//    },
//    childern: 'Click me to visit google'
//}

const anotherElement=(
    <a href="https://google.com" target='_blank'>Visit Google</a>
)

//const anotherUser="Chai aur React"

const reactElement=React.createElement(
    'a',
    {href: 'https://google.com',target: '_blank'},
    'Click me to visit Google',
    //anotherUser
)

ReactDom.createRoot(document.getElementById('root')).render(
  //reactElement
  <App/>
)
