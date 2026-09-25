import { use, useEffect, type Usable } from "react";
import { getUserAction, type User } from "./api/get-user.action";

// const userPromise = getUserAction(1);
interface Props {
  getUser: Usable<User>;
}

// // export const ClientInformation = async ({ id }: { id: number }) => {
// export const ClientInformation = () => {
export const ClientInformation = ({ getUser }: Props) => {
  // // const user = await getUserAction(id);
  // const user = use(userPromise);
  const user = use(getUser);

  // useEffect(() => {
  //   getUserAction(id).then((user) => console.log(user));
  // }, [id]);

  return (
    <div className="bg-gradient flex flex-col gap-4">
      {/* <h2 className="text-4xl font-thin text-white">Carlos - #123</h2> */}
      <h2 className="text-4xl font-thin text-white">
        {user.name} - #{user.id}
      </h2>
      {/* <p className="text-white text-2xl">Lima, Perú</p> */}
      <p className="text-white text-2xl">{user.location}</p>
      {/* <p className="text-white text-xl">Un rol del usuario</p> */}
      <p className="text-white text-xl">{user.role}</p>
    </div>
  );
};
