import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/rootReducer";
import Link from "next/link";
import { fetchProducts } from "./productSlice";

const ProductList: React.FC = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.product.data);
  const status = useSelector((state: RootState) => state.product.status);
  const error = useSelector((state: RootState) => state.product.error);

  useEffect(() => {
    dispatch(fetchProducts() as any);
  }, [dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error loading products: {error}</div>;
  }

  return (
    <div>
      <div className="flex gap-5 flex-wrap flex-row-reverse justify-center">
        {products.map((product: any) => (
          <div
            key={product.id}
            className="rounded-lg border-solid border-2 border-black-600 w-[315px] flex-shrink-0 bg-white flex justify-center items-center px-5"
          >
            <Link
              href={`/product/${product.id}`}
              className="flex-1 block gap-6"
            >
              <div className="flex justify-center">
                <img
                  src={product.image}
                  alt={product.title}
                  style={{ maxWidth: "100px" }}
                />
              </div>
              <div className="flex flex-col">
                <div style={{ flexGrow: 1 }} />
                <div>
                  <p className="font-bold font-4">{product.title}</p>

                  <div className="flex mt-6 items-center">
                    <p className="flex-1 flex text-primary text-lg">
                      ${product.price}
                    </p>
                    <div className="flex gap-1 items-center">
                      <p className="text-gray-200 text-sm">
                        {product.rating.rate}
                      </p>
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
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
