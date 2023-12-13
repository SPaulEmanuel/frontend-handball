"use client";
import React from "react";
import { ForgotPassword } from "@/components/login-page/forgotpass/ForgotPassword";
import Layout from "../layout";

const AuthenticationPage: React.FC = () => {
  return (
    <Layout>
      <ForgotPassword />
    </Layout>
  );
};

export default AuthenticationPage;
