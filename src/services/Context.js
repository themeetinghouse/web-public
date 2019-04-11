import React from 'react';

export const AppContext = React.createContext({
//    question: null,
    selectedItemId: "hello",
    // selectedItemType: null,
    // selectedItem: null
  })

  export const AppContextConsumer = AppContext.Consumer;
  