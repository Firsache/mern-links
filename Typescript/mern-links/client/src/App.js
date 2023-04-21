import "materialize-css";
import { Loader } from "./components/Loader";
import { NavBar } from "./components/NavBar";
import { AuthContext } from "./context/Auth.Context";
import { useAuth } from "./hooks/auth.hook";
import { useRoutes } from "./routes";

function App() {
  const { login, logout, token, userId, ready } = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);
  if (!ready) {
    return <Loader />;
  }
  return (
    <AuthContext.Provider
      value={{ login, logout, token, userId, isAuthenticated }}
    >
      {isAuthenticated && <NavBar />}
      <div className="container">{routes}</div>
    </AuthContext.Provider>
  );
}

export default App;
