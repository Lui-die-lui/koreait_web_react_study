import { useEffect } from "react";
import { useState } from "react-dom";

const API_URL = "https://jsonplaceholder.typicode.com/users/1";

function UserProfile() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUser = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error("데이터를 불러오는데 실패했습니다.");
      }
      const responseData = await response.json();
      setUser(responseData);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (isLoading) {
    return <div>불러오는중...</div>;
  }

  if (error) {
    return <div>에러:{error}</div>
  }

    // 중간에 뭐 빠짐

  return (
    <div>
      {user ? (
        <div>
          <p>이름 : {UserProfile.name}</p>
          <p>이메일 : </p>
          <p>전화번호 : </p>
        </div>
      ) : (
        <p>데이터가 없습니다.</p>
      )}
    </div>
  );
}

export default UserProfile;
