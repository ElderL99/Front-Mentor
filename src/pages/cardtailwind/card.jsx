import Songsvg from '../../assets/images/icon-music.svg'
import firstimage from '../../src/assets/images/illustration-hero.svg'
import Firstimg from '../../assets/images/illustration-hero.svg'
export default function card() {
    return (
        <div className='main min-h-screen flex items-center justify-center bg-blue-50 p-10'>

            <div className='bg-white rounded-2xl shadow-md max-w-sm w-full overflow-hidden ' id="card ">
                <img className='rounded-t-2xl w-full' src={firstimage} alt='ilustration' />
                <img className='rounded-t-2xl w-full' src={Firstimg} alt='ilustration' />
                <div className="main-section grid justify-center gap-8 bg-white p-6 rounded-2xl max-w-sm w-full shadow-md">

                    {/* Título y descripción */}
                    <div className="text-center grid gap-4">
                        <h1 className="font-semibold text-2xl text-neutral-900">Order Summary</h1>
                        <p className="text-gray-500">
                            You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!
                        </p>
                    </div>

                    {/* Bloque del plan */}
                    <div className="flex justify-between items-center bg-blue-50 p-4 rounded-lg">
                        <div className="flex items-center gap-4">
                            <img src={Songsvg} alt="icon" />
                            <div>
                                <p className="font-semibold text-neutral-800">Annual Plan</p>
                                <p className="text-gray-500">$59.99/year</p>
                            </div>
                        </div>
                        <p className="text-violet-600 font-bold underline hover:cursor-pointer hover:no-underline">Change</p>
                    </div>

                    {/* Botones */}
                    <div className="grid gap-4">
                        <button className="bg-[hsl(245,75%,52%)] text-white font-semibold px-4 py-3 rounded-lg hover:bg-[hsl(245,75%,60%)] transition-colors">
                            Proceed to Payment
                        </button>
                        <button className="bg-white text-gray-600 borderpx-4 py-2 rounded-lg hover:bg-blue-100 transition-colors">
                            Cancel Order
                        </button>
                    </div>
                </div>

            </div>

        </div>
    )
}
