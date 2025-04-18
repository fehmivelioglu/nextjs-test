export default async function RoutingMenu({params}: {params: Promise<{routingmenu: string}>}) {
  const {routingmenu} = await params
  return (
    <div>routingmenu : {routingmenu}</div>
  )
}
