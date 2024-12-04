export default function Home() {
  return (
    <div className="flex flex-col gap-5 h-screen justify-center items-center">
      <h1 className="text-6xl font-bold text-blue-500">Welcome to CICD pipeline!</h1>
      <p className="text-xl text-gray-600">
        This website is built using Next.js and Tailwind CSS.
      </p>
      <p className="text-xl text-gray-600">
        Learn more about me and my projects.
      </p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        Learn More
      </button>
    </div>
  );
}
