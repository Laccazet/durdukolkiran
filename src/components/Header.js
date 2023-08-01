

export default function Header() {

  const contactFunc = () => {
    document.body.scrollTop = 10000; // For Safari
    document.documentElement.scrollTop = 10000; // For Chrome, Firefox, IE and Opera
  }

  return (
    <div className="w-full h-20 bg-[#16122d] py-3 px-20">
        <div className="w-full h-full flex justify-between items-center">
            <h1 className="text-[25px] ibm-f font-bold text-[#ffffffd0]">DurduK<span className="text-sBlue">/Portfolio</span></h1>
            <p className="text-[25px] ibm-f font-light text-sBlue cursor-pointer" onClick={contactFunc}>Contact</p>
        </div>
    </div>
  )
}
