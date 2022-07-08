import React from 'react'
import { Routes as ReactRoutes, Route, Navigate } from 'react-router-dom'
import Results from './Results'

const Routes = () => {
  return (
    <div className='p-4'>
        <ReactRoutes>
            <Route path="/" element={<Navigate to="/search"/>} />
            {['/search', '/images', '/news', '/videos'].map((item, index) => (
                <Route key={index} path={item} element={<Results />} />
            ))}
        </ReactRoutes>
    </div>
  )
}

export default Routes