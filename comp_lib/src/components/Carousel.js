const Carousel = (props) => {
    return (
        <>
        <div className = "w-full flex flex-row justify-center items-center gap-20 p-20">
            {props.items.map((item, index) => (
                <div key={index}>
                    <img className="w-40" src={item} alt={`Puppy`} />
                </div>
            ))}
        </div>
        </>
    );
}

export default Carousel;