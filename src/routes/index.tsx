import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="w-full">
      <h1 className="text-2xl">Home</h1>
      <Button>Button</Button>
    </div>
  )
}
