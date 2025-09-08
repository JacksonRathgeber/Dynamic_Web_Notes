const WavesDisplay = (props) => {
    const {waves} = props;
    return (
        <>
            <h2>Enemy Waves</h2>
            <ol className="waves">
                {waves.map((wave, index) => (
                    <li key={index}>{wave}</li>
                ))}
            </ol>
        </>
    )
}

export default WavesDisplay;