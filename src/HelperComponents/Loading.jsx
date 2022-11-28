import React from 'react'
import Spinner from 'react-bootstrap/Spinner';

export default function Loading() {
  return (
    <div className="loadingSpinner d-flex align-items-center py-auto my-auto" style={{height:'90vh'}}>
        <Spinner className='d-flex m-auto' animation="border" role="status" style={{margin:'50%'}}>
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    </div>
  )
}
