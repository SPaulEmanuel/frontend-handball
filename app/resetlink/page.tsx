"use client";
import React from "react";
import Layout from "../layout";
import { ResetLink } from "@/components/login-page/forgotpass/ResetPass";

const AuthenticationPage: React.FC = () => {
  return (
    <Layout>
      <ResetLink />
    </Layout>
  );
};

export default AuthenticationPage;
