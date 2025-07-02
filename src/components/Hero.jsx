

export default function Hero() {
    return ( 
        <>
        <section className="min-h-[90vh] mt-40 flex items-center justify-center">
          <div className="max-w-[1300px] mx-auto px-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
             <div className="text-left">
                <h1 className="bg-gradient-to-r from-[#074967] via-[#074967] to-[#42065b] bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 font-bold ">
                    Welcome To Our Website
                </h1>
                <h2 className=" bg-gradient-to-r from-[#8d2121] via-[#8d2121] to-[#ff7069] bg-clip-text text-transparent text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-8 font-semibold">
                    Our Reality Is Your Design
                </h2>
                <a className=" bg-[#8d2121] hover:bg-[#074967] text-white py-4 px-8 rounded-full text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold cursor-pointer no-underline inline-block transition-all duration-300 shadow-lg hover:transform hover:-translate-y-1 hover:shadow-xl">
                    Get Started
                </a>
             </div>
             <div className="text-right  w-full h-64 sm:h-80 md:h-96 lg:h-[32rem] xl:h-[36rem] object-cover">
                 <img src="/src/assets/undraw_digital-artwork_xlmm.svg" alt="creative design" />
             </div>
          </div>
        </section>
        </>
     );
}


