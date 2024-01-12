"use client";
import { token } from "@/components/jotai-state/token";
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AdminPage() {
  const [tokenValue] = useAtom(token);
  const route = useRouter();
  useEffect(() => {
    if (tokenValue.Token === "") {
      route.push("/landing-page");
    }
  }, []);
  return <></>;
}
