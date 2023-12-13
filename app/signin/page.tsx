"use client";
import React from "react";
import Layout from "../layout";
import SignIn from "@/components/login-page/signin/SignIn";

const AuthenticationPage: React.FC = () => {
  return (
    <Layout>
      <SignIn />
    </Layout>
  );
};

export default AuthenticationPage;
