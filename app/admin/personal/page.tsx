async function getPersonal() {
  const res = await fetch(
    "https://swaggerip.azurewebsites.net/api/Staff/GetStaffByPosition"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export default async function PersonalPage() {
  const data = await getPersonal();

  return <>aaaa</>;
}
