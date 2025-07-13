import ItemCard from "./ItemCard"
const ItemContainer = ({variety, items}) => {
  return (
    <main className="w-full h-fit">
      <h1 className="text-[20px] lg:text-[25px] font-bold pb-[20px]">{variety}</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-5 space-y-4 lg:space-y-7 border-t-1 border-gray-400/40 py-[30px]">
        {items.map(({ id, name, imgsrc}) => (
          <ItemCard key={id} name={name} imgsrc={imgsrc}/>
        ))}
      </div>
    </main>
  )
}

export default ItemContainer