import { V2_MetaFunction, redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { Button } from "~/components/form";

import supabase from "~/utils/supabase";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Register" }];
};

async function action() {}

async function loader() {}

export default function Register() {
  return (
    <main className="container mx-auto">
      <div className="block md:flex justify-around align-center items-center">
        <section className="max-w-xs mx-auto my-12">
          <h2>Register</h2>
        </section>
        <section className="w-full max-w-xs mx-auto my-12">
          <Form method="post">
            <input type="email" name="email" id="email" />
            <input type="password" name="password" id="password" />
            <Button type="submit">Register</Button>
          </Form>
        </section>
      </div>
    </main>
  );
}
