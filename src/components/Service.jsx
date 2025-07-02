export default function Service() {
    return ( 
    <>
      <section className="bg-[#f8f9fa] py-[100px]">
        <div className="mx-auto px-[50px] max-w-[1300px]">
          <h1 className="text-center font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 bg-gradient-to-r from-[#074967] to-[#8d2121] bg-clip-text text-transparent">
            Here Is What We Got!
          </h1>
          <div 
          // style={{gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))'}} 
          className="  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
           <div className=" p-3 sm:p-4 lg:p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadowtransition-all duration-300 ease-in-out mt-5 relative h-[300px]">
              <div className="p-6 h-full flex flex-col justify-center relative z-2">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 text-[#074967] transition-colors duration-300 ease-in-out">
                    Graphic Design
                </h3>
                <p className="leading-relaxed text-[#666] mb-6 transition-colors duration-300 ease-in-out">
                  You Imagine, We Create. Professional graphic design services tailored to your vision.  
                </p>
                <button className="bg-gradient-button text-white py-4 px-8 border-none rounded-full font-bold cursor-pointer transition-all duration-300 shadow-lg hover:transform hover:-translate-y-1 hover:shadow-xl hover:bg-white hover:text-[#074967]">
                    Get Started
                </button>
              </div>
           </div>
            <div className=" p-3 sm:p-4 lg:p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadowtransition-all duration-300 ease-in-out mt-5 relative h-[300px]">
              <div className="p-6 h-full flex flex-col justify-center relative z-2">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 text-[#074967] transition-colors duration-300 ease-in-out">
                    Graphic Design
                </h3>
                <p className="leading-relaxed text-[#666] mb-6 transition-colors duration-300 ease-in-out">
                  You Imagine, We Create. Professional graphic design services tailored to your vision.  
                </p>
                <button className="bg-gradient-button text-white py-4 px-8 border-none rounded-full font-bold cursor-pointer transition-all duration-300 shadow-lg hover:transform hover:-translate-y-1 hover:shadow-xl hover:bg-white hover:text-[#074967]">
                    Get Started
                </button>
              </div>
           </div>
           </div>
        </div>
     </section>
    </>
     );
}

