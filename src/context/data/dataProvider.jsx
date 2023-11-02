import { createContext, useState } from "react";
import collectionsJSON from "../../data/collections.json";
import topicsJSON from "../../data/topics.json";
import listsJSON from "../../data/lists.json";
import linksJSON from "../../data/links.json";

/** Creates and exports DataContext */
export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  // Set de datos
  const [drawerCollections, setDrawerCollections] = useState(collectionsJSON);
  const [drawerTopics, setDrawerTopics] = useState(topicsJSON);
  const [drawerLists, setDrawerLists] = useState(listsJSON);
  const [drawerLinks, setDrawerLinks] = useState(linksJSON);

  // Set de datos obtenidos al seleccionar un elemento
  const [selectedCollectionX, setSelectedCollectionX] = useState({ id: "None", number: 0, name: "None" });
  const [selectedList, setSelectedList] = useState({ id: "None", number: 0, name: "None" });

  const value = {
    selectedCollectionX: { state: selectedCollectionX, set: setSelectedCollectionX },
    selectedList: { state: selectedList, set: setSelectedList },
    drawerCollections: { state: drawerCollections, set: setDrawerCollections },
    drawerTopics: { state: drawerTopics, set: setDrawerTopics },
    drawerLists: { state: drawerLists, set: setDrawerLists },
    drawerLinks: { state: drawerLinks, set: setDrawerLinks },
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};