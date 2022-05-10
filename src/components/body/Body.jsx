import React from 'react'
import homero from '../../assets/images/homero.png'
import gitHub from '../../assets/images/gitHub.png'
import familia from '../../assets/images/familia.png'

export const Body = () => {
  return (
    <>
        <div className='flex-col bg-cyan-200 min-h-screen w-full py-8 text-center'>
            <div className='pt-6'>
                <img src={ homero } alt="" />
            </div>
            <div className='h-1 bg-black mx-6'></div>

            <div className='flex-col text-center my-4'>
                <div className='bg-yellow-200 mx-20 sm:mx-32 sm:hidden my-2 p-2 rounded-lg'>
                    <button className = 'w-full h-full text-lg' type="button">About Me</button>
                </div>
                <div className='bg-yellow-200 mx-20 my-2 p-2 rounded-lg'>
                    <button className = 'w-full h-full text-lg' type="button">BriefCase</button>
                </div>
                <div className='bg-yellow-200 mx-20 my-2 p-2 rounded-lg'>
                    <button className = 'w-full h-full text-lg' type="button">Projects</button>
                </div>
            </div>

            <div className='h-1 bg-black mx-6'></div>

            <div className = 'flex justify-center py-4'>
                <a href="https://github.com/dicoaa/ReactTailWind.git"><img className='w-48 h-48' src={ gitHub } alt="" /></a>
            </div>

            <div className='h-1 bg-black mx-6'></div>

            <div className = 'flex justify-center py-4'>
                <img className='w-48 h-48' src={ familia } alt="" />
            </div>

            <div className='h-1 bg-black mx-6'></div>

            <div className='py-2'>Desarrollador - Alex Diaz</div>
        </div>
    </>
  )
}

