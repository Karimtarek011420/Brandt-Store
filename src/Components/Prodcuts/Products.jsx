import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import "./products.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { motion } from "framer-motion";

export default function Products() {
  const [Product, setProduct] = useState([]);
  const [fliter, setfliter] = useState(Product);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState("");
  const apiProducts = async () => {
    setloading(true);
    try {
      const { data } = await axios.get("https://fakestoreapi.com/products");
      setProduct(data);
      setfliter(data);
    } catch (error) {
      seterror(error);
    }
    setloading(false);
  };
  useEffect(() => {
    apiProducts();
  }, []);
  if (error) {
    toast.error("This is an error now!", {
      style: {
        backgroundColor: "green",
        color: "#fff",
      },
    });
  }
  const boxVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };
  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={250} />
          <Skeleton height={20} />
          <Skeleton height={20} />
          <Skeleton height={20} />
          <Skeleton height={20} />
        </div>
        <div className="col-md-3">
          <Skeleton height={250} />
          <Skeleton height={20} />
          <Skeleton height={20} />
          <Skeleton height={20} />
          <Skeleton height={20} />
        </div>
        <div className="col-md-3">
          <Skeleton height={250} />
          <Skeleton height={20} />
          <Skeleton height={20} />
          <Skeleton height={20} />
          <Skeleton height={20} />
        </div>
        <div className="col-md-3">
          <Skeleton height={250} />
          <Skeleton height={20} />
          <Skeleton height={20} />
          <Skeleton height={20} />
          <Skeleton height={20} />
        </div>
      </>
    );
  };
  const FliterData = (cat) => {
    const filteredProducts = Product.filter((item) => item.category === cat);
    setfliter(filteredProducts);
  };
  const ShowCard = () => {
    return (
      <>
        <div className="d-flex flex-wrap justify-content-center mb-lg-4 ">
          <div className="mx-2 my-1">
            <button
              type="button"
              className="btn btn-outline-dark"
              onClick={() => setfliter(Product)}
            >
              ALL
            </button>
          </div>
          <div className="mx-2 my-1">
            <button
              type="button"
              className="btn btn-outline-dark"
              onClick={() => {
                FliterData("men's clothing");
              }}
            >
              Men's Clothing
            </button>
          </div>
          <div className="mx-2 my-1">
            <button
              type="button"
              className="btn btn-outline-dark"
              onClick={() => {
                FliterData("women's clothing");
              }}
            >
              Women's Clothing
            </button>
          </div>
          <div className="mx-2 my-1">
            <button
              type="button"
              className="btn btn-outline-dark"
              onClick={() => FliterData("jewelery")}
            >
              Jewelery
            </button>
          </div>
          <div className="mx-2 my-1">
            <button
              type="button"
              className="btn btn-outline-dark"
              onClick={() => FliterData("electronics")}
            >
              Electronics
            </button>
          </div>
        </div>
        {fliter?.map((product) => (
          <div className=" col-md-3" key={product.id}>
            <motion.div
              variants={boxVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5 }}
            >
              <div className="card overflow-hidden shadow-lg">
                
                  <img
                    src={product.image}
                    className="card-img-top p-4"
                    alt={product.title}
                    height={"250px"}
                  />
                
                <div className="card-body">
                  <h5 className="card-title">
                    {product.title.split(" ").slice(0, 3).join(" ")}
                  </h5>
                  <div className=" d-flex justify-content-between">
                    <p className="card-text text-start mt-3">
                      ${product.price}
                    </p>
                    <div className=" d-flex  justify-content-center align-items-center">
                      <p className="card-text mt-3 me-2">
                        {product.rating.rate.toFixed(1)}
                      </p>
                      {[1, 2, 3, 4, 5].map((rate, ind) => (
                        <i
                          key={ind}
                          className={
                            ind < Math.round(product.rating.rate)
                              ? "fa-solid fa-star text-warning"
                              : "fa-regular fa-star"
                          }
                        ></i>
                      ))}
                    </div>
                  </div>
                  <p className="card-text">
                    {product.description.substring(0, 50)}.....
                  </p>
                  <Link  to={`/datils/${product.id}`} className="btn btn-outline-danger form-control">
                    Buy Now
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </>
    );
  };

  return (
    <>
      <div className=" container">
        <div className="row">
          <div className="col-md-12">
            <div className="py-4 text-center">
              <h1
                className=" display-3 fw-semibold"
                style={{ fontFamily: "Sour Gummy" }}
              >
                Latest Products
              </h1>
              <hr style={{ color: "#0B5ED7" }} className=" my-3" />{" "}
            </div>
          </div>
        </div>
        <div className="row justify-content-center gy-3">
          {loading ? <Loading /> : <ShowCard />}
        </div>
      </div>
    </>
  );
}
