export default function ProjectCard( {image, title, comment, tag1, tag2, tag3, link} ) {

    var div;

    const handleMove = (e) => {
        let x = e.clientX - div.left;
        let y = e.clientY - div.top;

        document.documentElement.style.setProperty("--mouse-x", `${x}px`);
        document.documentElement.style.setProperty("--mouse-y", `${y}px`);
    }

    return (
        <div className='card flex-center flex-col glassy' onMouseMove={handleMove} ref={(el) => {
            if (!el) return;
            div = el.getBoundingClientRect();
        }}>
            <a href={link} className="z-10">
                <img className='w-full h-[200px] rounded-xl hover:shadow-lg hover:shadow-purple-600 transition-all' src={image} alt='' />
            </a>

            <div className='w-full h-[70px] flex justify-start items-center'>
                <h1 className='text-[35px] ibm-f font-bold text-sBlue'>{title}</h1>
            </div>

            <div className='w-full h-[100px] text-[20px] ibm-f text-[#a5a5a5]'>
                <p>{comment}</p>
            </div>

            <div className='w-full h-[30px] flex justify-start items-end text-[17px] ibm-f text-[#cb4bee]'>
                <p>
                <span className="text-blue-700">{tag1}</span>
                <span className="text-sky-500"> {tag2}</span>
                <span className="text-orange-600"> {tag3}</span>
                </p>
            </div>
        </div>
    )
}
