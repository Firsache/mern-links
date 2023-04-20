import c from "config";
import { useCallback, useContext, useEffect, useState } from "react";
import { LinksList } from "../components/LinksList";
import { Loader } from "../components/Loader";
import { AuthContext } from "../context/Auth.Context";
import { useHttp } from "../hooks/http.hook";

export const LinksPage = () => {
  const { token } = useContext(AuthContext);
  const { request, loading } = useHttp();
  const { links, setLinks } = useState([]);

  const fetchLinks = useCallback(async () => {
    try {
      const fetched = await request("/api/link", "GET", null, {
        Authorization: `Bearer ${token}`,
      });
      setLinks(fetched);
    } catch (error) {}
  }, [request, setLinks, token]);

  useEffect(() => {
    fetchLinks();
  }, [fetchLinks]);

  if (loading) {
    return <Loader />;
  }

  return <>{!loading && <LinksList links={links} />}</>;
};
