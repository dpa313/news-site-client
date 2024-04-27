import { useEffect, useState } from "react";

const useEffectDemo = () => {
  // Demo useEffect for data loading
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch("url...");
      const data = await response.json();

      if (data) {
        setUser(data);
        setLoading(false);
      }

      // other if

      if (data && data.name && data.name.length) {
        setUser(data);
        setLoading(false);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...pls wait</div>;
  }
  if (error !== null) {
    return <div>error occured! {error}</div>;
  }

  return (
    <div>
      {user && user.name && user.name.length
        ? user.map((item, index) => <div key={index}>{item.name}</div>)
        : null}
    </div>
  );
};

export default useEffectDemo;
