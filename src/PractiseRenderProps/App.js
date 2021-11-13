import React from 'react'
import ClickCounter from './ClickCounter'
import HoverCounter from './HoverCounter'
import Counter from './Counter'
function App() {
    return (
        <div>
            <h3> Its Pratices Render Props </h3>
            {/* <ClickCounter />
            <HoverCounter /> */}
            <Counter yogi={(count, increment) =>

                <ClickCounter
                    count={count} increment={increment}>
                    {console.log(count)}
                </ClickCounter>} />

            <Counter yogi={(count, increment) => <HoverCounter

                count={count} increment={increment}>

            </HoverCounter>} />
        </div>
    )
}

export default App
