import React from "react";
import { MessageContainer } from "./with-loading.styles";

const WithLoading = (WrappedComponent) => {
  const Loading = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <MessageContainer>CARGANDO...</MessageContainer>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return Loading;
};

export default WithLoading;
