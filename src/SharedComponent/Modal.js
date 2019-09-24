import React from "react";
import styled from "styled-components";

const Modal = ({ isShowing, hide, children }) => (isShowing ? children : null);

export default Modal;
