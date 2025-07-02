
export default function Footer() {
    return (  
    <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"></link>
     <footer className="bg-[#141414] text-white pt-[60px] px-0 pb-5">
       <div className=" max-w-[1300px] mx-auto px-[50px]">
           <div className=" hover:text-white grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-12 mb-12"> 
                <div>
                    <h3 className="text-2xl mb-4">About Us</h3>
                    <p className="text-[#ccc] leading-relaxed mb-2 no-underline">Seedy Enterprises is your trusted partner for creative solutions and reliable services.</p>
                    <p className="text-[#ccc] leading-relaxed mb-2 no-underline">We transform your ideas into reality with professional excellence.</p>
                </div>
                <div >
                    <h3 className="text-2xl mb-4">Services</h3>
                    <p className="text-[#ccc] leading-relaxed mb-2 no-underline">Graphic Design</p>
                    <p className="text-[#ccc] leading-relaxed mb-2 no-underline">Supply Chain Management</p>
                    <p className="text-[#ccc] leading-relaxed mb-2 no-underline">Creative Consulting</p>
                </div>
                <div>
                    <h3  className="text-2xl mb-4">Contact</h3>
                    <p className="text-[#ccc] leading-relaxed mb-2 no-underline">Email: info@seedyenterprises.com</p>
                    <p className="text-[#ccc] leading-relaxed mb-2 no-underline">Phone: +1 (555) 123-4567</p>
                    <p className="text-[#ccc] leading-relaxed mb-2 no-underline">Address: 123 Business St, City, State</p>
                </div>
                <div>
                    <h3 className="text-2xl mb-4">Follow Us</h3>
                    <div className="flex gap-4">
                        <a href="#" className="text-white text-2xl transition-all duration-300 ease-in-out hover:text-[#8d2121] hover:translate-y-1"><i class="fab fa-facebook"></i></a>
                        <a href="#" className="text-white text-2xl transition-all duration-300 ease-in-out hover:text-[#8d2121] hover:translate-y-1"><i class="fab fa-instagram"></i></a>
                        <a href="#" className="text-white text-2xl transition-all duration-300 ease-in-out hover:text-[#8d2121] hover:translate-y-1"><i class="fab fa-twitter"></i></a>
                        <a href="#" className="text-white text-2xl transition-all duration-300 ease-in-out hover:text-[#8d2121] hover:translate-y-1"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>
                </div>
                <div className="border-t border-gray-700 pt-8 flex justify-between items-center flex-wrap">
                <a href="#"  className="text-2xl font-bold text-white no-underline">
                    <i class="fas fa-gem"></i>
                    SEEDY ENTERPRISES
                </a>
                <p class="copyright">&copy; 2024 Seedy Enterprises. All rights reserved.</p>
            </div>
        </div>
       </footer>
    </>
    );
}

   
                
     