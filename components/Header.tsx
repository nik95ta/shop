import React from "react";

const Header: React.FC = () => {
  return (
    <header className="top-0" style={{ padding: "24px 60px" }}>
      <div className="flex items-center justify-between">
        <div
          className="flex gap-1 items-center border rounded-3xl px-5 border-gray-200"
          style={{ paddingTop: "8px", paddingBottom: "8px" }}
        >
          <p className="text-gray-200">بردیا ادیبی</p>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_11_177"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="24"
            >
              <rect width="24" height="24" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_11_177)">
              <path
                d="M6.02308 17.2923C6.87308 16.6615 7.79903 16.1635 8.80095 15.7981C9.80287 15.4327 10.8692 15.25 12 15.25C13.1307 15.25 14.1971 15.4327 15.199 15.7981C16.2009 16.1635 17.1269 16.6615 17.9769 17.2923C18.5987 16.609 19.0913 15.8179 19.4548 14.9192C19.8182 14.0205 20 13.0474 20 12C20 9.78331 19.2208 7.89581 17.6625 6.33748C16.1041 4.77914 14.2166 3.99998 12 3.99998C9.78331 3.99998 7.89581 4.77914 6.33748 6.33748C4.77914 7.89581 3.99998 9.78331 3.99998 12C3.99998 13.0474 4.18171 14.0205 4.54518 14.9192C4.90864 15.8179 5.40128 16.609 6.02308 17.2923ZM12.0003 12.75C11.0873 12.75 10.3173 12.4366 9.69038 11.8099C9.06346 11.1831 8.75 10.4133 8.75 9.50028C8.75 8.58726 9.06336 7.81729 9.69008 7.19038C10.3168 6.56346 11.0867 6.25 11.9997 6.25C12.9127 6.25 13.6827 6.56336 14.3096 7.19008C14.9365 7.81681 15.25 8.58668 15.25 9.49968C15.25 10.4127 14.9366 11.1827 14.3099 11.8096C13.6831 12.4365 12.9133 12.75 12.0003 12.75ZM12 21.5C10.6807 21.5 9.44325 21.2519 8.2875 20.7557C7.13173 20.2596 6.12628 19.5839 5.27115 18.7288C4.41603 17.8737 3.7404 16.8682 3.24425 15.7125C2.74808 14.5567 2.5 13.3192 2.5 12C2.5 10.6807 2.74808 9.44325 3.24425 8.2875C3.7404 7.13173 4.41603 6.12628 5.27115 5.27115C6.12628 4.41603 7.13173 3.7404 8.2875 3.24425C9.44325 2.74808 10.6807 2.5 12 2.5C13.3192 2.5 14.5567 2.74808 15.7125 3.24425C16.8682 3.7404 17.8737 4.41603 18.7288 5.27115C19.5839 6.12628 20.2596 7.13173 20.7557 8.2875C21.2519 9.44325 21.5 10.6807 21.5 12C21.5 13.3192 21.2519 14.5567 20.7557 15.7125C20.2596 16.8682 19.5839 17.8737 18.7288 18.7288C17.8737 19.5839 16.8682 20.2596 15.7125 20.7557C14.5567 21.2519 13.3192 21.5 12 21.5ZM12 20C12.9025 20 13.7727 19.8548 14.6105 19.5644C15.4484 19.274 16.1923 18.8679 16.8423 18.3461C16.1923 17.8436 15.458 17.4519 14.6394 17.1711C13.8208 16.8903 12.941 16.75 12 16.75C11.0589 16.75 10.1775 16.8887 9.35573 17.1663C8.53393 17.4439 7.80123 17.8371 7.15765 18.3461C7.80765 18.8679 8.55157 19.274 9.3894 19.5644C10.2272 19.8548 11.0974 20 12 20ZM12 11.25C12.4974 11.25 12.9134 11.0827 13.2481 10.7481C13.5827 10.4134 13.75 9.99741 13.75 9.49998C13.75 9.00254 13.5827 8.58651 13.2481 8.25188C12.9134 7.91726 12.4974 7.74995 12 7.74995C11.5025 7.74995 11.0865 7.91726 10.7519 8.25188C10.4173 8.58651 10.25 9.00254 10.25 9.49998C10.25 9.99741 10.4173 10.4134 10.7519 10.7481C11.0865 11.0827 11.5025 11.25 12 11.25Z"
                fill="#757575"
              />
            </g>
          </svg>
        </div>
        <svg
          width="94"
          height="27"
          viewBox="0 0 94 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.99414 18H7.99805C7.9069 19.4323 7.33398 20.5488 6.2793 21.3496C5.23112 22.1569 3.79557 22.5605 1.97266 22.5605H1.25H0.859375V22.1699V20.4512V20.0605H1.25H1.91406C4.14062 20.0605 5.34831 19.3737 5.53711 18H4.375C3.15104 18 2.21354 17.6842 1.5625 17.0527C0.911458 16.4147 0.585938 15.4967 0.585938 14.2988C0.585938 13.7129 0.664062 13.1725 0.820312 12.6777C0.983073 12.1764 1.21745 11.737 1.52344 11.3594C1.83594 10.9753 2.23307 10.6758 2.71484 10.4609C3.20312 10.2461 3.75326 10.1387 4.36523 10.1387C5.50456 10.1387 6.39648 10.5098 7.04102 11.252C7.68555 11.9941 8.00781 12.9805 8.00781 14.2109V15.4609H8.99414C9.06576 15.4609 9.12435 15.5977 9.16992 15.8711C9.21549 16.1445 9.23828 16.4082 9.23828 16.6621V16.7695C9.23828 17.0365 9.21549 17.3099 9.16992 17.5898C9.13086 17.8633 9.07227 18 8.99414 18ZM2.99805 14.2598C2.99805 14.6895 3.09896 14.9987 3.30078 15.1875C3.50911 15.3698 3.86393 15.4609 4.36523 15.4609H5.57617V14.2012C5.57617 13.1335 5.15951 12.5996 4.32617 12.5996C3.44076 12.5996 2.99805 13.153 2.99805 14.2598ZM11.6992 21.2324L13.3398 19.582L14.9902 21.2324C14.9512 21.2715 14.9121 21.3138 14.873 21.3594C14.7884 21.444 14.5605 21.6686 14.1895 22.0332C13.8184 22.4043 13.5352 22.6875 13.3398 22.8828L11.6992 21.2324ZM8.16406 21.2324L9.81445 19.582L11.4551 21.2324L9.81445 22.8828L8.16406 21.2324ZM17.5684 18H17.3633C16.1003 18 15.1562 17.6354 14.5312 16.9062C13.8021 17.6354 12.7116 18 11.2598 18H8.90625C8.82812 18 8.76953 17.8633 8.73047 17.5898C8.6849 17.3099 8.66211 17.0365 8.66211 16.7695V16.6621C8.66211 16.4082 8.6849 16.1445 8.73047 15.8711C8.77604 15.5977 8.83464 15.4609 8.90625 15.4609H11.3086C12.0508 15.4609 12.5618 15.3438 12.8418 15.1094C13.1283 14.875 13.2715 14.4876 13.2715 13.9473V11.4277V11.0371H13.6621H15.332H15.7227V11.4277V13.9473C15.7227 14.5137 15.8333 14.9076 16.0547 15.1289C16.2826 15.3503 16.7155 15.4609 17.3535 15.4609H17.5684C17.64 15.4609 17.6986 15.5977 17.7441 15.8711C17.7897 16.1445 17.8125 16.4082 17.8125 16.6621V16.7695C17.8125 17.0365 17.7897 17.3099 17.7441 17.5898C17.7051 17.8633 17.6465 18 17.5684 18ZM21.3867 7.79492L23.0273 6.14453L24.6777 7.79492C24.6387 7.83398 24.5996 7.8763 24.5605 7.92188C24.4759 8.00651 24.248 8.23438 23.877 8.60547C23.5059 8.97005 23.2227 9.25 23.0273 9.44531L21.3867 7.79492ZM17.8516 7.79492L19.502 6.14453L21.1426 7.79492L19.502 9.44531L17.8516 7.79492ZM26.1328 18H25.9277C24.6647 18 23.7207 17.6354 23.0957 16.9062C22.3665 17.6354 21.276 18 19.8242 18H17.4707C17.3926 18 17.334 17.8633 17.2949 17.5898C17.2493 17.3099 17.2266 17.0365 17.2266 16.7695V16.6621C17.2266 16.4082 17.2493 16.1445 17.2949 15.8711C17.3405 15.5977 17.3991 15.4609 17.4707 15.4609H19.873C20.6152 15.4609 21.1263 15.3438 21.4062 15.1094C21.6927 14.875 21.8359 14.4876 21.8359 13.9473V11.4277V11.0371H22.2266H23.8965H24.2871V11.4277V13.9473C24.2871 14.5137 24.3978 14.9076 24.6191 15.1289C24.847 15.3503 25.2799 15.4609 25.918 15.4609H26.1328C26.2044 15.4609 26.263 15.5977 26.3086 15.8711C26.3542 16.1445 26.377 16.4082 26.377 16.6621V16.7695C26.377 17.0365 26.3542 17.3099 26.3086 17.5898C26.2695 17.8633 26.2109 18 26.1328 18ZM43.5449 18H43.3496C42.0475 18 41.0514 17.6419 40.3613 16.9258C39.834 17.6419 39.0658 18 38.0566 18C36.9303 18 36.0612 17.6354 35.4492 16.9062C34.8307 17.6354 33.9323 18 32.7539 18C31.6667 18 30.8008 17.6257 30.1562 16.877C29.4596 17.6257 28.3952 18 26.9629 18H26.0449C25.9668 18 25.9082 17.8633 25.8691 17.5898C25.8236 17.3099 25.8008 17.0365 25.8008 16.7695V16.6621C25.8008 16.4082 25.8236 16.1445 25.8691 15.8711C25.9147 15.5977 25.9733 15.4609 26.0449 15.4609H26.9727C27.6562 15.4609 28.1478 15.3405 28.4473 15.0996C28.7467 14.8522 28.8965 14.4714 28.8965 13.957V11.418V11.0273H29.2871H30.957H31.3477V11.418L31.3574 13.9766C31.3639 14.5104 31.4746 14.8913 31.6895 15.1191C31.9108 15.347 32.2786 15.4609 32.793 15.4609C33.112 15.4609 33.3691 15.4121 33.5645 15.3145C33.7663 15.2168 33.916 15.0573 34.0137 14.8359C34.1113 14.6146 34.1602 14.3249 34.1602 13.9668L34.1699 11.418V11.0273H34.5605H36.2207H36.6113V11.418L36.6211 13.9473C36.6276 14.4941 36.7383 14.8815 36.9531 15.1094C37.168 15.3372 37.526 15.4512 38.0273 15.4512C38.2682 15.4512 38.4603 15.4089 38.6035 15.3242C38.7467 15.2331 38.8574 15.0801 38.9355 14.8652C39.0137 14.6439 39.0527 14.3444 39.0527 13.9668V11.418V11.0273H39.4434H41.084H41.4746V11.418L41.4844 13.9375C41.4909 14.4714 41.6309 14.8587 41.9043 15.0996C42.1777 15.3405 42.6335 15.4609 43.2715 15.4609H43.5449C43.6165 15.4609 43.6751 15.5977 43.7207 15.8711C43.7663 16.1445 43.7891 16.4082 43.7891 16.6621V16.7695C43.7891 17.0365 43.7663 17.3099 43.7207 17.5898C43.6816 17.8633 43.623 18 43.5449 18ZM43.4473 15.4609H46.2109C46.8229 15.4609 47.2396 15.3633 47.4609 15.168C47.6823 14.9727 47.793 14.5723 47.793 13.9668V11.0957V10.7051H48.1836H49.8828H50.2734V11.0957V13.9766C50.2734 15.2786 49.9251 16.2747 49.2285 16.9648C48.5384 17.6549 47.5358 18 46.2207 18H43.4473C43.3691 18 43.3105 17.8633 43.2715 17.5898C43.2259 17.3099 43.2031 17.0365 43.2031 16.7695V16.6621C43.2031 16.4082 43.2259 16.1445 43.2715 15.8711C43.3171 15.5977 43.3757 15.4609 43.4473 15.4609ZM47.3438 7.59961L48.9844 5.94922L50.6348 7.59961C50.5957 7.63867 50.5566 7.68099 50.5176 7.72656C50.4329 7.8112 50.2051 8.03906 49.834 8.41016C49.4629 8.77474 49.1797 9.05469 48.9844 9.25L47.3438 7.59961ZM43.8086 7.59961L45.459 5.94922L47.0996 7.59961L45.459 9.25L43.8086 7.59961Z"
            fill="#1E1C7E"
          />
          <circle cx="82" cy="14" r="12" fill="#231FF5" />
          <circle cx="71" cy="14" r="12" fill="#F5AC1F" />
        </svg>
      </div>
    </header>
  );
};

export default Header;