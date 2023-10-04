import Image from 'next/image'

export default function Home() {
  return (
    <>
      <header className="
        hover:animate-background 
        rounded-xl 
        bg-gradient-to-r 
        from-green-300 
        via-blue-500 
        to-purple-600 
        p-0.5 shadow-xl 
        transition 
        active:bg-[length:400%_400%] 
        active:shadow-sm hover:[animation-duration:_4s] 
        dark:shadow-gray-700/25
      ">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex items-center sm:justify-between sm:gap-4">
            <div className="relative hidden sm:block">
              <label className="sr-only" htmlFor="search"> Busque o código do jogo</label>

              <input
                className="h-10 w-full rounded-lg border-none bg-white pe-10 ps-4 text-sm shadow-sm sm:w-56"
                id="search"
                type="search"
                placeholder="ID do jogo"
              />

              <button
                type="button"
                className="absolute end-1 top-1/2 -translate-y-1/2 rounded-md bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700"
              >
                <span className="sr-only">Search</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>

            <div
              className="flex flex-1 items-center justify-between gap-8 sm:justify-end"
            >
              <div className="flex gap-4">
                <button
                  type="button"
                  className="block shrink-0 rounded-lg bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700 sm:hidden"
                >
                  <span className="sr-only">Search</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>

                <a
                  href="#"
                  className="block shrink-0 rounded-lg bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700"
                >
                  <span className="sr-only">Academy</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                  </svg>
                </a>

                <a
                  href="#"
                  className="block shrink-0 rounded-lg bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700"
                >
                  <span className="sr-only">Notifications</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                </a>
              </div>

              <button
                type="button"
                className="group flex shrink-0 items-center rounded-lg transition"
              >
                <span className="sr-only">Menu</span>
                <Image
                  src="/iconeColabEduc.png"
                  alt="Vercel Logo"
                  className="h-10 w-10 rounded-full object-cover"
                  width={100}
                  height={24}
                  priority
                />
                <p className="ms-2 hidden text-left text-xs sm:block">
                  <strong className="block font-medium text-white">Usuário</strong>

                  <span className="text-white hover:text-sky-400"> usuário@colabeduc.org </span>
                </p>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ms-4 hidden h-5 w-5 text-gray-500 transition group-hover:text-gray-700 sm:block"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="mt-8">
            <h1 className="text-2xl font-bold text-white sm:text-3xl">
              Bem vindo de volta Usuário!
            </h1>

            <p className="mt-1.5 text-sm text-white">
              Sistema de Desenvolvimento Colaborativo de Games Educacionais.
            </p>
          </div>
        </div>
      </header>
      <main className="
        flex 
        min-h-screen 
        flex-col 
        items-center 
        justify-between 
        p-2"
      >
        <div className="
          z-10 
          max-w-6xl 
          w-full 
          items-center 
          justify-between 
          font-mono 
          text-sm 
          lg:flex  
          hover:animate-background 
          rounded-xl 
          bg-gradient-to-r 
          from-green-300 
          via-blue-500 
          to-purple-600 
          p-2.5 shadow-xl 
          transition 
          active:bg-[length:400%_400%] 
          active:shadow-sm hover:[animation-duration:_4s] 
          dark:shadow-gray-700/25 "
        >
          <div className="bg-white py-12 sm:py-32">
            <div className="mx-auto max-w-6xl px-2 lg:px-2">
              <div className="mx-auto max-w-2xl text-center">
                <div className="flex justify-center">
                  <Image
                    src="/colabEducLogoHorizontal.png"
                    alt="colab Logo"
                    className="w-80"
                    width={0}
                    height={0}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                  />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">BEM VINDOS AO COLABEDUC</h2>
                <p className="mt-2 text-lg leading-8 text-gray-600">Sistema de Desenvolvimento Colaborativo de Games Educacionais.</p>
              </div>
              <div className="
                mx-auto 
                mt-2 
                grid 
                max-w-6xl 
                grid-cols-1 
                gap-x-8 
                gap-y-16 
                border-t 
                border-gray-200 
                pt-10 sm:mt-16 
                sm:pt-16 
                lg:mx-0 
                lg:max-w-none 
                lg:grid-cols-2"
              >
                <article
                  className="
                    hover:animate-background 
                    rounded-xl 
                    bg-gradient-to-r 
                    from-green-300 
                    via-blue-500 
                    to-purple-600 
                    p-0.5 shadow-xl 
                    transition 
                    hover:bg-[length:400%_400%] 
                    hover:shadow-sm hover:[animation-duration:_4s] 
                    dark:shadow-gray-700/25"
                  > 
                  <div>
                    <a 
                      className="
                        text-white
                        border-1
                        rounded-[10px] 
                        dark:bg-gray-900 
                        flex justify-center 
                        py-4
                        m-1 
                        hover:bg-[length:400%_400%] 
                        hover:shadow-sm hover:[animation-duration:_4s]" 
                      href="https://matheuscavalcanti0.github.io/spaceodyssey.io/" 
                      rel='noreferrer noopener'
                      target='_blank'>
                        JOGAR
                    </a>
                  </div>
                  <div className="rounded-[10px] bg-white px-4 !pt-20 dark:bg-gray-900 sm:p-6"> 
                    <iframe
                      className="w-full aspect-[4/3] py-4"
                      src="https://www.youtube.com/embed/qyhbejYrLjQ?si=BdNkYNdimuMeq2is"
                      title="YouTube video player"
                      allow="
                        accelerometer; 
                        autoplay; 
                        clipboard-write; 
                        encrypted-media; 
                        gyroscope; 
                        picture-in-picture; 
                        web-share" 
                    >
                    </iframe> 
                    <time
                      dateTime="2022-10-10"
                      className="block text-xs text-gray-500 dark:text-gray-400"
                    >
                      08 Dezembro 2020
                    </time>
 
                      <h3 className="mt-0.5 text-lg font-medium text-gray-900 dark:text-white">
                        Space Odyssey
                      </h3> 
                      <p className="mt-5 line-clamp-10 text-sm leading-6 text-light-600">
                        Space Odyssey é um jogo onde o jogador faz uma incrível jornada pelo
                        Sistema Solar, aprendendo curiosidades e os nomes dos Planetas e
                        satélites naturais, mas para chegar nos destinos, o jogador terá
                        vários obstáculos a sua frente, testando também a habilidade do
                        piloto da nave.
                      </p>

                    <div className="mt-4 flex flex-wrap gap-1">
                      
                      <div className="relative mt-8 flex items-center gap-x-4">
                        <Image
                          src="/iconeColabEduc.png"
                          alt="Vercel Logo"
                          className="h-10 w-10 rounded-full bg-gray-50"
                          width={100}
                          height={24}
                          priority
                        />
                        <div className="text-sm leading-6">
                          <p className="font-semibold text-light-900">
                            <a href="#">
                              <span className="absolute inset-0"></span>
                              matheuscavalcanti0
                            </a>
                          </p>
                          <p className="text-gray-600">Desenvolvedor</p>
                        </div>
                      </div>
                      {/*<span
                        className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 dark:bg-purple-600 dark:text-purple-100"
                      >
                        Snippet
                      </span>

                      <span
                        className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 dark:bg-purple-600 dark:text-purple-100"
                      >
                        JavaScript
                      </span>*/}
                    </div>
                  </div>
                </article><article
                  className="
                    hover:animate-background 
                    rounded-xl 
                    bg-gradient-to-r 
                    from-green-300 
                    via-blue-500 
                    to-purple-600 
                    p-0.5 shadow-xl 
                    transition 
                    hover:bg-[length:400%_400%] 
                    hover:shadow-sm hover:[animation-duration:_4s] 
                    dark:shadow-gray-700/25"
                  > 
                  <div>
                    <a 
                      className="
                        text-white
                        border-1
                        rounded-[10px] 
                        dark:bg-gray-900 
                        flex justify-center 
                        py-4
                        m-1 
                        hover:bg-[length:400%_400%] 
                        hover:shadow-sm hover:[animation-duration:_4s]" 
                      href="https://matheuscavalcanti0.github.io/spaceodyssey.io/" 
                      rel='noreferrer noopener'
                      target='_blank'>
                        JOGAR
                    </a>
                  </div>
                  <div className="rounded-[10px] bg-white px-4 !pt-20 dark:bg-gray-900 sm:p-6"> 
                    <iframe
                      className="w-full aspect-[4/3] py-4"
                      src="https://www.youtube.com/embed/qyhbejYrLjQ?si=BdNkYNdimuMeq2is"
                      title="YouTube video player"
                      allow="
                        accelerometer; 
                        autoplay; 
                        clipboard-write; 
                        encrypted-media; 
                        gyroscope; 
                        picture-in-picture; 
                        web-share" 
                    >
                    </iframe> 
                    <time
                      dateTime="2022-10-10"
                      className="block text-xs text-gray-500 dark:text-gray-400"
                    >
                      08 Dezembro 2020
                    </time>
 
                      <h3 className="mt-0.5 text-lg font-medium text-gray-900 dark:text-white">
                        Space Odyssey
                      </h3> 
                      <p className="mt-5 line-clamp-10 text-sm leading-6 text-light-600">
                        Space Odyssey é um jogo onde o jogador faz uma incrível jornada pelo
                        Sistema Solar, aprendendo curiosidades e os nomes dos Planetas e
                        satélites naturais, mas para chegar nos destinos, o jogador terá
                        vários obstáculos a sua frente, testando também a habilidade do
                        piloto da nave.
                      </p>

                    <div className="mt-4 flex flex-wrap gap-1">
                      
                      <div className="relative mt-8 flex items-center gap-x-4">
                        <Image
                          src="/iconeColabEduc.png"
                          alt="Vercel Logo"
                          className="h-10 w-10 rounded-full bg-gray-50"
                          width={100}
                          height={24}
                          priority
                        />
                        <div className="text-sm leading-6">
                          <p className="font-semibold text-light-900">
                            <a href="#">
                              <span className="absolute inset-0"></span>
                              matheuscavalcanti0
                            </a>
                          </p>
                          <p className="text-gray-600">Desenvolvedor</p>
                        </div>
                      </div>
                      {/*<span
                        className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 dark:bg-purple-600 dark:text-purple-100"
                      >
                        Snippet
                      </span>

                      <span
                        className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 dark:bg-purple-600 dark:text-purple-100"
                      >
                        JavaScript
                      </span>*/}
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-gray-100">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex justify-center text-teal-600">

            <a className="text-gray-700 transition hover:text-gray-700/75" href="/">
              <Image
                src="/colabEducLogoHorizontal.png"
                alt="Vercel Logo"
                className="w-80 flex justify-center"
                width={0}
                height={0}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </a>
          </div>

          <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
            Sistema de Desenvolvimento Colaborativo de Games Educacionais.
          </p>

          <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
            <li>
              <a className="text-gray-700 transition hover:text-gray-700/75" href="/">
                Institucional
              </a>
            </li>

            <li>
              <a className="text-gray-700 transition hover:text-gray-700/75" href="/">
                Descrições
              </a>
            </li>

            <li>
              <a className="text-gray-700 transition hover:text-gray-700/75" href="/">
                Minhas Descrições
              </a>
            </li>

            <li>
              <a className="text-gray-700 transition hover:text-gray-700/75" href="/">
                Projetos
              </a>
            </li>

            <li>
              <a className="text-gray-700 transition hover:text-gray-700/75" href="/">
                Meus Projetos
              </a>
            </li>

            <li>
              <a className="
                text-gray-700 
                transition 
                hover:text-gray-700/75" 
                  href="https://www.natalnet.br/home/" 
                  rel="noreferrer noopener" 
                  target="_blank"
              >
                Natalnet
              </a>
            </li>
          </ul>

          <ul className="mt-12 flex justify-center gap-6 md:gap-8">

            <li>
              <a
                href="/https://www.instagram.com/colabeduc/"
                rel="noreferrer noopener"
                target="_blank"
                className="text-gray-700 transition hover:text-gray-700/75"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                > 
                </svg>
              </a>
            </li>
            {/*<li>
        <a
          href="/"
          rel="noreferrer"
          target="_blank"
          className="text-gray-700 transition hover:text-gray-700/75"
        >
          <span className="sr-only">Facebook</span>
          <svg
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
      </li>

      <li>
        <a
          href="/"
          rel="noreferrer"
          target="_blank"
          className="text-gray-700 transition hover:text-gray-700/75"
        >
          <span className="sr-only">Twitter</span>
          <svg
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
            />
          </svg>
        </a>
      </li>

      <li>
        <a
          href="/"
          rel="noreferrer"
          target="_blank"
          className="text-gray-700 transition hover:text-gray-700/75"
        >
          <span className="sr-only">GitHub</span>
          <svg
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
      </li>

      <li>
        <a
          href="/"
          rel="noreferrer"
          target="_blank"
          className="text-gray-700 transition hover:text-gray-700/75"
        >
          <span className="sr-only">Dribbble</span>
          <svg
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
      </li>
      */}
          </ul>
        </div>
      </footer>
    </>
  )
}
/* 
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore the Next.js 13 playground.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  )
}
 */


      {/*AQUI
      

      <div className="gx ua ark asy aus chh ddh dfk">
    <div className="diy dkj dkv">
        <img className="oe" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&amp;shade=600" alt="Company name" />
        <div className="la mb yi zt dhj diq">
            <div className="clk cms cni">
                <div>
                    <h3 className="awa awg awp axv">Solutions</h3>
                    <ul role="list" className="lk abw">
                        <li><a href="#" className="awa awp axs blb">Marketing</a></li>
                        <li><a href="#" className="awa awp axs blb">Analytics</a></li>
                        <li><a href="#" className="awa awp axs blb">Commerce</a></li>
                        <li><a href="#" className="awa awp axs blb">Insights</a></li>
                    </ul>
                </div>
                <div className="kw ckv">
                    <h3 className="awa awg awp axv">Support</h3>
                    <ul role="list" className="lk abw">
                        <li><a href="#" className="awa awp axs blb">Pricing</a></li>
                        <li><a href="#" className="awa awp axs blb">Documentation</a></li>
                        <li><a href="#" className="awa awp axs blb">Guides</a></li>
                        <li><a href="#" className="awa awp axs blb">API Status</a></li>
                    </ul>
                </div>
            </div>
            <div className="clk cms cni">
                <div>
                    <h3 className="awa awg awp axv">Company</h3>
                    <ul role="list" className="lk abw">
                        <li><a href="#" className="awa awp axs blb">About</a></li>
                        <li><a href="#" className="awa awp axs blb">Blog</a></li>
                        <li><a href="#" className="awa awp axs blb">Jobs</a></li>
                        <li><a href="#" className="awa awp axs blb">Press</a></li>
                        <li><a href="#" className="awa awp axs blb">Partners</a></li>
                    </ul>
                </div>
                <div className="kw ckv">
                    <h3 className="awa awg awp axv">Legal</h3>
                    <ul role="list" className="lk abw">
                        <li><a href="#" className="awa awp axs blb">Claim</a></li>
                        <li><a href="#" className="awa awp axs blb">Privacy</a></li>
                        <li><a href="#" className="awa awp axs blb">Terms</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div className="la afm aga avg bxc cun cuy czg czl">
        <div>
            <h3 className="awa awg awp axv">Subscribe to our newsletter</h3>
            <p className="lb awa awp axs">The latest news, articles, and resources, sent to your inbox weekly.</p>
        </div>
        <form className="lk bxr bzs cui">
            {<label className="t">Email address</label>}
            <input type="email" name="email-address" id="email-address" required className="tn tq yc adu afa alo arf arq avy axv bbn bbt bbx bcf bgd bne bnf bnr bzc cid cif" placeholder="Enter your email" />
            <div className="lh bwj bwv caa"><button type="submit" className="lx tn yz ze adu ajr arf arv awa awg bah bbn bis boy boz bpb bpk">Subscribe</button></div>
        </form>
    </div>
    <div className="lm afm aga avg clh cna cng">
        <div className="lx abl cjp">
            <a href="#" className="axp bkx">
                <span className="t">Facebook</span>
                <svg fill="currentColor" viewBox="0 0 24 24" className="oc se" aria-hidden="true">
                    <path
                        fill-rule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clip-rule="evenodd"
                    ></path>
                </svg>
            </a>
            <a href="#" className="axp bkx">
                <span className="t">Instagram</span>
                <svg fill="currentColor" viewBox="0 0 24 24" className="oc se" aria-hidden="true">
                    <path
                        fill-rule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clip-rule="evenodd"
                    ></path>
                </svg>
            </a>
            <a href="#" className="axp bkx">
                <span className="t">Twitter</span>
                <svg fill="currentColor" viewBox="0 0 24 24" className="oc se" aria-hidden="true">
                    <path
                        d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                    ></path>
                </svg>
            </a>
            <a href="#" className="axp bkx">
                <span className="t">GitHub</span>
                <svg fill="currentColor" viewBox="0 0 24 24" className="oc se" aria-hidden="true">
                    <path
                        fill-rule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clip-rule="evenodd"
                    ></path>
                </svg>
            </a>
            <a href="#" className="axp bkx">
                <span className="t">YouTube</span>
                <svg fill="currentColor" viewBox="0 0 24 24" className="oc se" aria-hidden="true">
                    <path
                        fill-rule="evenodd"
                        d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                        clip-rule="evenodd"
                    ></path>
                </svg>
            </a>
        </div>
        <p className="lm awc awo axr cjo ckv">© 2020 Your Company, Inc. All rights reserved.</p>
    </div>
</div>
  */}

  {
    /*              
                   <article className="flex max-w-xl flex-col items-start justify-between">
                      <div className="flex items-center gap-x-4 text-xs">
                        <time dateTime="2020-03-16" className="text-gray-500">08 Dezembro 2020</time>
                        <a href="#"
                          className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                          Lógica de programação
                        </a>
                      </div>
                      <iframe
                        className="w-full aspect-[4/3]"
                        src="https://www.youtube.com/embed/qyhbejYrLjQ?si=BdNkYNdimuMeq2is"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" >
                      </iframe>
                      <div className="group relative">
                        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                          <a href="#">
                            <span className="absolute "></span>
                            {
                              //inset-0
                            }
                            Space Odyssey
                          </a>
                        </h3>
                        <p className="mt-5 line-clamp-10 text-sm leading-6 text-gray-600">
                          Space Odyssey é um jogo onde o jogador faz uma incrível jornada pelo
                          Sistema Solar, aprendendo curiosidades e os nomes dos Planetas e
                          satélites naturais, mas para chegar nos destinos, o jogador terá
                          vários obstáculos a sua frente, testando também a habilidade do
                          piloto da nave.
                          Link do jogo:
                          <a href='https://matheuscavalcanti0.github.io/spaceodyssey.io/'
                            className="underline decoration-sky-500"
                            rel='noreferrer noopener'
                            target='_blank'
                          > spaceodyssey.io
                          </a>
                        </p>
                      </div>
                      <div className="relative mt-8 flex items-center gap-x-4">
                        <Image
                          src="/iconeColabEduc.png"
                          alt="Vercel Logo"
                          className="h-10 w-10 rounded-full bg-gray-50"
                          width={100}
                          height={24}
                          priority
                        />
                        <div className="text-sm leading-6">
                          <p className="font-semibold text-gray-900">
                            <a href="#">
                              <span className="absolute inset-0"></span>
                              matheuscavalcanti0
                            </a>
                          </p>
                          <p className="text-gray-600">Desenvolvedor</p>
                        </div>
                      </div>
                    </article>
    */}
    