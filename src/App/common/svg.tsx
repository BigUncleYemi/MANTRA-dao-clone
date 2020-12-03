import React from "react";

const Home: React.FC<{
  title?: string;
}> = ({ title }) => {
  return (
    <div title={title}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="26"
        fill="none"
        viewBox="0 0 28 26"
      >
        <path
          fill="#FDFDFD"
          d="M27.226 11.27L15.252.36a1.362 1.362 0 00-1.844 0L1.434 11.27a1.36 1.36 0 00-.354 1.505 1.36 1.36 0 001.276.875H4.27V24.58c0 .434.351.785.785.785h6.563a.785.785 0 00.784-.785v-6.637h3.858v6.637c0 .434.351.785.785.785h6.562a.785.785 0 00.785-.785V13.65h1.913c.57 0 1.07-.344 1.276-.875a1.36 1.36 0 00-.354-1.505zM24.187 1.567h-5.271l6.055 5.506V2.352a.785.785 0 00-.784-.785z"
        ></path>
      </svg>
    </div>
  );
};

const Support: React.FC<{
  title?: string;
}> = ({ title }) => {
  return (
    <div title={title}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        fill="none"
        viewBox="0 0 26 26"
      >
        <path
          fill="#FFFFFF"
          fillRule="evenodd"
          d="M12.67 25.34c6.998 0 12.67-5.672 12.67-12.67C25.34 5.673 19.668 0 12.67 0 5.673 0 0 5.673 0 12.67c0 6.998 5.673 12.67 12.67 12.67zm.989-8.694l-1.46.622c-.646-.55-.933-1.22-.933-1.938 0-1.588 1.183-2.419 2.312-3.211 1.032-.725 2.02-1.418 2.02-2.629 0-1.196-.934-2.225-2.825-2.225-1.795 0-2.92.79-3.805 1.962L7.771 7.935c1.15-1.484 2.92-2.441 5.194-2.441 2.92 0 4.69 1.651 4.69 3.71 0 2-1.424 2.989-2.694 3.871-1.024.71-1.948 1.352-1.948 2.399 0 .382.239.861.646 1.172zm.359 3.973c0 .718-.599 1.316-1.316 1.316a1.328 1.328 0 01-1.317-1.316c0-.718.599-1.316 1.317-1.316.717 0 1.316.598 1.316 1.316z"
          clipRule="evenodd"
        ></path>
      </svg>
    </div>
  );
};

const Staking: React.FC<{
  title?: string;
}> = ({ title }) => {
  return (
    <div title={title}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="33"
        height="33"
        fill="none"
        viewBox="0 0 33 33"
      >
        <path
          fill="#FFFFFF"
          fillRule="evenodd"
          d="M15.208 0c4.062 0 7.881 1.582 10.754 4.454a15.108 15.108 0 014.454 10.754c0 1.252-.15 2.48-.442 3.665a7.85 7.85 0 11-11.097 11.1 15.317 15.317 0 01-3.67.443 15.109 15.109 0 01-10.753-4.454A15.108 15.108 0 010 15.208c0-4.062 1.582-7.881 4.454-10.754A15.108 15.108 0 0115.208 0zm12.065 17.172a7.806 7.806 0 00-1.753-.43c.04-.264.068-.53.087-.8h-1.113a.9.9 0 010-1.8h1.085c-.51-4.994-4.56-8.956-9.593-9.328v.944a.9.9 0 11-1.8 0v-.923c-4.96.486-8.91 4.462-9.356 9.432H5.8a.9.9 0 110 1.8h-.978c.413 5.05 4.443 9.091 9.487 9.525V24.45a.9.9 0 011.8 0v1.14c.213-.018.424-.042.633-.073.077.61.223 1.197.431 1.755a12.26 12.26 0 01-1.966.158c-6.74 0-12.223-5.483-12.223-12.223v-.033-.008-.014c.03-6.66 5.412-12.077 12.057-12.166h.014l.028-.002h.014l.01.001h.1c6.74 0 12.223 5.482 12.223 12.222 0 .668-.054 1.324-.158 1.964zm-8.42-4.334l-3.007 3.006a.9.9 0 01-1.272 0L9.34 10.611a.9.9 0 111.272-1.273l4.597 4.597 2.37-2.37a.9.9 0 111.273 1.273zm5.705 17.588a5.866 5.866 0 100-11.733 5.866 5.866 0 000 11.733zm0 1.13a6.997 6.997 0 100-13.994 6.997 6.997 0 000 13.995zm.345-2.147h-.678v-.99c-1.134-.066-1.99-.533-2.546-1.167l.545-.7c.433.489 1.111.945 2.001 1.045v-2.714c-1.134-.31-2.313-.689-2.313-2.057 0-1.156.968-1.968 2.313-2.046v-1.023h.678v1.034c.923.09 1.646.445 2.19 1.012l-.555.679a2.72 2.72 0 00-1.635-.845v2.412c1.146.323 2.358.757 2.358 2.202 0 1.012-.645 2.035-2.358 2.168v.99zm0-1.812c1.057-.112 1.401-.745 1.401-1.268 0-.723-.622-1.023-1.4-1.256v2.524zm-.678-5.994c-.8.056-1.357.512-1.357 1.168 0 .622.6.878 1.357 1.1v-2.268z"
          clipRule="evenodd"
        ></path>
      </svg>
    </div>
  );
};

const Loan: React.FC<{
  title?: string;
}> = ({ title }) => {
  return (
    <div title={title}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="29"
        fill="none"
        viewBox="0 0 32 29"
      >
        <path
          fill="#fff"
          d="M15.8 22.53v1.865h.302c3.89 0 7.78 0 11.67-.006.772 0 1.488.173 2.137.599 1.018.673 1.568 1.63 1.685 2.84.007.08 0 .161 0 .272h-.352c-5.594 0-11.194-.006-16.788 0-1.204 0-2.365-.222-3.526-.531-1.093-.29-2.192-.55-3.29-.821a1.249 1.249 0 01-.161-.056v-8.04c.086-.025.179-.062.277-.087.649-.173 1.248-.475 1.834-.796.618-.334 1.254-.618 1.958-.723 1.895-.278 3.538.235 4.94 1.538.08.074.135.185.178.24h.97c1.543 0 3.087-.006 4.63 0 1.63.007 3.014.995 3.526 2.508.087.26.13.537.18.809.018.111.012.222.018.377-3.402.012-6.78.012-10.188.012zM22.32.39v3.768c-.08.037-.16.08-.24.117a2.769 2.769 0 00-1.544 3.008 2.756 2.756 0 002.476 2.26c.136.012.265.018.401.037.432.068.76.438.772.87a.922.922 0 01-.741.933.912.912 0 01-1.031-.537c-.044-.105-.068-.216-.105-.34h-1.779c-.216.846.532 1.951 1.785 2.612v3.78c-3.915-.365-7.6-3.885-7.379-8.652.223-4.724 4.088-7.62 7.385-7.855z"
        ></path>
        <path
          fill="#fff"
          d="M24.21 6.777h1.835c-.075-1.266-.698-2.112-1.84-2.613V.385c3.42.272 7.18 3.254 7.378 7.898.198 4.712-3.42 8.238-7.385 8.627v-3.779c.075-.037.167-.086.254-.13 1.074-.525 1.716-1.685 1.568-2.803-.173-1.248-1.044-2.199-2.254-2.427-.228-.043-.475-.037-.704-.08a.907.907 0 01-.728-.846.92.92 0 01.605-.914.916.916 0 011.185.543c.037.093.056.191.087.303zM5.588 28.082H0v-9.227h5.588v9.227z"
        ></path>
      </svg>
    </div>
  );
};

const Lending: React.FC<{
  title?: string;
}> = ({ title }) => {
  return (
    <div title={title}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="41"
        height="29"
        fill="none"
        viewBox="0 0 41 29"
      >
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M26.132 5.967h-1.518l-.022-.084a1.291 1.291 0 00-.05-.167.759.759 0 00-.981-.45.761.761 0 00-.501.757.75.75 0 00.603.7c.095.018.193.026.292.034.098.007.196.015.29.033 1.003.19 1.724.976 1.867 2.01.122.925-.41 1.886-1.299 2.32a9.219 9.219 0 00-.21.108v3.129c3.283-.323 6.278-3.242 6.114-7.143C30.555 3.37 27.442.9 24.61.675v3.13c.946.413 1.462 1.114 1.523 2.162zm-3.084-2.168V.68c-2.73.195-5.93 2.593-6.114 6.504-.051 1.092.056 2.058.305 2.89H15.35a1.62 1.62 0 010-3.237h.481a7.026 7.026 0 011.787-4.503l-1.034-.77a2.95 2.95 0 00-3.109-.264L8.251 4.714a2.93 2.93 0 01-1.346.328H5.879v9.087h15.4a2.167 2.167 0 00.826-.169 2.025 2.025 0 00.61-3.293 2.017 2.017 0 00-.9-.522c-.238-.37-.335-.755-.25-1.09h1.472c.01.031.018.061.026.09.019.068.037.13.061.191a.755.755 0 00.854.445.763.763 0 00.613-.772.758.758 0 00-.639-.721c-.076-.01-.15-.016-.224-.022l-.108-.009a2.282 2.282 0 01-2.05-1.871 2.292 2.292 0 011.278-2.49c.034-.015.067-.032.1-.048.033-.017.067-.034.1-.049zm-.98 24.264l9.663-3.798h2.3v-8.317h-5.794l-6.394 2.644a2.172 2.172 0 00-1.17 2.86l.024.049a2.248 2.248 0 002.868 1.229l-1.93.742c-1.29.497-2.7.593-4.055.288l-6.266-1.434a2.107 2.107 0 00-2.532 1.627 2.096 2.096 0 001.547 2.468l7.484 1.907c1.41.36 2.9.264 4.254-.265zM35.81 14.465h4.743v11.018h-4.743V14.465zM4.744 3.953H0V14.97h4.744V3.953z"
          clipRule="evenodd"
        ></path>
      </svg>
    </div>
  );
};

const Governance: React.FC<{
  title?: string;
}> = ({ title }) => {
  return (
    <div title={title}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="none"
        viewBox="0 0 30 30"
      >
        <path
          fill="#fff"
          d="M6.424 13.662v-3.401H2.302l-1.7 6.803H29.23l-1.677-6.803h-4.122v3.401h1.7v1.701H4.724v-1.7h1.701z"
        ></path>
        <path
          fill="#fff"
          d="M8.129 13.662h13.606V0H8.129v13.662zM10.68 2.608h8.503v1.7H10.68v-1.7zm0 3.401h8.503v1.7H10.68v-1.7zm0 3.402h8.503v1.7H10.68v-1.7zM.416 18.765h29.025v10.26H.416v-10.26z"
        ></path>
      </svg>
    </div>
  );
};

const Pool: React.FC<{
  title?: string;
}> = ({ title }) => {
  return (
    <div title={title}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="37"
        height="22"
        fill="none"
        viewBox="0 0 37 22"
      >
        <path
          fill="#FFFFFF"
          fillRule="evenodd"
          d="M36.146 7.293h-.002a3.564 3.564 0 10.002 7.128c.385 0 .697.312.697.697v4.878a1.697 1.697 0 01-1.697 1.697H1.696A1.707 1.707 0 010 19.975v-4.878c0-.385.312-.697.697-.697a3.564 3.564 0 000-7.128A.697.697 0 010 6.575V1.697C0 1.247.18.816.498.498A1.693 1.693 0 011.697 0h33.449a1.707 1.707 0 011.697 1.718v4.878a.697.697 0 01-.697.697zm-7.363 12.703a.697.697 0 00.697-.697V16.48a.697.697 0 00-1.393 0v2.82c0 .384.311.696.696.696zm0-7.042a.697.697 0 00.697-.696V9.453a.697.697 0 00-1.393 0v2.805c0 .384.311.696.696.696zm0-7.041a.697.697 0 00.697-.697V2.397a.697.697 0 00-1.393 0v2.819c0 .385.311.697.696.697zm-3.497 7.977c.31.224.605.473.88.75a.574.574 0 010 .81 7.039 7.039 0 01-5.01 2.075c-.923 0-1.82-.175-2.651-.51a9.057 9.057 0 006.78-3.125zm-17.467 0c-.31.224-.605.473-.88.75a.574.574 0 000 .81 7.039 7.039 0 005.01 2.075c.923 0 1.82-.175 2.651-.51a9.058 9.058 0 01-6.78-3.125zm6.129 1.946a7.9 7.9 0 01-6.922-5.822.572.572 0 01.42-.707 7.903 7.903 0 011.69-.256 9.6 9.6 0 004.812 6.785zm5.21 0a7.9 7.9 0 006.922-5.822.572.572 0 00-.42-.707 7.9 7.9 0 00-1.69-.256 9.596 9.596 0 01-4.812 6.785zm-6.71-6.547c0 2.462.899 4.258 1.478 5.194a8.44 8.44 0 01-3.492-9.223.573.573 0 01.702-.406c.699.188 1.37.466 1.997.823a9.783 9.783 0 00-.685 3.612zm6.73 5.194A8.44 8.44 0 0022.67 5.26a.573.573 0 00-.703-.406c-.7.188-1.37.466-1.997.823a9.782 9.782 0 01.685 3.612c0 2.464-.9 4.26-1.479 5.194zM16.553 2.96c.152 0 .298.06.406.168a8.712 8.712 0 010 12.322.573.573 0 01-.811 0 8.713 8.713 0 010-12.322.573.573 0 01.405-.168z"
          clipRule="evenodd"
        ></path>
      </svg>
    </div>
  );
};

const Karma: React.FC<{
  title?: string;
}> = ({ title }) => {
  return (
    <div title={title}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="37"
        height="28"
        fill="none"
        viewBox="0 0 37 28"
      >
        <path
          fill="#FFFFFF"
          d="M36.006 21.679a13.275 13.275 0 00-1.635-1.39 16.725 16.725 0 01-4.297 3.548 16.811 16.811 0 01-8.29 2.25c1.544.622 3.208.949 4.922.949 3.513 0 6.816-1.368 9.3-3.852a1.064 1.064 0 000-1.505zM1.947 20.288c-.577.415-1.123.878-1.635 1.39a1.065 1.065 0 000 1.506 13.065 13.065 0 009.299 3.852c1.714 0 3.379-.327 4.922-.95a16.812 16.812 0 01-8.29-2.249 16.723 16.723 0 01-4.296-3.549zM7.306 21.995a14.72 14.72 0 006.018 1.904 17.819 17.819 0 01-6.8-6.677 17.743 17.743 0 01-2.132-5.917 14.67 14.67 0 00-3.137.476 1.065 1.065 0 00-.78 1.311 14.663 14.663 0 006.831 8.903zM22.993 23.9a14.664 14.664 0 0012.849-10.807 1.063 1.063 0 00-.78-1.312 14.664 14.664 0 00-3.137-.476A17.81 17.81 0 0122.993 23.9z"
        ></path>
        <path
          fill="#FFFFFF"
          d="M13.285 21.387a18.253 18.253 0 01-2.745-9.64c0-2.315.429-4.567 1.273-6.704a15.677 15.677 0 00-3.708-1.527 1.064 1.064 0 00-1.303.752 15.667 15.667 0 006.483 17.12zM23.032 21.388a15.667 15.667 0 006.484-17.12 1.064 1.064 0 00-1.304-.752 15.674 15.674 0 00-3.708 1.527 18.159 18.159 0 011.273 6.705 18.25 18.25 0 01-2.745 9.64z"
        ></path>
        <path
          fill="#FFFFFF"
          d="M18.487.312a1.065 1.065 0 00-1.505 0 16.171 16.171 0 000 22.872 1.066 1.066 0 001.505 0 16.172 16.172 0 000-22.872z"
        ></path>
      </svg>
    </div>
  );
};

const Swap: React.FC<{
  title?: string;
}> = ({ title }) => {
  return (
    <div title={title}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="29"
        fill="none"
        viewBox="0 0 28 29"
      >
        <path
          fill="#FFFFFF"
          stroke="#FFFFFF"
          strokeWidth="0.52"
          d="M2.032 13.266c-.57 0-1.032-.461-1.032-1.031a6.439 6.439 0 016.432-6.432h17.703a1.032 1.032 0 110 2.063H7.432a4.373 4.373 0 00-4.368 4.369c0 .57-.462 1.031-1.032 1.031z"
        ></path>
        <path
          fill="#FFFFFF"
          stroke="#FFFFFF"
          strokeWidth="0.52"
          d="M25.824 7.866a1.03 1.03 0 01-.756-.33l-4.357-4.684a1.033 1.033 0 011.512-1.405l4.356 4.684a1.033 1.033 0 01-.755 1.735z"
        ></path>
        <path
          fill="#FFFFFF"
          stroke="#FFFFFF"
          strokeWidth="0.52"
          d="M21.467 12.55a1.032 1.032 0 01-.755-1.734l4.357-4.684a1.032 1.032 0 011.51 1.405l-4.356 4.685c-.203.218-.48.329-.756.329zM20.424 23.096H2.721a1.032 1.032 0 110-2.064h17.703a4.374 4.374 0 004.369-4.368 1.032 1.032 0 112.063 0 6.439 6.439 0 01-6.432 6.432z"
        ></path>
        <path
          fill="#FFFFFF"
          stroke="#FFFFFF"
          strokeWidth="0.52"
          d="M6.388 27.78a1.03 1.03 0 01-.756-.33l-4.356-4.683a1.033 1.033 0 011.51-1.406l4.357 4.684a1.033 1.033 0 01-.755 1.735z"
        ></path>
        <path
          fill="#FFFFFF"
          stroke="#FFFFFF"
          strokeWidth="0.52"
          d="M2.032 23.096a1.032 1.032 0 01-.755-1.734l4.356-4.685a1.032 1.032 0 111.51 1.405l-4.355 4.685a1.03 1.03 0 01-.756.329z"
        ></path>
      </svg>
    </div>
  );
};

export {
  Home,
  Staking,
  Loan,
  Lending,
  Governance,
  Pool,
  Karma,
  Swap,
  Support,
};