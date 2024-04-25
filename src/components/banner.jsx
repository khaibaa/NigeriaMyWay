import React from 'react';

function NewAfrikaShrine() {
  return (
    <div className="new-afrika-shrine bg-gradient-to-r from-black to-transparent relative rounded-xl">
      <div
        className="text-white p-10 bg-no-repeat bg-cover bg-right-bottom rounded-xl"
        style={{
          backgroundImage: `url('https://i.pinimg.com/564x/ab/15/3a/ab153a8e53f7403c8e0d2691c3b57434.jpg')`,
          backgroundSize: 'cover', 
        }}
      >
        <h1 className="text-4xl font-bold mb-4">Discover New Afrika Shrine</h1>
        <p className="mb-8">Explore the rich culture of the Fela Shrine</p>
        <button className="bg-white hover:bg-[#588157] text-black font-bold py-2 px-4 rounded">
          Discover
        </button>
      </div>
      <div className='w-16 h-16 bg-[#DAD7CD] rounded-full absolute top-20 -ml-7 left-0'> </div>
      <div className='w-16 h-16 bg-[#DAD7CD] rounded-full absolute top-20 -mr-7 right-0'> </div>
    </div>
  );
}

export default NewAfrikaShrine;
