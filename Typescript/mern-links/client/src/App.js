import "materialize-css";
import { AuthContext } from "./context/Auth.Context";
import { useAuth } from "./hooks/auth.hook";
import { useRoutes } from "./routes";

function App() {
  const { login, logout, token, userId } = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);
  return (
    <AuthContext.Provider
      value={{ login, logout, token, userId, isAuthenticated }}
    >
      <div className="container">{routes}</div>
    </AuthContext.Provider>
  );
}

export default App;
