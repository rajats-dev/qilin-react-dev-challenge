import { useState, useEffect } from "react";
import "./style.css";

const GitHubUser = ({ username }) => {
  const [userData, setuserData] = useState(null);
  const [repo, setRepo] = useState([]);
  const [error, setError] = useState("");
  const [loading, setloading] = useState(false);

  useEffect(() => {
    const fetchDetails = async () => {
      setloading(true);
      try {
        const res = await fetch(`https://api.github.com/users/${username}`);
        const userData = await res.json();
        setuserData(userData);

        const repoData = await fetch(
          `https://api.github.com/users/${username}/repos`
        );

        const repoDataJson = await repoData.json();
        setRepo(repoDataJson);
      } catch (error) {
        setError(error.message);
        console.error(error.message);
      } finally {
        setloading(false);
      }
    };
    fetchDetails();
  }, [username]);

  return (
    <>
      <div>
        {userData && !error && (
          <div>
            <img
              src={userData.avatar_url}
              alt={`${userData.login}'s avatar`}
              className="img"
            />
            <h2>Username: {userData.login}</h2>
            <h3>Repositories:</h3>
          </div>
        )}
        {!loading ? (
          <ul className="ul-repo">
            {repo.length > 0 &&
              !error &&
              repo.map((repo) => (
                <li className="li-repo" key={repo.id}>
                  {repo.name}
                </li>
              ))}
          </ul>
        ) : (
          <div className="loading">...Loading</div>
        )}
        {error && <p className="error">❌{error}</p>}
      </div>
    </>
  );
};

export default GitHubUser;
