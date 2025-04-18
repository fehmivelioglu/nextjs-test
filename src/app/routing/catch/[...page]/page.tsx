export default async function CatchAll({params}: {params: Promise<{page: string[]}>}){
    const {page} = await params
    console.log(page)
    return (
      <div className="bg-red-500">
        <h1>CatchAll : {page.join('/')}</h1>
      </div>
    );
  }
