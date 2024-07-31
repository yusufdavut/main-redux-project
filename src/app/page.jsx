import ToggleTheme from "./(components)/ToggleTheme";

export default function Home() {
  return (
    <main className="flex flex-col w-full h-screen justify-center items-center">
      <h2 className="mb-10 text-3xl">HELLO</h2>
      <ToggleTheme />
    </main>
  );
}
