import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Router1 from './RouterStudy/Router1/Router1'
import Effect1 from './study/components/Effect/Effect1/Effect1'
import Effect2 from './study/components/Effect/Effect2/Effect2'
import Emotion from './study/components/Emotion/Emotion'
import Emotion2 from './study/components/Emotion/Emotion2'
import HelloJsx from './study/components/HelloJsx/HelloJsx'
import HelloProps from './study/components/HelloProps/HelloProps'
import HelloReact from './study/components/HelloReact/HelloReact'
import DomRef from './study/components/Ref/DomRef.jsx/DomRef'
import Calculator from './study/components/State/Calculator/Calculator'
import CountState from './study/components/State/CountState/CountState'
import InputState1 from './study/components/State/InputState1/InputState1'
import InputState2 from './study/components/State/InputState2/InputState2'
import InputState3 from './study/components/State/InputState3.jsx/InputState3'
import InputState4 from './study/components/State/InputState4/InputState4'
import Index from './TodoList/Index'
import Router2 from './RouterStudy/Router2/Router2'
import Router3 from './RouterStudy/Router3/Router3'
import Router4 from './RouterStudy/Router4/Router4'
import Home from './RouterStudy/Auth/Home/Home'
import Signin from './RouterStudy/Auth/Signin/Signin'
import Signup from './RouterStudy/Auth/Signup/Signup'
import Mypage from './RouterStudy/Auth/Mypage/Mypage'
import MainRouter from './RouterStudy/Auth/Routers/MainRouter'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import MainRouterReactQuery from './RouterStudy/Auth/Routers/MainRouterReactQuery'

function App() {
  {/* npm run dev */}

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        // refetchOnWindowFocus: false,
        // retry: 3,                // 서버에 요청을 보냈을 때 응답이 없으면 설정한 값 만큼 실행 (3번이 기본값)
        // staleTime: 1000 * 60,    // 캐시 만료 시간
        // gcTime: 1000 * 600,      // 설정한 시간동안 동작이 없으면 캐시 삭제
        // enabled: false,          // 쿼리가 자동실행되는걸 통제함(true가 기본값)
        staleTime: 1000 * 60,
        retry: 0,   //
      }
    }
  });

  return <BrowserRouter>
    {/* <HelloReact /> */}
    {/* <HelloJsx /> */}
    {/* <HelloProps /> */}
    {/* {<CountState />} */}
    {/* {<Calculator />} */}
    {/* {<InputState1 />} */}
    {/* {<InputState2 />} */}
    {/* {<InputState3 />} */}
    {/* {<InputState4 />} */}
    {/* {<DomRef />} */}
    {/* {<Effect1 />}   */}
    {/* {<Effect2 />}   */}
    {/* {<Emotion />} */}
    {/* {<Emotion2 />} */}
    {/* {<Index />} */}
    {/* {<Router1 />} */}
    {/* {<Router2 />} */}
    {/* {<Router3 />} */}
    {/* <MainRouter /> */}
    <QueryClientProvider client={queryClient}>
      <MainRouterReactQuery />
    </QueryClientProvider>
    
  </BrowserRouter>
}

export default App
