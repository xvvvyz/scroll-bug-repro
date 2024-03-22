'use client';
import { useEffect } from 'react';


export default function Layout({ children }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div
        style={{
          alignItems: "center",
          backgroundColor: "lightgrey",
          display: "flex",
          height: "102vh",
          justifyContent: "center",
        }}
      >
        Layout content with a height of 102vh.
      </div>
      {children}

    </div>
  );
}
