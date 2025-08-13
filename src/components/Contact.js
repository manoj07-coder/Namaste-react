const Contact = () => {
  return (
    <div>
      <h1 className="font-semibold text-3xl m-2 p-2">Contact Us Page</h1>
      <form>
        <input
          type="text"
          placeholder="name"
          className="border border-black p-2 rounded-lg m-2"
        />
        <input
          type="text"
          placeholder="message"
          className="border border-black p-2 rounded-lg m-2"
        />
        <button className="bg-gray-200 py-2 px-4 cursor-pointer rounded-lg m-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
