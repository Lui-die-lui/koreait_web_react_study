import './App.css'
import BasicJsx from './components/BasicJsx/BasicJsx'
import BasicProps from './components/BasicProps/BasicProps'
// 자동으로 하나의 태그로 가져와줌 - export 했기 때문
import BasicReact from './components/BasicReact/BasicReact'
import Calculator from './components/BasicState/CountState/Calculator/Calculator'
import CountState from './components/BasicState/CountState/CountState'

function App() {
 
// 객체 형태
  return (
    <>
    {/*<BasicReact/>*/}
    {/* <BasicJsx/> */}
    {/* <BasicProps /> */}
    {/* <CountState/> */}
    <Calculator/>
    </>
  )
}

export default App
