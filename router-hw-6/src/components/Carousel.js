import {useState} from 'react'

const Carousel = ({items}) => {

    const [cycle_position, setCyclePosition] = useState(0)

    const handleClick = () => {
        var first = items.shift();
        items.push(first);

        var new_pos = cycle_position + 1;
        if (new_pos >= items.length) {
            new_pos = 0;
        }
        setCyclePosition(new_pos);
    };

    return (
        <>
        <div className = "w-full flex flex-col gap-5 m-5 p-5 bg-gray-200 rounded-md justify-center items-center">
            <div className = "w-full flex flex-row justify-center items-center gap-10 cursor-pointer"
            onClick={handleClick}>
                {items.map((item, index) => (
                    <div key={index}>
                        <img className="w-40 rounded-md" src={item} alt={`Carousel image`} />
                    </div>
                ))}
            </div>
            <div className='text-lg font-semibold'>^^^ Click Them! ^^^</div>
        </div>
        </>
    );
}

export default Carousel;