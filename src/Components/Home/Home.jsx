import bg from "../../assets/images/6.jpg";
import Card from "react-bootstrap/Card";
import Products from "../Prodcuts/Products";
import { motion } from "framer-motion";
import "./Home.css";

export default function Home() {
  const boxVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <>
      {/* Hero Section */}
      <Card className=" text-white border-0 p-0 m-0 shadow-lg home-card">
        <Card.Img src={bg} alt="Card image" />
        <motion.div
          variants={boxVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8 }}
        >
          <Card.ImgOverlay className="card-img-overlay">
            <Card.Title className="home-title fs-2">
              NEW SEASON ARRIVALS
            </Card.Title>
            <Card.Text className="home-text fs-3">
              Discover the latest trends and refresh your style with our new
              collection.
            </Card.Text>
          </Card.ImgOverlay>
        </motion.div>
      </Card>

      {/* Products Section */}
      <div>
        <Products />
      </div>
    </>
  );
}
