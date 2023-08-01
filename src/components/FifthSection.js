import { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import Second3D from './Second3D';
import emailjs from '@emailjs/browser';

export default function FifthSection() {

    var form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_v60ic3o", "template_d2soahr", form.current, "rxDkNPjpWiSrlDr1H")
        .then((result) => {
            console.log("hurray");
        }, (error) => {
            console.log(error.text);
        });

    }

    return (
        <section className='w-full h-[700px] flex-center relative'>
            <form onSubmit={handleSubmit} ref={form}
            className='w-[450px] h-[650px] bg-[#16122d] rounded-xl ibm-f text-[#e7e7e7]
            flex flex-col px-8 justify-center items-start glassy-two
            '>
                <h1 className="text-[60px] font-bold">Contact</h1>

                <label>Your Name</label>
                <input type='text' placeholder="What's your name?" name='name' className='inpt' />

                <label>Your Email</label>
                <input type='email' placeholder="What's your e-mail?" name='email' className='inpt' />

                <label>Your Message</label>
                <textarea placeholder="What's up?" name='message' className='inpt textinpt' />

                <button type='submit' className='btn shadow-lg'>Send</button>
            </form>

            <div className="w-full h-full absolute top-0 right-0 -z-10">
                <Canvas shadows orthographic camera={{position: [0, 0, 10], zoom: 50}}>
                    <Second3D />
                </Canvas>
            </div>
        </section>
    )
}
