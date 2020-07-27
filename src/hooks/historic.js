import React, {createContext, useCallback, useState, useContext} from 'react';

const HistoricContext = createContext({});
const HistoricProvider = ({children}) => {
  const [data, setData] = useState(() => {
    const data = localStorage.getItem('@marvel:historic');

    if (data) {
      return JSON.parse(data);
    }

    return [];
  });

  const setHistoric = useCallback(
    (historic) => {
      setData([...data, historic]);
    },
    [data],
  );

  localStorage.setItem('@marvel:historic', JSON.stringify(data));

  const handleClearhistoric = () => {
    localStorage.removeItem('@marvel:historic');

    setData({});
  };

  return (
    <HistoricContext.Provider
      value={{historic: data, setHistoric, handleClearhistoric}}>
      {children}
    </HistoricContext.Provider>
  );
};

function useHistoric() {
  const constext = useContext(HistoricContext);

  if (!constext) {
    throw new Error('useHistoric must be used within an HistoricProvider');
  }

  return constext;
}

export {HistoricProvider, useHistoric};
