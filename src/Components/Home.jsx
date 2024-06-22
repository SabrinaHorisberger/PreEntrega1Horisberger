import './Item.css';

const Home = () => {


  return (
    <>
      <h1 className="welcome">Welcome to Osaka store!</h1>
     

      <div className="item-lists">
        <h2 className='stayTuned'> 
          Japanese cuisine has inspired various US food trends. There are many popular ingredients used in Asian recipes that show up in American markets. To fulfill the needs, Osaka was built. <br />
          We facilitate the customers with the Osaka online shopping. <br /> It has many beneficial features for all customers. <br /> You can buy any products online and pick them up at the nearby Osaka's store. We also provide a delivery service to make the purchasing process easier. </h2>
        <img className= "japan-img"src="/products/japan.jpeg" alt="" />
      </div>
    </>
  );
};

export default Home;
