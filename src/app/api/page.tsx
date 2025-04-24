const getDatas = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts",{
        cache:"no-store",
        next:{
            revalidate:10 //10 saniye sonra yeniden çek
        }
    });
    const data = await res.json();
    return data;
}

const getDatas2 = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts",{
        cache:"force-cache"
    });
    const data = await res.json();
    return data;
}

export default async function ApiPage(){
    // const datas = await getDatas();

    // const datas = getDatas();
    // const datas2 =  getDatas2();

    const [dataResult,dataResult2] = await Promise.all([getDatas(),getDatas2()]); // Promise.all ile birlikte çek


    console.log(dataResult);
    return (
        <div>
            <h1>Api Page</h1>
            {dataResult.map((data:any) => (
                <div key={data.id}>{data.title}</div>
            ))}
            </div>
    )
}
