import { card } from "../styles/card.module.css";
export const Shoe = () => {
  return (
    <>
      <div className={card.container}>
        <div className={card.imgContainer}>
          <img className={card.img} src="
          " alt="" />
          <Img />
        </div>
        <div className={card.textContainer}>
          <p className={card.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt maxime
            obcaecati tempora! Esse nihil vero quaerat aut atque voluptatibus
            similique sequi deserunt ut fugit nostrum rerum, praesentium
            suscipit consectetur nesciunt sapiente, voluptatum dolorem
            consequuntur velit quos corporis temporibus obcaecati adipisci eius.
            Sapiente ea molestias repellendus cumque cum deserunt totam
            pariatur!
          </p>
        </div>
      </div>
    </>
  );
};

const Img = () => {
  return (
    <div>
      <img className={card.img} src="" alt="" />
    </div>
  );
};
