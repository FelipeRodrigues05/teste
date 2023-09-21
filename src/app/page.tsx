import Button from "@/components/Button";

export default function Home() {
  return (
    <>
      <div className="mx-auto p-3 container">
        <div className="bg-indigo-400 text-white">
          <p className="text-2xl antialiased font-bold mx-3">Hello World</p>
        </div>
        <div className="bg-indigo-500">
          <p className="text-xl antialiased font-extralight mx-4">
            Hello World 2
          </p>
        </div>
        <div className="flex flex-row pt-5">
          <Button size="sm" color="primary">
            Small
          </Button>
          <Button size="md" color="secundary">
            Medium
          </Button>
          <Button size="lg" color="warning">
            Large
          </Button>
          <Button size="xl" color="danger">
            Extra Large
          </Button>
        </div>

        <div className="flex flex-col pt-3">
          <div className="flex-row flex border max-w-[360px] border-zinc-500">
            <div className="bg-purple-100 h-10 w-10" />
            <div className="bg-purple-200 h-10 w-10" />
            <div className="bg-purple-300 h-10 w-10" />
            <div className="bg-purple-400 h-10 w-10" />
            <div className="bg-purple-500 h-10 w-10" />
            <div className="bg-purple-600 h-10 w-10" />
            <div className="bg-purple-700 h-10 w-10" />
            <div className="bg-purple-800 h-10 w-10" />
            <div className="bg-purple-900 h-10 w-10" />
          </div>

          <div className="flex-row flex border max-w-[360px] border-zinc-500">
            <div className="bg-indigo-100 h-10 w-10" />
            <div className="bg-indigo-200 h-10 w-10" />
            <div className="bg-indigo-300 h-10 w-10" />
            <div className="bg-indigo-400 h-10 w-10" />
            <div className="bg-indigo-500 h-10 w-10" />
            <div className="bg-indigo-600 h-10 w-10" />
            <div className="bg-indigo-700 h-10 w-10" />
            <div className="bg-indigo-800 h-10 w-10" />
            <div className="bg-indigo-900 h-10 w-10" />
          </div>
        </div>
      </div>
    </>
  );
}
