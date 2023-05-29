import { Button } from "antd";
import React from "react";
import { useRecoilState } from "recoil";
import { userListState } from "../recoil/user.atoms";

const HomePage: React.FC = () => {
  const [users] = useRecoilState(userListState);
  return (
    <div>
      {users.map((user) => (
        <p key={user.email}>{user.email}</p>
      ))}
      <Button>Primary</Button>
    </div>
  );
};

export default HomePage;
