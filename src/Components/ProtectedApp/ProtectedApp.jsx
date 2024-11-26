import { Navigate } from "react-router-dom";

export default function ProtectedApp({ children }) {
  if (!localStorage.getItem("tkn")) {
    return <Navigate to="/login" />;
  }
  return <div>{children}</div>;
}
