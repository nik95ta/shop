import React, { ChangeEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Modal from "../../components/Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  editProduct,
  fetchProduct,
} from "../../features/product/productSlice";
import { AppDispatch, RootState } from "../../store/store";
import Header from "../../components/Header";

interface Product {
  id: number;
  title: string;
  image: string;
  description: string;
  price: number;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
}

const ProductDetailPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const currentProduct = useSelector(
    (state: RootState) => state.product.current,
  );
  const [editedTitle, setEditedTitle] = useState("");
  const [editedDescription, setEditedDescription] = useState("");
  const [editedPrice, setEditedPrice] = useState(0);
  const [editedProduct, setEditedProduct] = useState<Product | null>(null);

  const fetchProductDetails = async () => {
    try {
      if (id) {
        dispatch(fetchProduct(Number(id)) as any);
      }
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  useEffect(() => {
    fetchProductDetails();
  }, [id]);

  const openModal = () => {
    setIsModalOpen(true);
    // Set edited values with the current product details
    setEditedTitle(currentProduct?.title || "");
    setEditedDescription(currentProduct?.description || "");
    setEditedPrice(currentProduct?.price || 0);
    setEditedProduct(currentProduct);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditedTitle("");
    setEditedDescription("");
    setEditedPrice(0);
  };

  const handleEdit = async () => {
    try {
      if (editedProduct && id) {
        const response = await fetch(
          `https://fakestoreapi.com/products/${id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(editedProduct),
          },
        );

        if (response.ok) {
          console.log("Product edited successfully");
          const updatedProduct = await response.json();
          dispatch(editProduct(updatedProduct));
          closeModal();
        } else {
          console.error("Failed to edit product");
        }
      }
    } catch (error) {
      console.error("Error editing product:", error);
    }
  };

  const handleDelete = async () => {
    try {
      if (id) {
        const response = await fetch(
          `https://fakestoreapi.com/products/${id}`,
          {
            method: "DELETE",
          },
        );

        if (response.ok) {
          console.log("Product deleted successfully");
          dispatch(deleteProduct(Number(id)));
          router.push("/");
        } else {
          console.error("Failed to delete product");
        }
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    if (name === "title") {
      setEditedTitle(value);
    } else if (name === "description") {
      setEditedDescription(value);
    } else if (name === "price") {
      setEditedPrice(Number(value));
    }

    setEditedProduct((prevProduct) => {
      if (prevProduct) {
        return {
          ...prevProduct,
          [name]: name === "price" ? Number(value) : value,
        };
      }
      return prevProduct;
    });
  };

  if (!currentProduct) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <div className="bg-gray-100 pt-10" style={{ height: "100vh" }}>
        <div className="flex justify-center">
          <div className="rounded-large flex flex-row-reverse w-5/6 mx-10 px-10 bg-white justify-center">
            <div className="flex justify-end text-center portrait-relative p-6">
              <img
                src={currentProduct.image}
                alt={currentProduct.title}
                style={{ maxWidth: "400px", height: "auto", padding: "20px" }}
              />
              <div style={{ display: "ruby", position: "absolute" }}>
                <div className="flex rounded-3xl border border-gray-50 px-2 py-3">
                  <div className="flex border-r border-gray-50 items-center mr-2">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask
                        id="mask0_11_225"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="16"
                        height="16"
                      >
                        <rect width="16" height="16" fill="#B02626" />
                      </mask>
                      <g mask="url(#mask0_11_225)">
                        <path
                          d="M4.8718 13.6667C4.53932 13.6667 4.25535 13.549 4.01988 13.3135C3.78441 13.078 3.66667 12.7941 3.66667 12.4616V4.00006H3V3.00007H5.99998V2.41034H9.99998V3.00007H13V4.00006H12.3333V12.4616C12.3333 12.7983 12.2166 13.0834 11.9833 13.3167C11.75 13.55 11.4649 13.6667 11.1282 13.6667H4.8718ZM11.3333 4.00006H4.66665V12.4616C4.66665 12.5214 4.68588 12.5706 4.72435 12.609C4.76282 12.6475 4.81197 12.6667 4.8718 12.6667H11.1282C11.1795 12.6667 11.2265 12.6454 11.2692 12.6026C11.3119 12.5599 11.3333 12.5129 11.3333 12.4616V4.00006ZM6.26923 11.3334H7.26922V5.33339H6.26923V11.3334ZM8.73075 11.3334H9.73073V5.33339H8.73075V11.3334Z"
                          fill="#B02626"
                        />
                      </g>
                    </svg>

                    <button>
                      <p className="text-error text-xs mr-2">حذف محصول</p>
                    </button>
                  </div>
                  <div className="flex items-center">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask
                        id="mask0_11_219"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="16"
                        height="16"
                      >
                        <rect width="16" height="16" fill="#1A43D3" />
                      </mask>
                      <g mask="url(#mask0_11_219)">
                        <path
                          d="M3.33348 12.6666H4.1745L10.9989 5.84222L10.1579 5.0012L3.33348 11.8256V12.6666ZM2.3335 13.6666V11.4102L11.1271 2.62047C11.2279 2.5289 11.3392 2.45814 11.461 2.4082C11.5828 2.35825 11.7106 2.33328 11.8442 2.33328C11.9779 2.33328 12.1074 2.35701 12.2327 2.40445C12.358 2.45188 12.4689 2.5273 12.5655 2.63072L13.3796 3.45507C13.483 3.55164 13.5568 3.66278 13.6008 3.78847C13.6448 3.91414 13.6668 4.03982 13.6668 4.1655C13.6668 4.29956 13.6439 4.42749 13.5981 4.5493C13.5523 4.67112 13.4795 4.78244 13.3796 4.88325L4.58988 13.6666H2.3335ZM10.571 5.42908L10.1579 5.0012L10.9989 5.84222L10.571 5.42908Z"
                          fill="#1A43D3"
                        />
                      </g>
                    </svg>

                    <button onClick={openModal}>
                      <p className="text-primary text-xs">ویرایش</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5 border-r border-gray-50 text-right pr-5 pt-10">
              <div className="border-b divider-y border-gray-50 flex flex-col gap-4 pb-4">
                <p className="text-xl font-bold">{currentProduct.title}</p>
                <p className="text-gray-200 text-xs">
                  {currentProduct.category}
                </p>
                <div className="flex gap-4 justify-end">
                  <div className="flex gap-1 items-center ">
                    <p className="text-gray-200 text-xs"> تا باقی مانده</p>
                    {currentProduct.rating && (
                      <>
                        <p className="text-gray-200 text-xs border-r pr-2">
                          {currentProduct.rating.count}
                        </p>
                        <p className="text-gray-200 text-xs ">
                          {currentProduct.rating.rate}
                        </p>
                      </>
                    )}
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask
                        id="mask0_13_356"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="24"
                        height="24"
                      >
                        <rect width="24" height="24" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_13_356)">
                        <path
                          d="M7.875 6.74617L10.5788 3.1981C10.7583 2.95792 10.9714 2.78152 11.2182 2.66892C11.465 2.55632 11.7256 2.50002 12 2.50002C12.2743 2.50002 12.5349 2.55632 12.7817 2.66892C13.0285 2.78152 13.2416 2.95792 13.4211 3.1981L16.125 6.74617L20.2596 8.14232C20.6544 8.26926 20.9625 8.49317 21.1836 8.81405C21.4047 9.13495 21.5153 9.48943 21.5153 9.8775C21.5153 10.0566 21.4892 10.2352 21.4368 10.4132C21.3845 10.5912 21.2984 10.7618 21.1788 10.925L18.4865 14.6615L18.5865 18.6269C18.6031 19.1535 18.4296 19.5973 18.0658 19.9583C17.7021 20.3194 17.2782 20.5 16.7942 20.5C16.7801 20.5 16.6128 20.4782 16.2923 20.4346L12 19.2038L7.70768 20.4346C7.62434 20.4679 7.53833 20.4871 7.44965 20.4923C7.36097 20.4974 7.27967 20.5 7.20575 20.5C6.7173 20.5 6.29231 20.3194 5.93077 19.9583C5.56924 19.5973 5.39681 19.1535 5.41347 18.6269L5.51347 14.6365L2.83655 10.925C2.71688 10.7612 2.63087 10.5899 2.57852 10.4112C2.52617 10.2325 2.5 10.0537 2.5 9.875C2.5 9.49788 2.60985 9.14717 2.82955 8.82285C3.04925 8.49852 3.35607 8.26847 3.75 8.13272L7.875 6.74617Z"
                          fill="#F5AC1F"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
              <p className="text-gray-200 text-xs leading-6">
                {currentProduct.description}
              </p>

              <div className="border-b divider-y border-gray-50 mt-auto"></div>

              <div className="flex items-center mt-auto pb-4">
                <p className="text-primary font-bold flex flex-1 text-xl">
                  ${currentProduct.price}
                </p>
                <p
                  className="text-gray-200 text-xs"
                  style={{ direction: "rtl" }}
                >
                  مبلغ قابل پرداخت:
                </p>
              </div>
            </div>
          </div>
        </div>

        {isModalOpen && (
          <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
            <h2 className="border-b divider-y border-gray-50 text-right p-5">
              ویرایش محصول
            </h2>
            <div className="p-5">
              <div className="border border-gray-300 rounded-lg px-4 py-1 flex flex-col gap-1">
                <label
                  htmlFor="editedTitle"
                  className="text-gray-400 text-xs text-right"
                >
                  {" "}
                  عنوان انگلیسی{" "}
                </label>
                <input
                  type="text"
                  id="editedTitle"
                  name="title"
                  value={editedTitle}
                  onChange={handleInputChange}
                  className="text-xs text-right"
                />
              </div>
              <label htmlFor="editedDescription">Edited Description:</label>
              <textarea
                id="editedDescription"
                name="description"
                value={editedDescription}
                onChange={handleInputChange}
              />

              <label htmlFor="editedPrice">Edited Price:</label>
              <input
                type="number"
                id="editedPrice"
                name="price"
                value={editedPrice}
                onChange={handleInputChange}
              />

              <button onClick={handleEdit}>Save Changes</button>
              <button onClick={handleDelete}>Close</button>
            </div>
          </Modal>
        )}
      </div>
    </>
  );
};

export default ProductDetailPage;
