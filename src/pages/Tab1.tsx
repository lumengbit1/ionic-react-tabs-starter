import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import Header from "../components/header/Header";
import "./Tab1.css";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <Header>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
      </Header>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
