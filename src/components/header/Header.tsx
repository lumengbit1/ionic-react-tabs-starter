import React from "react";
import cx from "classnames";
import { IonHeader, IonToolbar } from "@ionic/react";

import styles from "./header.module.scss";

type HeaderProps = {
  children: React.ReactNode;
  variant?: "default";
  overlayed?: boolean;
};

const Header: React.FC<HeaderProps> = ({
  children,
  variant = "default",
  overlayed = true,
}) => (
  <IonHeader className={cx(styles.header, { [styles[variant]]: variant })}>
    <IonToolbar
      className={cx(styles.toolbar, {
        [styles[variant]]: variant,
        [styles.overlayed]: overlayed,
        [styles.rounded]: variant === "default",
      })}
    >
      {children}
    </IonToolbar>
  </IonHeader>
);

export default Header;
