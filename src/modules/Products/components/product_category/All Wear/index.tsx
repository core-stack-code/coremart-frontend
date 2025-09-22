
interface CategoryProps {
    item: {
    image_url: string;
    category_name: string;
  };
  label: string;
  setLabel: (label: string) => void;
}

const AllWear: React.FC<CategoryProps> = ({ item, label, setLabel }) => {
  

  const { image_url, category_name } = item

  return (
    <>
      <div
      className="flex-shrink-0 w-auto p-2 text-center cursor-pointer"
      onClick={() => setLabel(category_name)}
    >
      <div
        className={`
          w-32 h-32 flex justify-center items-center rounded-full
          ${label === category_name
            ? "shadow-[0_0_10px_rgba(147,51,234,1)]"
            : "shadow-[0_0_10px_rgba(0,0,0,0.25)]"}
        `}
        style={{ backgroundColor: "background" }}
      >
        <img
          src={image_url}
          alt={category_name}
          className="w-28 h-28 object-cover mx-auto rounded-full"
        />
      </div>
      <p
        className={`mt-2 text-sm ${
          label === category_name
            ? "text-primary font-bold"
            : "text-ymuted"
        }`}
      >
        {category_name}
      </p>
    </div>

    </>
  )
}

export default AllWear