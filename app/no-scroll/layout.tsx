export default function Layout({ children }) {
  return (
    <div>
      <div
        style={{
          alignItems: "center",
          backgroundColor: "lightgrey",
          display: "flex",
          height: "98vh",
          justifyContent: "center",
        }}
      >
        Layout content with a height of 98vh.
      </div>
      {children}
    </div>
  );
}
