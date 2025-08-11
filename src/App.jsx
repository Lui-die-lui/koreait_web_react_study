import './App.css'
import BasicJsx from './components/BasicJsx/BasicJsx'
import BasicProps from './components/BasicProps/BasicProps'
// 자동으로 하나의 태그로 가져와줌 - export 했기 때문
import BasicReact from './components/BasicReact/BasicReact'
import Calculator from './components/BasicState/CountState/Calculator/Calculator'
import CountState from './components/BasicState/CountState/CountState'
import InputState1 from './components/BasicState/InputState1/InputState1'
import InputState2 from './components/BasicState/InputState2/InputState2'
import InputState3 from './components/BasicState/InputState3/InputState3'
import InputState4 from './components/BasicState/InputState4/InputState4'
import DomRef from './components/DomRef/DomRef'
import LifeCycle from './components/LifeCycle/LifeCycle'
import LifeCycleApp from './components/LifeCycle/LifeCycleApp'
import Render from './components/LifeCycle/Render'

function App() {
 
// 객체 형태
  return (
    <>
    {/*<BasicReact/>*/}
    {/* <BasicJsx/> */}
    {/* <BasicProps /> */}
    {/* <CountState/> */}
    {/* <Calculator/> */}
    {/* <InputState2/> */}
    {/* <InputState3 /> */}
    {/* <InputState4/> */}
    {/* <DomRef /> */}
    {/* <Render /> */}
    {/* <LifeCycle /> */}
    <LifeCycleApp />
    </>
  )
}

export default App
