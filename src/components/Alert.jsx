function Alert({ type, text }) {
  return (
    <div className="absolute top-12 left-0 right-0 flex justify-center items-center mt-4">
      <div
        className={`${
          type === "success" ? "bg-blue-800" : "bg-red-800"
        } p-2 text-indigo-100 leading-none rounded-full flex lg:inline-flex items-center shadow-md`}
        role="alert"
      >
        <p
          className={`${
            type === "success" ? "bg-blue-500" : "bg-red-500"
          } flex rounded-full uppercase px-2 py-1 font-semibold mr-3 text-xs`}
        >
          {type === "success" ? "Success" : "Failed"}
        </p>
        <p className="mr-2 text-left">{text}</p>
      </div>
    </div>
  );
}

export default Alert;
