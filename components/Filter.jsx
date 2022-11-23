import {useEffect} from 'react'
import React from 'react'
function Filter({filter}) {
    return(
        <div className='text-sm text-indigo-600'>
            <button className='mr-3' onClick={() => filter('All')}>&#123;All&#125;</button>
            <button type='button' className='mr-3 active:bg-indigo-600 active:text-white' onClick={() => filter('Frontend')}>&#123;Frontend&#125;</button>
            <button className='mr-3' onClick={() => filter('Backend')}>&#123;Backend&#125;</button>
            <button className='mr-3' onClick={() => filter('Database')}>&#123;Database&#125;</button>
            <button className='mr-3' onClick={() => filter('Data Analysis')}>&#123;Data Analysis&#125;</button>
            <button className='mr-3' onClick={() => filter('Languages')}>&#123;Languages&#125;</button>
            <button className='mr- mt-3' onClick={() => filter('Tools')}>&#123;Tools&#125;</button>
        </div>
    )
}

export default Filter