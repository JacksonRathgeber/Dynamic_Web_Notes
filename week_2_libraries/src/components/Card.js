import "./RecipeCard.css";

const Card = (props) => {
    const {children} = props;
    // ^^^ children is a built-in prop
    return (
    <div className="card">
        {children}
    </div>
  );
};

export default Card;
