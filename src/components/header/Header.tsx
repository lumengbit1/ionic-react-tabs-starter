import React from "react";
import { IonHeader, IonToolbar } from "@ionic/react";

import * as styles from "./Header.module.css";

type HeaderProps = {
  children: React.ReactNode;
};

const Header: React.FC<HeaderProps> = ({ children }) => (
  <IonHeader>
    <IonToolbar>{children}</IonToolbar>
  </IonHeader>
);

export default Header;
