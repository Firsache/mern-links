import { Link } from "react-router-dom";

export const LinksList = ({ links }) => {
  if (!links.length) {
    return <p className="center">There aren't any links yet</p>;
  }
  return (
    <table>
      <thead>
        <tr>
          <th>№</th>
          <th>Full</th>
          <th>Shortened</th>
          <th>Open</th>
        </tr>
      </thead>

      <tbody>
        {links.map((link, idx) => {
          return (
            <tr>
              <td>{idx + 1}</td>
              <td>{link.from}</td>
              <td>{link.to}</td>
              <td>
                <Link to={`/detail/${link._id}`}>Open</Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
