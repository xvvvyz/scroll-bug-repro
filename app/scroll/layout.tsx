export default function Layout({ children }) {
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
