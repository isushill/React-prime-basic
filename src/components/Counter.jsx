import React, { useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button'


let Counter = () => {

  let [count, setCount] = useState(0)

  return (
    <div className='grid'>
      <div className="col-4">
        <Card title="Counter" subTitle={count}>
          <Button
            className='p-button-success mr-2'
            label='Increment'
            onClick={() => setCount(count + 1)}
          ></Button>
          <Button
            className='p-button-danger'
            label='Decrement'
            onClick={() => setCount(count - 1 >= 0 ? count - 1 : 0)}
          ></Button>
        </Card>
      </div>
    </div>
  )
}

export default Counter;