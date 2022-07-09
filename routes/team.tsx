// routes/about.tsx
/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function Home() {
  return (
    <div class={tw`w-screen h-screen bg-gray-900 text-white`}>
      <nav class={tw`relative px-6 py-6 flex justify-between-items-center`}>
        <ul class={tw`hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lf:flex 1 g:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6 data-path`}>
          <li class={tw`pr-1px`}><a href="/team" class={tw`text-sm text-gray-400 hover:text-gray-500 href href:# data-config-id:link1`}>Team</a></li>
          <li class={tw`pr-1px`}><a class={tw`text-sm text-gray-400 hover:text-gray-500 href href:# data-config-id:link2`}>Cat Butter</a></li>
          <li class={tw`pr-1px`}><a href="https://www.youtube.com/watch?v=0E4haJHYUJw" class={tw`text-sm text-gray-400 hover:text-gray-500 href  data-config-id:link3`}>Indoor Fireworks</a></li>
        </ul>
      </nav>
      <div class={tw`p-8 mx-auto max-w-screen-md`}>
        <img
          src="/bread.svg"
          width="400px"
          class="mx-auto"
          alt="the yoop logo: cooler than sliced bread"
        />
        <p class={tw`my-10 text(center 2xl)`}>
          someday we'll have the team roster here
        </p>
      </div>
    </div>
  );
}