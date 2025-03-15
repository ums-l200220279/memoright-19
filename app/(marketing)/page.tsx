import dynamic from "next/dynamic"

const LandingPage = dynamic(() => import("@/components/landing-page"), {
  ssr: false,  // Nonaktifkan SSR untuk rendering sisi klien
})

export default function Home() {
  return <LandingPage />
}import dynamic from "next/dynamic"

const LandingPage = dynamic(() => import("@/components/landing-page"), {
  ssr: false,  // Nonaktifkan SSR untuk rendering sisi klien
})

export default function Home() {
  return <LandingPage />
}
