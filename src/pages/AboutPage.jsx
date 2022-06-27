import { useContext } from "react";
import { UserContext } from "../UserContext";
import { Button } from "react-bootstrap";
const AboutPage = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <h3>About Page</h3>
      <hr />
      <pre>{JSON.stringify(user, null, 3)}</pre>
      <Button
        variant="outline-danger"
        onClick={() => setUser({ id: 1, name: "" })}
      >
        Log out
      </Button>
    </>
  );
};

export default AboutPage;
