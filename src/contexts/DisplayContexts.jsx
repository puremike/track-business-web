import { createContext, useState } from "react";

export const DisplayContexts = createContext("");

export const DisplayProvider = ({ children }) => {
  const [aside, setAside] = useState("none");

  //to handle the FAQs paragraph along with the iconChange
  const [aside2, setAside2] = useState("none");
  const [aside3, setAside3] = useState("none");
  const [aside4, setAside4] = useState("none");

  //to handle the iconChanges individually
  const [icon, setIcon] = useState(null);
  const [icon2, setIcon2] = useState(null);
  const [icon3, setIcon3] = useState(null);
  const [icon4, setIcon4] = useState(null);
  const value = {
    aside,
    setAside,
    icon,
    setIcon,
    icon2,
    setIcon2,
    icon3,
    setIcon3,
    icon4,
    setIcon4,
  };

  return (
    <DisplayContexts.Provider value={value}>
      {children}
    </DisplayContexts.Provider>
  );
};
