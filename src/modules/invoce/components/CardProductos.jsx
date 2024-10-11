import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReceipt, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import React from 'react'

export const CardProductos = () => {
    return (
        <>
            <div
                className="w-full max-w-md px-4 hover:bg-[#F5F5F5] 
                    trans-ease-out pb-2 mt-3  bg-gray-50 border border-gray-200 rounded-lg shadow">
                <div className="grid grid-cols-6 w-full">
                    <div className="pt-3 col-span-3">
                        <h1 className="text-zinc-950 font-bold text-base">Manzana <span className='ml-3'>$ 44</span></h1>
                    </div>
                    <div className="col-span-2 pt-3 flex justify-start">
                        <p className=" text-gray-500 font-semibold
                          text-end	 rounded-md  ">Cantidad:  <span className='ml-3'>4</span>
                        </p>
                    </div>
                    <div className='col-span-1 flex items-center justify-end pt-3'>
                        <button>
                            <span className="  text-primary  flex items-center justify-center bg-primary/10">
                                <FontAwesomeIcon className="text-red-400" style={{ fontSize: '1.6em' }} icon={faCircleXmark} aria-hidden="true" />
                            </span>
                        </button>
                    </div>
                </div>
            </div >

            <div
                className="w-full max-w-md px-4 hover:bg-[#F5F5F5] 
                    trans-ease-out pb-2 mt-3  bg-gray-50 border border-gray-200 rounded-lg shadow">
                <div className="grid grid-cols-6 w-full">
                    <div className="pt-3 col-span-3">
                        <h1 className="text-zinc-950 font-bold text-base">Mandarina <span className='ml-3'>$ 44</span></h1>
                    </div>
                    <div className="col-span-2 pt-3 flex justify-start">
                        <p className=" text-base text-gray-500 font-semibold 
                          text-end	 rounded-md  ">Cantidad:  <span className='ml-3'>4</span>
                        </p>
                    </div>
                    <div className='col-span-1 flex items-center justify-end pt-3'>
                        <button>
                            <span className="  text-primary  flex items-center justify-center bg-primary/10">
                                <FontAwesomeIcon className="text-red-400" style={{ fontSize: '1.6em' }} icon={faCircleXmark} aria-hidden="true" />
                            </span>
                        </button>
                    </div>
                </div>
            </div >
            <div
                className="w-full max-w-md px-4 hover:bg-[#F5F5F5] 
                    trans-ease-out pb-2 mt-3  bg-gray-50 border border-gray-200 rounded-lg shadow">
                <div className="grid grid-cols-6 w-full">
                    <div className="pt-3 col-span-3">
                        <h1 className="text-zinc-950 font-bold text-base">Pera <span className='ml-3'>$ 44</span></h1>
                    </div>
                    <div className="col-span-2 pt-3 flex justify-start">
                        <p className=" text-base  text-gray-500 font-semibold
                          text-end	 rounded-md  ">Cantidad:  <span className='ml-3'>4</span>
                        </p>
                    </div>
                    <div className='col-span-1 flex items-center justify-end pt-3'>
                        <button>
                            <span className="  text-primary  flex items-center justify-center bg-primary/10">
                                <FontAwesomeIcon className="text-red-400" style={{ fontSize: '1.6em' }} icon={faCircleXmark} aria-hidden="true" />
                            </span>
                        </button>
                    </div>
                </div>
            </div >
        </>
    )

}
