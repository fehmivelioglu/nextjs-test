import { cookies } from "next/headers";

export default async function CookiePage(){
    const cookieStore = await cookies();
    // cookieStore.set("name","John"); client side cookie set ediyoruz
    const name = cookieStore.getAll();
    console.log(name);
    return (
        <div>
            <h1>Cookie Page</h1>
        </div>
    )
}
