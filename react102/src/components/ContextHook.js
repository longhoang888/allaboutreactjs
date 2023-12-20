import React, {useContext} from 'react'

const MyContext = React.createContext()

function ChildComponent(){
    const value = useContext(MyContext);
    return <p>{value}</p>
}

function ContextHook() {
  return (
    <div>
      <MyContext.Provider value="Hello Long">
        <ChildComponent></ChildComponent>
      </MyContext.Provider>
    </div>
  )
}

export default ContextHook
