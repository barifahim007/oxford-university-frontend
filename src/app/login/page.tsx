"use client";
import { Button, Col, Row } from "antd";
import Image from "next/image";
import Forms from "../../components/Forms/forms";
import FormInput from "../../components/Forms/FormsInput";
import { SubmitHandler } from "react-hook-form";
import login from "../../assets/Login-bro.svg";
import { useUserLoginMutation } from "@/redux/api/authApi";
import {
  getUserFromLocalStorage,
  setUserInToLocalStorage,
} from "@/service/auth.service";
import { useRouter } from "next/navigation";

type FormValues = {
  id: string;
  password: string;
};

const LoginPage = () => {
  const [userLogin] = useUserLoginMutation();
  getUserFromLocalStorage();
  const router = useRouter();

  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    try {
      const res = await userLogin({ ...data }).unwrap();

      if (res?.data?.accessToken) {
        router.push("/profile");
      }

      setUserInToLocalStorage({ accessToken: res?.data?.accessToken });
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <Row
      justify="center"
      align="middle"
      style={{
        minHeight: "100vh",
      }}
    >
      <Col sm={12} md={16} lg={10}>
        <Image src={login} width={500} alt="login image" />
      </Col>
      <Col sm={12} md={8} lg={8}>
        <h1
          style={{
            margin: "15px 0px",
          }}
        >
          First login your account
        </h1>
        <div>
          <Forms submitHandeler={onSubmit}>
            <div>
              <FormInput name="id" type="text" size="large" label="User Id" />
            </div>
            <div
              style={{
                margin: "15px 0px",
              }}
            >
              <FormInput
                name="password"
                type="password"
                size="large"
                label="User Password"
              />
            </div>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Forms>
        </div>
      </Col>
    </Row>
  );
};

export default LoginPage;
