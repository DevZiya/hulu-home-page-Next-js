

const HeaderItems = ({ title, Icon,getValue }) => {
  return(
    <div
      className="group flex flex-col items-center cursor-pointer w-12 sm:w-20 hover:text-white"
      onClick={() => getValue(title)}
    >
      <Icon className="h-8 mb-1 group-hover:animate-bounce" />
      <p className="tracking-widest opacity-0 group-hover:opacity-100">
        {title}
      </p>
    </div>
  ) 
};

export default HeaderItems;
