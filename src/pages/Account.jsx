import UpdatePasswordForm from "../features/authentication/UpdatePasswordForm";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import UpdateUserDataForm from "./../features/authentication/UpdateUserDataForm";

function Account() {
  return (
    <>
      <Heading as="h1">Update your account</Heading>

      <Row style={{ gap: "25px", display: "flex", flexFlow: "column" }}>
        <Heading as="h3">Update user data</Heading>
        <UpdateUserDataForm />
      </Row>

      <Row style={{ gap: "25px", display: "flex", flexFlow: "column" }}>
        <Heading as="h3">Update password</Heading>
        <UpdatePasswordForm />{" "}
      </Row>
    </>
  );
}

export default Account;
