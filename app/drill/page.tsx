'use client';

import Image from 'next/image';

export default function Home() {
    return (
        <main className='flex flex-col items-center min-h-screen bg-gray-900 text-white pb-12'>
            {/* Hero Section */}
            <section className='w-full max-w-4xl p-8 text-center bg-gray-800 rounded-lg'>
                <Image 
                    src="/profile.jpeg"
                    alt='Profile Pic'
                    width={120}
                    height={120}
                    className='rounded-full mx-auto'
                />
                <h1 className='mt-4 text-2xl font-bold'>Lucky Nkolonzi</h1>
                <p className='-mt-1 text-gray-400'>Web Developer & UX/UI Designer</p>
                <p className='mt-2 text-gray-300'>Lucky is a valuable asset in any team due to his flexibility. He is focused and always willing to help where needed.</p>
                <button className='mt-4 px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-500'>View My Work</button>
            </section>

            {/* Latest Work Section */}
            <section className=' max-w-4xl mt-12 text-center'>
                <h2 className='text-xl font-semibold'>Latest Work</h2>
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4'>
                    {[1,2,3].map((item) => (
                        <div key={item} className='p-4 bg-gray-800 rounded-lg' >
                            <div className='w-full h-32 bg-gray-700 rounded-lg'></div>
                            <h3 className='mt-2 text-lg font-bold'>The Cake Angel</h3>
                            <p className='text-gray-400 text-sm'>A web app project that allows users to pick a cake design, the delivery date and the location of delivery.</p>
                            <button className='mt-2 px-4 py-1 bg-blue-600 rounded-lg hover:bg-blue-500'>View More</button>

                        </div>
                    )
                    )}

                </div>
            </section>

            {/* Contact Section */}
            <section className=' w-full max-w-4xl mt-12 p-6 bg-gray-800 rounded-lg'>
                <h2 className='text-xl font-semibold text-center'> Let's Connect</h2>
                <form className='mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4'>
                    <input type='text' placeholder='Name' className='p-2 bg-gray-700 rounded' />
                    <input type='email' placeholder='Email' className='p-2 bg-gray-700 rounded'/>
                    <textarea placeholder='Message' className='p-2 bg-gray-700 rounded col-span-2'></textarea>
                    <button className='col-span-2 px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-500'>Submit</button>
                </form>
            </section>

        </main>
    )
}