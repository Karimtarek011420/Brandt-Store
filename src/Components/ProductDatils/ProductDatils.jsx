import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { motion } from "framer-motion";
import { addCart } from "../../Redux/actions";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

export default function ProductDatils() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const Addproduct = (product) => {
    dispatch(addCart(product));
    toast.success("The product has been added successfully",{
      style:{
        backgroundColor:'white',
        color:'black',
        position: 'top-right',
      }
    })
  };

  const datilsApi = async () => {
    const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return data;
  };
  const { data, isLoading } = useQuery({
    queryKey: ["product", id],
    queryFn: datilsApi,
  });
  const Loading = () => {
    return (
      <>
        <div className=" col-md-6">
          <Skeleton height={400} />
        </div>
        <div className=" col-md-6">
          <Skeleton height={50} count={5} />
        </div>
      </>
    );
  };
  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6 text-center">
          <img
            src={data.image}
            alt="product"
            className="img-fluid shadow-lg"
            width={400}
            height={400}
          />
        </div>
        <div className=" col-md-6">
          <motion.div
            variants={boxVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1.5 }}
          >
            <h2 className="text-center">{data.title}</h2>
            <h4 className="text-center">{data.category}</h4>
            <p className="text-center">{data.description}</p>
            <div className=" d-flex justify-content-between">
              <h4 className="text-center">Price: ${data.price}</h4>
              <div>
                <span className="text-center mx-1">{data.rating.rate}</span>
                {[1, 2, 3, 4, 5].map((rate, ind) => (
                  <i
                    key={ind}
                    className={
                      ind < Math.round(data.rating.rate)
                        ? "fa-solid fa-star text-warning"
                        : "fa-regular fa-star"
                    }
                  ></i>
                ))}
              </div>
            </div>
            <div className=" mb-2">
              <button
                type="button"
                className="btn btn-outline-danger form-control"
                onClick={() => {
                  Addproduct(data);
                }}
              >
                Add Cart +
              </button>
            </div>
            <Link to="/cart">
              <button
                type="button"
                className="btn btn-outline-danger form-control"
              >
                Get Cart{" "}
              </button>
            </Link>
          </motion.div>
        </div>
      </>
    );
  };
  const boxVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };
  return (
    <>
      <div className="container py-5 ">
        <div className="row gy-4">
          {isLoading ? <Loading /> : <ShowProduct />}
        </div>
        <hr />
      </div>
    </>
  );
}
