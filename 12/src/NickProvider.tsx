import React, { createContext, useContext, useState, ReactNode } from 'react';

interface NickContextType {
  nickname: string;
  setNickname: (nickname: string) => void;
}

const NickContext = createContext<NickContextType | null>(null);

interface NickProviderProps {
  children: ReactNode;
}

export const NickProvider: React.FC<NickProviderProps> = ({ children }) => {
  const [nickname, setNickname] = useState<string>('');

  return (
    <NickContext.Provider value={{ nickname, setNickname }}>
      {children}
    </NickContext.Provider>
  );
};

export const useNick = (): NickContextType => {
  const context = useContext(NickContext);

  if (!context) {
    throw new Error('Error!');
  }

  return context;
};
