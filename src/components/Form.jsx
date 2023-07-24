import React, { useState, useRef } from 'react'
import { Card } from 'primereact/card'
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext';
import { Toast } from 'primereact/toast';

const Form = () => {

  let [state, setState] = useState('')


  let toast = useRef('null') // Remove the quotes around all

  let greet = (e) => {
    e.preventDefault();
    toast.current.show({
      severity: 'success',
      summary: 'Success Message',
      detail: state   // Pass the state variable directly
    });
    setState('')
  }

  return (
    <div className="grid">
      <div className="col-4">
        <Card title='Say Hi' className='m-4'>
          <form action="">
            {/* <pre>{state}</pre> */}
            <InputText
              value={state}
              onChange={(e) => setState(e.target.value)}
              placeholder='Message' />
            <Button
              onClick={greet}
              label="Send" severity="success" className='ml-1' />
          </form>
        </Card>
        <Toast ref={toast} />
      </div>
    </div>
  )
}


export default Form;